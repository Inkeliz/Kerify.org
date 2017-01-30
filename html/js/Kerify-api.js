(function($){

    var host = 'https://api.kerify.org/';

    /*
    Method => Method => "signature" or "encrypt"
    
    Callback => Array => ['before' => A, 'after' => B]
                  A => Run before the ajax
                  B => Run with the ajax response
    
    Custom => Array => ['text' => A, 'key' => B]
                  A => The custom text (by default will get the textarea/input with name "text")
                  B => The custom key (by default will get the textarea/input with name "key")
    
     */
    $.fn.Kerify = function(method, callback, custom) {


        var text_location = typeof(custom) != 'undefined' && typeof(custom['text']) != 'undefined' ? custom['text'] : $(this).find('[name="text"]');
        var key_location = typeof(custom) != 'undefined' && typeof(custom['key']) != 'undefined' ? custom['key'] : $(this).find('[name="key"]');

        $(this).on('submit', function (e){

            e.preventDefault();
            callback['before'](method);
            
            $.posting(method, callback, {'text': text_location.val(), 'key': key_location.val()});

        });

    };

    $.posting = function (method, callback, parameter) {

        $.post(host+method+'.php', parameter)
            .success(function(data){callback['after'](method, JSON.parse(data), 200);})
            .error(function(data){callback['after'](method, JSON.parse(data.responseText), data.status);});

    };

})(jQuery);