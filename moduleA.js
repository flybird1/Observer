(function () {
  //追加一则消息
  function addMsgItem(e) {
    var text = e.args.text, //获取消息中用户添加的文本内容
      ul = $('msg'),//留言容器元素
      li = document.createElement('li'),//创建内容容器元素
      a = document.createElement('a');//删除按钮
      a.innerHTML = '&nbsp;&nbsp;&nbsp;移除留言';
      li.innerHTML = text; //写入评论
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
