$(function(){
  calc()
  function calc() {
    var checked_num = 0
    var total_money = 0
    //计算每件商品小计 单价*数量（保留两位小数）
    $('.total').map((i, k) => {
      $(k).text(parseInt(($(k).prev().prev().text().replace('￥', '')) * $(k).prev().find('input').val()).toFixed(
        2))
    })
    $('.s_ck').map((i, k) => {
      if ($(k).prop('checked') == true) {
        checked_num++
        var parent = $(k).parent().parent()
        total_money += parent.find('.total').text() - 0
      }
    })
    //商品选中数量
    $('#totalCount').text(checked_num)
    //计算合计
    $('#totalPrice').text(total_money.toFixed(2))

  }
  //商品数量加减(最小值为1，最大值为999)
  $('.count-c').map((i, k) => {
    // 数量减
    $(k).find('button').eq(0).click(function () {
      var num = parseInt($(this).next().val());
      num--;
      num = num < 1 ? 1 : num;
      if(num===1) {
        $(this).attr("disabled",true)
      }
      $(this).next().val(num);
      calc();
    })
    // 数量加
    $(k).find('button').eq(1).click(function () {
      var num2 = parseInt($(this).prev().val());
      num2++;
      num2 = num2 > 999 ? 999 : num2;
      $(k).find('button').eq(0).removeAttr("disabled")
      $(this).prev().val(num2);
      calc();
    })
    // 手动输入(这里可根据需要对输入的内容做正则验证)
    $(k).find('input').blur(function () {
      var num3 = parseInt($(this).val());
      num3 = num3 > 999 ? 999 : (num3 < 1 ? 1 : num3);
      $(this).val(num3);
      calc();
    })
  })

  //   全选
  $("#all").click(function () {
    console.log($(this).prop('checked'))
    if ($(this).prop('checked') == true) {
      $(".s_ck").prop("checked", true).parent().parent().css("background","#eee");
      $('#all').prop('checked',true);
    } else {
      $(".s_ck").prop("checked",false).parent().parent().removeAttr("style");
      $('#all').prop('checked',false);
    }
    calc();
  });

//   删除
$('.del').click(function(){
    $(this).parent().parent().remove();
    calc();
})

// 清空购物车
$('.clear').click(function(){
    $('#carBody').children().remove();
    calc();
})

$('.s_ck').click(function(){
    if($(this).prop("checked")==true){
        $(this).parent().parent().css("background","#eee");
        for(let i=$('.s_ck').length-1;i>=0;i--){
            if($('.s_ck').eq(i).prop("checked")!==true){
                continue;
            }
            $('#all').eq(i).prop('checked',true);
        }
    }else{
        $(this).parent().parent().removeAttr("style");
        $('#all').prop('checked',false);
    }
    calc();
})
// 删除所选
$('.del-all').click(function(){
    for(let i=$('.s_ck').length;i>=0;i--){
        if($('.s_ck').eq(i).prop("checked")==true){
            $('.s_ck').eq(i).parent().parent().empty();
        }
    }
    calc();
})
});
