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
      } else {//如果此消息存在
        messages[type].push(fn);//将动作方法推入该消息对应的动作执行序列中
      }
    },
    //发布信息
    fire: function (type, args) {
      if (!messages[type]) return;
      //定义消息信息
      var events = {
        type,//消息类型
        args: args || {}//消息携带数据
      },
      len = messages[type].length;//消息动作长度
      //遍历消息动作
      for (var i = 0; i < len; i++) {
        //依次执行注册的消息对应的动作序列
        messages[type][i].call(this, events)
      }
    },
    // //移除信息接口
    // remove: function (type, fn) {
    //   //如果消息动作队列存在
    //   if (messages(type) instanceof Array) {
    //     //从最后一个消息动作遍历
    //     var i = messages[type].length - 1;
    //     for (; i >= 0; i--) {
    //       //如果存在该动作则在消息动作序列中移除相应动作
    //       messages[type][i] === fn && messages[type].splice(i, 1);
    //     }
    //   }
    // },
  }

})();

// Observer.regist('test',function(e){
//   console.info(e.type,e.args.msg)
// });

// Observer.fire('test',{msg:'传递参数'})

