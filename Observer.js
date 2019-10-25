var Observer = (function () {
  //防止消息队列暴露而被篡改故将消息容器作为静态私有变量保存
  var messages = {}

  return {
    //注册信息
    regist: function (type, fn) {
      //如果此消息不存在则应该创建一个该消息类型
      if (typeof messages[type] === "undefined") {
        //将动作推入到该消息对应的动作执行队列中
        messages[type] = [fn];
      } else {
        messages[type].push(fn);//将动作方法推入该消息对应的动作执行队列中
      }
    },
    //发布信息
    fire: function (type, args) {
      if (!messages[type]) return;
      var events = {
        type,//消息类型
        args: args || {}//payload
      };
      //遍历消息动作并依次执行注册的消息对应的动作序列
      for (var i = 0; i < messages[type].length; i++) {
        messages[type][i].call(this, events)
      }
    },
  }

})();

// Observer.regist('test',function(e){
//   console.info(e.type,e.args.msg)
// });

// Observer.fire('test',{msg:'传递参数'})

