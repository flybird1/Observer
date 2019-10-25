(function () {
  //更改用户消息数目即普田
  function changeMsgNum(e) {
    var num = e.args.num ;
    $('msg_num').innerHTML = parseInt($('msg_num').innerHTML) + num
  }
  //注册添加评论信息
  Observer.regist('addCommentMessage', changeMsgNum);
  Observer.regist('removeCommentMessage', changeMsgNum);
})();