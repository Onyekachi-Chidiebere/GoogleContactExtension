
let button = document.getElementById("button");

button.addEventListener("click", async ()=> {
  let link = "https://contacts.google.com/";

  //updates the tab with the link
  await chrome.tabs.update({
    url: link
  });

  //waits for 5s for the DOM to be properly loaded
  setTimeout(()=>{
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
      
      //sends the details from the popup.html to content script
      chrome.tabs.sendMessage(tabs[0].id, {action: "readDom",firstName:$('#firstName').val(),lastName:$('#lastName').val(),phone:$('#phone').val()})
})},5000)
})