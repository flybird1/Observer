(function () {
  //提交消息功能
  $('user_submit').onclick = function () {
    var text = $('user_input')
    //如果消息为空则提交失败
    if (text.value === '') {
      return
    }
    //发布一条消息
    Observer.fire('addCommentMessage', {
      text: text.value,//消息评论内容
      num: 1 //消息评论数目
    });
    text.value = '';//将输入框置为空
  }
})();