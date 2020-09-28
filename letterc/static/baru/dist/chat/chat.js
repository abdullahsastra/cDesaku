function init()
  {
	  websocket = new WebSocket("wss://chat.datadesa.id/");
	  websocket.onopen = function(evt) { onOpen(evt) };
	  websocket.onclose = function(evt) { onClose(evt) };
	  websocket.onmessage = function(evt) { onMessage(evt) };
	  websocket.onerror = function(evt) { onError(evt) };
  }
  function onOpen(evt)
  {
    writeToScreen("{{ session['email']}} > Masuk Room\n");
  }

  function onClose(evt)
  {
    writeToScreen("{{ session['email']}} > Keluar Room\n");
  }

  function onMessage(evt)
  {
    writeToScreen(evt.data + '\n');
  }

  function onError(evt)
  {
    writeToScreen('error: ' + evt.data + '\n');
	websocket.close();
  }

  function doSend(message)
  {
    writeToScreen(message + '\n'); 
    websocket.send(message);
  }

  function writeToScreen(message)
  {
	  $('#chat').val($('#chat').val() + message + '\n');
      $('#chat').scrollTop($('#chat')[0].scrollHeight);
  }
  window.addEventListener("load", init, false);
  function clearText() {
	  $('#chat').val('');
  }

  function doDisconnect() {
		websocket.close();
   }
  $('#text').keypress(function(e) {
       var code = e.keyCode || e.which;
       if (code == 13) {
           kirimtext = $('#text').val();
           $('#text').val('');
           doSend('{{ session['email']}}'+' > '+kirimtext);
       }
   });

