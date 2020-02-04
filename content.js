 (async()=>{

 let firstName;
 let lastName;
 let phone;

$('body').on('click',(e)=>{
    //enables the whatsapp message to be sent
    if(e.target.className=='_19RFN _1ovWX _F7Vk'){
    document.querySelector('._3u328').focus();
    //adds hello to the text field
    document.execCommand('insertText',false, 'hello');
    //clicks the send button
    $('._3M-N-')[0].click()
    
   console.log(e.target.className)
    }

})


 await chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
    if(request.action == "readDom"){
        console.log('got message',request.firstName,request.lastName,request.phone)
        //sets the contact variables 
        firstName = request.firstName;
        lastName = request.lastName;
        phone = request.phone;

        //opens the create-contact section to enable the input fields to load.
        $(document).ready(()=>{
            $('.VfPpkd-BIzmGd.SaBhMc.NNFoTc.VfPpkd-ksKsZd-mWPk3d').click();
            console.log($('button.VfPpkd-BIzmGd.SaBhMc.NNFoTc.VfPpkd-ksKsZd-mWPk3d'))
        })
       

        let button = $('.z80M1')[4]
        button.className += ' FwR7Pc qs41qe';
        button.attributes.tabindex.value= 0;
        // button.click()
        // $('.JAPqpe.K0NPx')[2].firstElementChild.click()
        setTimeout(()=>{
            $('.jO7h3c')[4].click()
            // $('.z80M1.FwR7Pc.qs41qe').click()
            // $('.uyYuVb.oJeWuf')[4].click()
            console.log(button.attributes,button.attributes.tabindex.value)
        },500)
        
        // $('.aU2Vdf')[0].firstElementChild.click()
          



           

    }else{console.log("nothing")}
    })
    


    //waits for the window to load completely
    $(window).on('load',async()=>{
    console.log('the DOM is set now')
    // defines the input    
    let body = $('.Xb9hP input')
    console.log( $('.Xb9hP div')[1])
    body[1].className += ' focus-visible';
    body[1].value= await firstName;
    body[3].value= await lastName;
    body[14].value= await phone;
    $('.sBfRjb')[1].firstElementChild.className += ' u3bW4e'

    //enables the save button
    $('.JH1x6b')[0].lastElementChild.attributes[4].ownerElement.disabled = false;
    $('.JH1x6b')[0].lastElementChild.attributes.disabled = false

    console.log($('.JH1x6b')[0].lastElementChild)
    console.log(body[1],{firstName,lastName,phone})

    //clicks the save button to save contact
    $('.JH1x6b')[0].lastElementChild.click()
    console.log($('.JH1x6b')[0].lastElementChild.attributes,
    $('.JH1x6b')[0].lastElementChild.attributes[4].ownerElement.disabled)
    console.log($('.sBfRjb')[1])

    })
 })()
   



