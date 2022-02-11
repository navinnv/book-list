<?php
    header('Content-type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: POST,GET,PUT,REQUEST,DELETE");
    header("Access-Control-Request-Headers: Content-type,Access-Control-Allow-Headers,Access-Control-Allow-Methods,Athorization, X-Requested-With");
    
    $conn = new mysqli('localhost', 'root', '', 'books');
    date_default_timezone_set("Asia/Kolkata");
    $dateTime = date('d/m/Y h:i:s a', time());

    $req = json_decode(file_get_contents('php://input'), true);

    if(isset($_SERVER['REQUEST_METHOD']) && ($_SERVER['REQUEST_METHOD'] == "POST")){
        if($req["action"] == "add-cart"){
            $datas = $req["datas"];
            $res = $conn->query("SELECT * FROM `cart` WHERE `bookId`='".$datas["bookId"]."' ");
            if ($res->num_rows > 0){
                while ($row = $res->fetch_assoc()){
                    $query = "UPDATE `cart` SET `quantity`=`quantity`+'".$datas["quantity"]."',`updatedOn`='$dateTime' WHERE `id`='".$row["id"]."' ";
                }
            }else{
                $query = "INSERT INTO `cart` (`bookId`,`price`,`quantity`,`total`,`status`,`createdOn`) VALUES 
                ('".$datas["bookId"]."','".$datas["price"]."','".$datas["quantity"]."','".number_format($datas["total"],2)."','1','$dateTime')";
            }
            echo json_encode(array("status"=>true,"msg"=>($conn->query($query) ? true : mysqli_error($conn))));
        }else
        if($req["action"] == "cart-data"){
            $msg = false;
            $datas = [];
            $res = $conn->query("SELECT * FROM `cart` ".(isset($req["datas"]) && ($req["datas"] != '') ? "WHERE `status`='".$req["datas"]."' " : "") );
            if ($res->num_rows > 0){
                $msg = true;
                while ($row = $res->fetch_assoc()){
                    array_push($datas,$row);
                }
            }
            echo json_encode(array("status"=>true,"msg"=>$msg,"data"=>$datas));
        }else
        if($req["action"] == "add-recent"){
            $book = $req["datas"]["bookId"];
            $exist = false;
            $res = $conn->query("SELECT * FROM `recent` ORDER BY id DESC LIMIT 5");
            if ($res->num_rows > 0){
                while ($row = $res->fetch_assoc()){
                    if($row["bookId"] == $book){
                        $exist = true;
                    }
                }
            }
            if(!$exist){
                $query = "INSERT INTO `recent` (`bookId`,`createdOn`) VALUES ('".$req["datas"]["bookId"]."','$dateTime')";
                echo json_encode(array("status"=>true,"msg"=>($conn->query($query) ? true : mysqli_error($conn))));
            }else{
                echo json_encode(array("status"=>true,"msg"=>false));
            }
        }else
        if($req["action"] == "get-recent"){
            $msg = false;
            $datas = [];
            $res = $conn->query("SELECT * FROM `recent` ORDER BY id DESC LIMIT 5");
            if ($res->num_rows > 0){
                $msg = true;
                while ($row = $res->fetch_assoc()){
                    array_push($datas,$row["bookId"]);
                }
            }
            echo json_encode(array("status"=>true,"msg"=>$msg,"data"=>$datas));
        }
    }else
    if(isset($_SERVER['REQUEST_METHOD']) && ($_SERVER['REQUEST_METHOD'] == "PUT")){
        if($req["action"] == "update-data"){
            $query = "UPDATE `cart` SET `total`='".number_format($req["datas"]["total"],2)."',`quantity`='".$req["datas"]["quantity"]."',`updatedOn`='$dateTime' WHERE `id`='".$req["datas"]["id"]."' ";
            echo json_encode(array("status"=>true,"msg"=>($conn->query($query) ? true : mysqli_error($conn))));
        }
    }else
    if(isset($_SERVER['REQUEST_METHOD']) && ($_SERVER['REQUEST_METHOD'] == "DELETE")){
        if($req["action"] == "delete-data"){
            $query = "UPDATE `cart` SET `status`='0',`updatedOn`='$dateTime' WHERE `id`='".$req["datas"]["id"]."' ";
            echo json_encode(array("status"=>true,"msg"=>($conn->query($query) ? true : mysqli_error($conn))));
        }
    }else
    if(isset($_SERVER['REQUEST_METHOD']) && ($_SERVER['REQUEST_METHOD'] == "GET")){
        if($_GET["test"]){
            echo "Configed! successfully.";
        }
    }