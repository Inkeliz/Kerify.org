(function($) {
    "use strict";

    // Basic Theme

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $('#mainNav').affix({
        offset: {
            top: 50
        }
    });

    $('.Bt').text('-----BEGIN PGP SIGNED MESSAGE-----');
    $('.Bs').text('-----BEGIN PGP SIGNATURE-----');
    $('.Te').attr('placeholder', "-----BEGIN PGP SIGNED MESSAGE-----\nHash: SHA256\n\nHey dude,\n\nHere you insert the signed text that someone sent to you. ;)\nThis is so simple, right?\n-----BEGIN PGP SIGNATURE-----\nVersion: GnuPG v2\n\niQEcBAEBCAAGBQJYiG+hAAoJEF54XF5UkBysqMEH/jKnW8wDc51qSFE2xk1juO6o\nvBMZPTIgOsBXUYcW7ke6xhS6fr+sFbFfNoLUDbP5sCnJo1dMLsvmjdfCtdhhjPTK\nWLDlScALJK1NdehL6RYSTNbdI6lTyBvsrLAb/Zq4DrFAUcq8OsHeWhlIjg8eaRoY\nsd+paZVP4hBMz9ItvpL6t3T/NIgmjHqQ24UKk5MS+gBPnzfe8x7BJhGoe35jd1jU\nANTzTzzv4V/xlzr1s4kbjJb9msDdTr0HRiT9H8L9okG1Z/OC+O+RGvBIBfhiKDpK\n8HKjjI3uIhR4USNSOiSvFI9CEzLKfPwMe3BCUY/2dwRMTKAIaQggJ5TXb9ucXIA=\n=kcep\n-----END PGP SIGNATURE-----");
    $('.Tt').attr('placeholder', "Hey,\n\nYou need to encrypt some message?\nThat's fine, insert your text here and we'll encrypt it for you. ;)");
    $('.Tk').attr('placeholder', "-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v2\n\nmQENBFiIbasBCADTMuBhIufYA7x+ZwWGsNVW60CHEhXehMiPV7p0tIWVsBflvndt\nYE+6v4n4FDyEicSkRMkcwpeDuKgsgiyIhtZtRTVT08wvVx0vT76wYpaqbYzKYpIN\naZYnHImdghajWwKgovQJLAPTOUFvA/lXnyqcOCxoi5fXzwCUU5eYXoGyv8GfQlYd\naidQFgEOLqCuZzIcv1nKRyQzzk9gd4DrFVHHbsGS5gYk8io5hJvJ3rJQPixeqkmW\nJ9/UQv/yA+4/mgolpiIkxall6W5UDuVVSkTVNMaesybCw9wz2UVDaXjSwaKntjS0\nAuUCv2DKupjkw93L+DMQlgFNCxXpds0obF4RABEBAAG0I0tlcmlmeSAoS2VyaWZ5\nKSA8a2VyaWZ5QGtlcmlmeS5vcmc+iQE5BBMBCAAjBQJYiG2rAhsDBwsJCAcDAgEG\nFQgCCQoLBBYCAwECHgECF4AACgkQXnhcXlSQHKzHaggArveoaEqCKJ9sj0HiFEq/\nlp6iE3YXu/Csws95L61S/AqW91kuuApE3esVqp2yv/dOBR8eSIDXhhPSJacyM/Be\nduqGqOmz/p0b1Ix8f9lJFNFkgV6eVLp3AHpPdijF7bK5PR5TKFoojRzBOdUv86lm\n+rM6qHSy65to9dy2wADdjRTlEYT+5JDWVkHm/4MuqcYcCcXJsAHPsb6dis7j7+xw\nFaXmUDXIos2xNk/JeoHNnw8wxjMCDzQzRJyESbMCcVEbkPpWACvJ4AEUNCmQgOSZ\n1NhqXQV7rsNz0VoAWRgA4dAhXCvMcdH4BZJsxVoIJ56uB6Yw44RbDqs2uU2gejPm\nF7kBDQRYiG2rAQgA1b+PRP8Fk7FFMq5iTKMeRk+SmqS04NRfcWKNeUNQufjYiuYM\nOupEUO0r2GgLZ+NqMhQRs/HQN+2EmsN9hKWc79RXDFsqS+nc1dsRt3ZH/JT4B0YB\nPbAiIE+Mxn3sGZJINomdmk1UkelXFm2pYy+54eDCrmH3HquYBi0fDAAVLNGvf/y4\njPNWEOTVNoLIjunFSD+l/ZCKtTMY6LkGxV0v+f1AqP0H/utBo0xrL5/wZ2Lh8QEW\nx7C3TNZBj8ocZMa+juRBov9HH9CN+WXjvT6QZjL2Thr8ePMJw6gaEEMM7oc5MjEX\niXnO6XDNnoMS8FHXqsnfkWQITNvx5fSC+MxipQARAQABiQEfBBgBCAAJBQJYiG2r\nAhsMAAoJEF54XF5UkBysWbQH/2pvGSHWwKcoup/9K10OT1Nrarcv6DS1QKwTLocV\ny1p1Bz2Wk594s7/6cfKvk6nAVUDs2gWTgdq6K5vZ745muCYlvccpm3HOpp4WKcHm\nuAoDfS+0giK9HSsxIyBlx9LaxhPzTuM8ymvAfa4nlH2j81jIQr0RXVGdkAObBJZk\ndI/lfvLoFUd9bKjpou+4yMVVgZUDuOgkcilemvldSaP8iLAf9ZWniLggQuUwh22I\n9x9euxRxBkCo26C0LyULTVhtXTrnTSPCCuhPNEmgCriBY0H0A4LrnvqBf0D25cjq\nDPiupYrGOgv3whzeMzm4ItRlf2lo4evC/2dG542l4YiT+Pk=\n=jO2G\n-----END PGP PUBLIC KEY BLOCK-----");

    $('[data-reset]').on('click', function (){

        var method = $(this).data('reset');

        $('form[name="'+method+'"]').removeClass('hidden');
        $('.'+method).addClass('hidden');


    });

    function form_size() {

        $.each($('form'), function(){

            var h = $(this).find('.row:eq(0)').height();

            $(this).siblings('.hidden').find('.return:eq(0)').css('height', h - 30);
            $(this).siblings('.hidden').find('.row:eq(0)').css('height', h);


        });

    }

    form_size();

    $(window).resize(form_size);

    // Using Kerify API

    $('form[name="signature"]').Kerify('signature', {'before': loading, 'after': response});
    $('form[name="encrypt"]').Kerify('encrypt', {'before': loading, 'after': response});

    $('button').removeAttr('disabled');

    function loading(method){

        if($('form[name="'+method+'"] button')[0].hasAttribute('disabled')){
            setTimeout(function(){$('form[name="' + method + '"] button').removeAttr('disabled');}, 1000);
        }else {
            $('form[name="' + method + '"] button').attr('disabled', true);
        }

    }

    function response(method, json, status) {

        var validation = {

            200 : ['icon-check'],
            400 : ['icon-close'],
            403 : ['icon-close'],
            500 : ['icon-exclamation', 'Sorry, have a problem in the Kerify. :(']

        };

        $('form[name="'+method+'"]').addClass('hidden');

        var $base = $('.'+method);
        var $location = $base.find('.return');
        
        var $class = typeof(json) !== 'undefined' ? validation[ status ][0] : validation[500][0];
        var $text = typeof(json) !== 'undefined' ? json['msg'] : validation[500][1];
        var $response = typeof(json) !== 'undefined' ? json['response'] : '';
        
        $location.find('textarea').text();

        $location.find('i').removeClass().addClass($class);
        $location.find('p').text($text);
        $location.find('textarea').text($response);

        $base.removeClass('hidden');

        loading(method);

    }

})(jQuery); 
