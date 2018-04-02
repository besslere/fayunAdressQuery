/*
 * 入库地址和非工商名址查询--Javascript
 * @Author:Zou Yuan
 * @Date:2017-6-2
 */

/*根据屏幕宽度为查询按钮增删Class*/

/*
$(function(){
    $(window).resize(function() {
        var ww = $(window).width();
        if( ww > 768 ){
            $('.btn-cx').removeClass('btn-block')
        } else if( ww < 768){
            $('.btn-cx').addClass('btn-block');
        }
    });
});*/

/*点击查询显示结果*/
$(function(){
    $('.btn-cx').click(function(){//点击a标签
        if($('.ku').is(':hidden')){//如果当前隐藏
            $('.ku').show();//那么就显示div
        }else{//否则
            $('.ku').hide();//就隐藏div
        }
    })
})
