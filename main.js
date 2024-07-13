function addMessage(title, content) {
    var messageBox = createMessageBox(title, content);
    var messageBoxes = document.querySelector(".message-boxes");
    messageBoxes.insertBefore(messageBox, messageBoxes.firstChild);
  }
  
