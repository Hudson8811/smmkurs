//= libs/jquery-sortable.js

$(document).ready(function () {
    $('.admin-potok__dot').on('click',function (){
        event.preventDefault();
       var parent = $(this).parent();
       if (!parent.hasClass('.admin-potok--next') && !parent.hasClass('.admin-potok--end')){
           var data = parent.data('id');
           $.fancybox.open({
               src  : '#agreeModal',
               type : 'inline',
               opts : {
                   modal: true,
                   afterShow : function( instance, current ) {
                       $('.js-agree').off();
                       $('.js-false').off();
                       $('.js-agree').on('click',function (){
                           $('.admin-potok--next').removeClass('admin-potok--next');
                           parent.addClass('admin-potok--next');
                           $.fancybox.close();
                       });
                       $('.js-false').on('click',function (){
                           $.fancybox.close();
                       });
                   }
               }
           });
       }

    });


    $('#kurs-list').sortable({
        handle: '.kurs-list__item-dots',
        invertSwap: true,
        animation: 150
    });
    $(document).on('click','.js-remove-urok',function(){
        event.preventDefault();
        var id = $(this).siblings('input[name="urok[]"]').val();
        $(this).parent().remove();
        $('#kurs-list-all').find('input[name="urok[]"][value="'+id+'"]').parent().removeClass('active');
    });
    $(document).on('click','#kurs-list-all .kurs-list__item-add',function(){
        event.preventDefault();
        if (!$(this).parent().hasClass('active')){
            var $block =  $(this).parent().clone();
            $('#kurs-list').append($block);
            $(this).parent().addClass('active');
        }
    });

    $(document).on('click','.js-add-all-urok',function(){
        event.preventDefault();
        $('#kurs-list-all .kurs-list__item').each(function (){
            if (!$(this).hasClass('active')){
                var $block =  $(this).clone();
                $('#kurs-list').append($block);
                $(this).addClass('active');
            }
        })
    });


    $(document).on('click','.js-del-people',function(){
        event.preventDefault();
        var element = $(this).closest('.people-list__item');
        var data = element.data('id');
        var email = element.find('.people-list__item-email').html();
        $('#agreeModal .admin-modal__text strong').html(email);
        $.fancybox.open({
            src  : '#agreeModal',
            type : 'inline',
            opts : {
                modal: true,
                afterShow : function( instance, current ) {
                    $('.js-agree').off();
                    $('.js-false').off();
                    $('.js-agree').on('click',function (){
                        element.remove();
                        $.fancybox.close();
                    });
                    $('.js-false').on('click',function (){
                        $.fancybox.close();
                    });
                }
            }
        });
    });

    $(document).on('click','.js-edit-people',function(){
        event.preventDefault();
        var element = $(this).closest('.people-list__item');
        var data = element.data('id');
        var email = element.find('.people-list__item-email').html();
        element.find('.admin-edit-modal').toggle();

    });

    $(document).mouseup(function(e)
    {
        var container = $(".admin-edit-modal");
        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            container.hide();
        }
    });


    $(document).on('click','.js-delete-urok',function(){
        event.preventDefault();
        var element = $(this).parent();
        var id = element.find('input[name="urok[]"]').val();
        $.fancybox.open({
            src  : '#agreeModal',
            type : 'inline',
            opts : {
                modal: true,
                afterShow : function( instance, current ) {
                    $('.js-agree').off();
                    $('.js-false').off();
                    $('.js-agree').on('click',function (){
                        element.remove();
                        $.fancybox.close();
                    });
                    $('.js-false').on('click',function (){
                        $.fancybox.close();
                    });
                }
            }
        });
    });

    $(document).on('click','.js-new-urok',function(){
        event.preventDefault();
        $.fancybox.open({
            src  : '#newUrokModal',
            type : 'inline',
            opts : {
                modal: true,
                afterShow : function( instance, current ) {
                    $('.js-agree').off();
                    $('.js-false').off();
                    $('.js-agree').on('click',function (){
                        $.fancybox.close();
                    });
                    $('.js-false').on('click',function (){
                        $.fancybox.close();
                    });
                }
            }
        });
    });
    $(document).on('click','.js-edit-urok',function(){
        event.preventDefault();
        $.fancybox.open({
            src  : '#editUrokModal',
            type : 'inline',
            opts : {
                modal: true,
                afterShow : function( instance, current ) {
                    $('.js-agree').off();
                    $('.js-false').off();
                    $('.js-agree').on('click',function (){
                        $.fancybox.close();
                    });
                    $('.js-false').on('click',function (){
                        $.fancybox.close();
                    });
                }
            }
        });
    });

    function readURL(input) {
        var parent = $(input).parent();
        console.log(parent);
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $(input).siblings('img').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
            parent.addClass('active')
        } else {
            parent.removeClass('active')
        }
    }
    $(".js-photo-add input").change(function(){
        readURL(this);
    });

});

