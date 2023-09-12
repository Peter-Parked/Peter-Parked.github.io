
    $(function () {
        // 全选按钮
        $('.checkall').change(function () {
            var my = $(this)[0].checked;
            // console.log(my);
            $('.j-checkbox,.checkall').prop("checked", my);
            if (my) {
                $('.j-checkbox').parents('.cart-item').addClass('check-cart-item');
            } else {
                $('.j-checkbox').parents('.cart-item').removeClass('check-cart-item');
            }

        });
    // 单选按钮
    $('.j-checkbox').change(function(){
                var Maxlen=$('.j-checkbox').length;
    var len=$('.j-checkbox:checked').length;
    // console.log(len);
    if(len==Maxlen){
        $('.j-checkbox,.checkall').prop("checked", true);
                }else{
        $('.checkall').prop("checked", false);
                }

    // console.log($(this).parents('.cart-item'));
    if($(this).prop('checked')){
        $(this).parents('.cart-item').addClass('check-cart-item');
                }else{
        $(this).parents('.cart-item').removeClass('check-cart-item');
                }
            });
    // 增减商品数量模块
    $('.increment').click(function(){
            var n= parseInt($(this).siblings('.itxt').val());
    n++;
    $(this).siblings('.itxt').val(n);
    // 对价格进行操作
    var price=$(this).parents().siblings('.p-price').html().substring(1);
    // console.log(price);

    $(this).parents().siblings('.p-sum').html('￥' + (price * n).toFixed(2));
    getSum();
            });

    $('.decrement').click(function(){
                var n= parseInt($(this).siblings('.itxt').val());
    if(n==1) return false;
    n--;
    $(this).siblings('.itxt').val(n);
    // 对价格进行操作
    var price = $(this).parents().siblings('.p-price').html().substring(1);
    // console.log(price);

    $(this).parents().siblings('.p-sum').html('￥' + (price * n).toFixed(2));
    getSum();
            });
    $('.itxt').change(function(){
                var n=parseInt($(this).val());
    $(this).val(n);
    var my="1233223";
    my=my.substring(1,3);
    console.log(my);
    // console.log(n);
    // console.log(Number.isFinite(n),Number.isSafeInteger(n));;
    var price = $(this).parents().siblings('.p-price').html().substring(1);

    $(this).parents().siblings('.p-sum').html('￥' + (price * n).toFixed(2));
    getSum();
            });

    //进入界面优先调用一次
    getSum();
    function getSum(){
                var count=0;
    var money=0;
    for(var i=0;i<$('.itxt').length;i++){
                    var h = $('.itxt').eq(i).val();
    var mi=$('.p-sum').eq(i).html().substring(1);
    // console.log(h,mi);
    count+=parseInt(h);
    money+=parseFloat(mi);
                }

    $('.amount-sum em').html(count);
    $('.price-sum em').html('￥'+money.toFixed(2));

            }

    // 删除商品操作
    $('.p-action a').click(function(){
        $(this).parents('.cart-item').remove();
    getSum();
            });
    $('.remove-batch').click(function(){
        $('.j-checkbox:checked').parents('.cart-item').remove();
    getSum();
            });
    $('.clear-all').click(function(){
        $('.cart-item').remove();
    getSum();
            });
        });

