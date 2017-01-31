# Kerify.org
Kerify is a simple software to provide a easiest way to check the PGP Signature, this all the source-code from [kerify.org](https://kerify.org).

### Dependencies:

- [GnuPG for PHP](https://github.com/php-gnupg/php-gnupg)
- [JQuery](https://github.com/jquery/jquery) already in `/html/js/vendor`
- [Bootstrap](https://github.com/twbs/bootstrap) already in `/html/js/vendor` and `/html/css/vendor`

## Usage:

You can host your own Kerify.org for free or can use the `lib/Kerify.php` in your project to simplify the `GnuPG`, this only allow _verify signature_ and _encrypt_ the message, this also need the `GnuPG library`, in alternative you can use the _Kerify Server_ to do the job.

### Hosted:

#### Verify:

    $Kerify = new Kerify($key, $text);
    $Kerify->import();
   
    var_dump( $Kerify->signature() );

#### Encrypt:
   
    $Kerify = new Kerify($key, $text);
    $Kerify->import();
   
    var_dump( $Kerify->encrypt() );

### Webapi:

> This not recommended!

#### Verify:

```
$ch = curl_init('http://api.kerify.org/signature.php');

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => http_build_query([
        'key' => $key,
        'text' => $text
    ])
]);

$json = json_decode(curl_exec($ch), true);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

echo $code === 200 ? 'Yeah!' : 'Opss!';
```

#### Encrypt:

```
$ch = curl_init('http://api.kerify.org/encrypt.php');

curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POSTFIELDS => http_build_query([
        'key' => $key,
        'text' => $text
    ])
]);

$json = json_decode(curl_exec($ch), true);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

echo $code === 200 ? $json['response'] : 'Opss!';
```
