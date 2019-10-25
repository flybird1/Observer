(function () {
  //更改用户消息数目
  function changeMsgNum(e) {
    var num = e.args.num ;
    $('msg_num').innerHTML = parseInt($('msg_num').innerHTML) + num
  }
  Observer.regist('addCommentMessage', changeMsgNum);
  Observer.regist('removeCommentMessage', changeMsgNum);
})();