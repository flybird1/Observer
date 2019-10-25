(function () {
  //在页面绘制追加的消息
  function addMsgItem(e) {
    var text = e.args.text, //获取消息中用户添加的文本内容
      ul = $('msg'),
      li = document.createElement('li'),
      a = document.createElement('a');
      a.innerHTML = '&nbsp;&nbsp;&nbsp;移除留言';
      li.innerHTML = text; 
      console.info(text)

    a.onclick = function () {
      ul.removeChild(li);
      Observer.fire('removeCommentMessage', { num: -1 });
    }
    li.appendChild(a);
    ul.appendChild(li);
  }

  Observer.regist('addCommentMessage', addMsgItem);
})();
