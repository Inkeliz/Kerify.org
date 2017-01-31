<?php

header("Access-Control-Allow-Origin: *");
http_response_code(400);

require '../lib/Kerify.php';

if(isset($_POST['text'], $_POST['key'])) {

    $Kerify = new Kerify($_POST['key'], $_POST['text']);

    if (!$Kerify->exist_key() || !$Kerify->exist_plain()){

        return_message(400, ['msg' => 'You sent a invalid request!']);

    }

    if (!$Kerify->import_key()){

        return_message(400, ['msg' => 'This key is invalid!']);

    }

    if ($encrypted = $Kerify->encrypt()){

        return_message(200, ['msg' => 'The message as been encrypted', 'response' => $encrypted]);

    } else {

        return_message(403, ['msg' => 'Impossible to encrypt the message!']);

    }

}

?>