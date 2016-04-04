
window.onload = function(){

    //$('.articles').hide();
    $('div.active').show();
    $('#list').on('click','li',function(){
    //$('li').click( function(){
        $('li.active').removeClass('active');
        $(this).addClass('active');
        $('div.active').removeClass('active').hide();
        $('div.articles').eq($(this).index()).addClass('active').show();
        //$('.articles').hide();
        //$('div.active').show();
    });
    
}