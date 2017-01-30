<?php

putenv("GNUPGHOME=/usr/gnupg");

function return_message(int $code, array $array){

    http_response_code($code);
    echo json_encode(['valid' => $code === 200] + $array);

    exit;

}


class Kerify{

    protected $key;
    protected $text;

    private $gnupg;

    private $key_info;
    private $text_info;


    public function __construct(string $key, string $text = ''){

        $this->key = trim($key);
        $this->text = trim($text);

        $this->gnupg = new gnupg();
        $this->gnupg->setarmor(true);

    }

    // BASIC FILTER

    public function exist_key(){

        return ( empty($this->key) === false
            && strpos($this->key, 'BEGIN PGP PUBLIC KEY BLOCK') !== false
            && strpos($this->key, 'END PGP PUBLIC KEY BLOCK') !== false );

    }

    public function exist_signed(){

        return ( empty($this->text) === false
            && strpos($this->text, 'BEGIN PGP SIGNED MESSAGE') !== false
            && strpos($this->text, 'BEGIN PGP SIGNATURE') !== false
            && strpos($this->text, 'END PGP SIGNATURE') !== false );

    }

    public function exist_plain(){

        return empty($this->text) === false;
            
    }

    // GNUPG

    public function import_key(){

        $this->key_info = $this->gnupg->import($this->key);

        return $this->key_info !== false;

    }

    public function signature(){

        $this->text_info = $this->gnupg->verify($this->text, false);

        return $this->text_info[0]['fingerprint'] === $this->key_info['fingerprint'];

    }

    public function encrypt(){

        $this->gnupg->addencryptkey($this->key_info['fingerprint']);

        return $this->gnupg->encrypt($this->text);

    }

    public function info(){

        return $this->gnupg->keyinfo($this->key_info['fingerprint']);
        
    }
    

}