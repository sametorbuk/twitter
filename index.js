const searchBox = document.querySelector('.search-box');
const searchBoxMemory = document.querySelector('.search-box-memory');

searchBox.addEventListener('focus', function() {
searchBoxMemory.style.display = 'flex';
});

searchBox.addEventListener('blur', function() {
searchBoxMemory.style.display = 'none';
});



const messageboxbutton = document.querySelector(".message-box")
messageboxbutton.addEventListener("click" , (event) => {
  if(messageboxbutton.style.marginTop === "516px") {
    messageboxbutton.style.marginTop = "350px"
  } else {
    messageboxbutton.style.marginTop = "516px"

  }
  
  })



const body = document.querySelector("body")

const subscriberScreen = document.createElement("div")
subscriberScreen.style.position = "fixed"
subscriberScreen.style.zIndex = "1000"
body.appendChild(subscriberScreen)
subscriberScreen.style.backgroundColor = "black"
subscriberScreen.style.display ="none"
subscriberScreen.style.left = "19rem"
subscriberScreen.style.top = "2rem"
subscriberScreen.style.width = "40rem"
subscriberScreen.style.height = "33rem"
subscriberScreen.style.flexDirection = "column"
subscriberScreen.style.borderRadius = "15px"

const subscriberScreenCloseBtn = document.createElement("button")
subscriberScreenCloseBtn.textContent = "X"
subscriberScreen.appendChild(subscriberScreenCloseBtn)
subscriberScreenCloseBtn.style.color = "white"
subscriberScreenCloseBtn.style.background = "black"
subscriberScreenCloseBtn.style.width = "0.1rem"
subscriberScreenCloseBtn.style.marginLeft = "0.5rem"
subscriberScreenCloseBtn.style.marginTop = "0.5rem"

const subscribebtn = document.querySelector(".subscribe-btn")
subscribebtn.addEventListener("click" , (event) => {
    subscriberScreen.style.display = "flex"
})

subscriberScreenCloseBtn.addEventListener("click" , (event) => {
    subscriberScreen.style.display = "none"
})

const subscriberScreenh1 = document.createElement("h1")
subscriberScreen.appendChild(subscriberScreenh1)
subscriberScreenh1.textContent = "Hesabının Türü Hangisi?"
subscriberScreenh1.style.color = "white"
subscriberScreenh1.style.paddingLeft = "8.5rem"



/*body.addEventListener("click" , (event) => {
    if(subscriberScreen.style.display === "flex") {
    subscriberScreen.style.display = "none"
}
})
*/


const subscriberScreenp = document.createElement("p")
subscriberScreen.appendChild(subscriberScreenp)
subscriberScreenp.textContent = "Sana uygun doğru aboneliği seç:"
subscriberScreenp.style.color = "white"
subscriberScreenp.style.marginLeft = "13rem"

const subscriberScreenOptionsDiv = document.createElement("div")
subscriberScreen.appendChild(subscriberScreenOptionsDiv)
subscriberScreenOptionsDiv.style.display = "flex"
subscriberScreenOptionsDiv.style.justifyContent = "space-around"

subscriberScreenOptionsDiv.style.background = "black"
subscriberScreenOptionsDiv.style.height = "13rem"
subscriberScreenOptionsDiv.style.wi = "40rem"

const subscriberScreenOptionsDivLeft = document.createElement("div")
subscriberScreenOptionsDiv.appendChild(subscriberScreenOptionsDivLeft)
subscriberScreenOptionsDivLeft.style.display = "flex"
subscriberScreenOptionsDivLeft.style.flexDirection = "column"
subscriberScreenOptionsDivLeft.style.border = "1px solid gray"
subscriberScreenOptionsDivLeft.style.borderRadius = "1rem"

document.addEventListener("click" , (event) => {
  if(event.target === subscribebtn || subscriberScreen.contains(event.target)) {
    return ;
  }

  subscriberScreen.style.display = "none"
})



const subscriberScreenOptionsDivLeftp1 = document.createElement("p")
subscriberScreenOptionsDivLeft.appendChild(subscriberScreenOptionsDivLeftp1)
subscriberScreenOptionsDivLeftp1.textContent = "Premium"
subscriberScreenOptionsDivLeftp1.style.color = "gray"
subscriberScreenOptionsDivLeftp1.style.marginTop = "4rem"
subscriberScreenOptionsDivLeftp1.style.marginBottom = "0"
subscriberScreenOptionsDivLeftp1.style.paddingLeft="1rem"

const subscriberScreenOptionsDivLeftp2 = document.createElement("h3")
subscriberScreenOptionsDivLeft.appendChild(subscriberScreenOptionsDivLeftp2)
subscriberScreenOptionsDivLeftp2.textContent = "Bireyim"
subscriberScreenOptionsDivLeftp2.style.color = "white"
subscriberScreenOptionsDivLeftp2.style.fontWeight = "bold"
subscriberScreenOptionsDivLeftp2.style.margin = "0"
subscriberScreenOptionsDivLeftp2.style.paddingLeft="1rem"

const subscriberScreenOptionsDivLeftp3 = document.createElement("p")
subscriberScreenOptionsDivLeft.appendChild(subscriberScreenOptionsDivLeftp3)
subscriberScreenOptionsDivLeftp3.textContent = "Bireyler ve içerik üreticileri için"
subscriberScreenOptionsDivLeftp3.style.color = "gray"
subscriberScreenOptionsDivLeftp3.style.paddingLeft="1rem"
subscriberScreenOptionsDivLeftp3.style.margin = "0"



const subscriberScreenOptionsDivRight = document.createElement("div")
subscriberScreenOptionsDiv.appendChild(subscriberScreenOptionsDivRight)
subscriberScreenOptionsDivRight.style.display = "flex"
subscriberScreenOptionsDivRight.style.flexDirection = "column"
subscriberScreenOptionsDivRight.style.width = "14rem"
subscriberScreenOptionsDivRight.style.border = "1px solid gray"
subscriberScreenOptionsDivRight.style.borderRadius = "1rem"

subscriberScreenOptionsDivRight.addEventListener("mouseenter" , (event) => {
  subscriberScreenOptionsDivRight.style.background = "#8080805e"
})

subscriberScreenOptionsDivRight.addEventListener("mouseleave" , (event) => {
  subscriberScreenOptionsDivRight.style.background = "black"
})

subscriberScreenOptionsDivLeft.addEventListener("mouseenter" , (event) => {
  subscriberScreenOptionsDivLeft.style.background = "#8080805e"
})

subscriberScreenOptionsDivLeft.addEventListener("mouseleave" , (event) => {
  subscriberScreenOptionsDivLeft.style.background = "black"
})

const subscriberScreenOptionsDivRightp1 = document.createElement("p")
subscriberScreenOptionsDivRight.appendChild(subscriberScreenOptionsDivRightp1)
subscriberScreenOptionsDivRightp1.textContent = "Onaylı kuruluşlar"
subscriberScreenOptionsDivRightp1.style.color = "gray"
subscriberScreenOptionsDivRightp1.style.marginTop = "3rem"
subscriberScreenOptionsDivRightp1.style.marginBottom = "0"
subscriberScreenOptionsDivRightp1.style.paddingLeft="1rem"

const subscriberScreenOptionsDivRightp2 = document.createElement("h3")
subscriberScreenOptionsDivRight.appendChild(subscriberScreenOptionsDivRightp2)
subscriberScreenOptionsDivRightp2.textContent = "Kuruluşum"
subscriberScreenOptionsDivRightp2.style.color = "white"
subscriberScreenOptionsDivRightp2.style.fontWeight = "bold"
subscriberScreenOptionsDivRightp2.style.margin = "0"
subscriberScreenOptionsDivRightp2.style.paddingLeft="1rem"

const subscriberScreenOptionsDivRightp3 = document.createElement("p")
subscriberScreenOptionsDivRight.appendChild(subscriberScreenOptionsDivRightp3)
subscriberScreenOptionsDivRightp3.textContent = "İşletmeler,devlet kurumları, kar amacı gütmeyen kuruluşlar için"
subscriberScreenOptionsDivRightp3.style.color = "gray"
subscriberScreenOptionsDivRightp3.style.paddingLeft="1rem"
subscriberScreenOptionsDivRightp3.style.margin = "0"

subscriberScreenOptionsDivLeft.addEventListener("mousedown" , (event) => {
  subscriberScreenOptionsDivLeft.style.border = "2px solid #4798ed"
})

subscriberScreenOptionsDivLeft.addEventListener("mouseup" , (event) => {
  subscriberScreenOptionsDivLeft.style.border = "1px solid gray"
})

subscriberScreenOptionsDivRight.addEventListener("mousedown" , (event) => {
  subscriberScreenOptionsDivRight.style.border = "2px solid #4798ed"
})

subscriberScreenOptionsDivRight.addEventListener("mouseup" , (event) => {
  subscriberScreenOptionsDivRight.style.border = "1px solid gray"
})


const subscriberScreenSubscribeBtn = document.createElement("button")
subscriberScreen.appendChild(subscriberScreenSubscribeBtn)
subscriberScreenSubscribeBtn.classList.add("white-subscribe-btn")
subscriberScreenSubscribeBtn.textContent =  "Abone ol"

const subscriberScreenMoreInfo = document.createElement("div")
subscriberScreen.appendChild(subscriberScreenMoreInfo)
subscriberScreenMoreInfo.classList.add("subscribe-info")

const subscriberScreenMoreInfop = document.createElement("p")
subscriberScreenMoreInfop.textContent = "Daha fazla bilgi al:"
subscriberScreenMoreInfop.style.color = "white"
subscriberScreenMoreInfo.appendChild(subscriberScreenMoreInfop)
subscriberScreenMoreInfop.style.marginLeft = "10rem"

const moreInfoPremiumBtn = document.createElement("button")
subscriberScreenMoreInfo.appendChild(moreInfoPremiumBtn)
moreInfoPremiumBtn.classList.add("more-info-premium-btn")
moreInfoPremiumBtn.textContent = "Premium"


moreInfoPremiumBtn.addEventListener("click" , (event) => {
  window.open("https://help.x.com/tr/using-x/x-premium" , "_blank")  
})

moreInfoPremiumBtn.addEventListener("mouseenter" , (event) => {
  moreInfoPremiumBtn.style.textDecoration = "1px solid blue"
})

moreInfoPremiumBtn.addEventListener("mouseleave" , (event) => {
  moreInfoPremiumBtn.style.textDecoration = "none"
})


const subscriberScreenMoreInfop2 = document.createElement("p")
subscriberScreenMoreInfop2.textContent = "ve"
subscriberScreenMoreInfop2.style.color = "white"
subscriberScreenMoreInfo.appendChild(subscriberScreenMoreInfop2)
subscriberScreenMoreInfop2.style.position = "relative"
subscriberScreenMoreInfop2.style.right = "1rem"

const moreInfoAcceptEstablishmentBtn = document.createElement("button")
subscriberScreenMoreInfo.appendChild(moreInfoAcceptEstablishmentBtn)
moreInfoAcceptEstablishmentBtn.classList.add("more-info-premium-btn2")
moreInfoAcceptEstablishmentBtn.textContent = "Onaylı Kuruluşlar"

moreInfoAcceptEstablishmentBtn.addEventListener("click" , (event) => {
  window.open("https://help.x.com/using-twitter/verified-organizations" , "_blank")
})


subscriberScreenSubscribeBtn.addEventListener("click" , (event) => {
  window.open("https://x.com/i/premium_sign_up" , "_blank")
})


const twitCreateİnput = document.getElementById("twit-create-input")
const sendBtn = document.getElementsByClassName("send-button")[0]


twitCreateİnput.addEventListener("input" , (event) => {
if(twitCreateİnput.value !== "") {
 sendBtn.removeAttribute("disabled")
 sendBtn.style.backgroundColor = "rgb(12 157 255 / 92%)"
 sendBtn.style.color = "white"
} else {
  sendBtn.setAttribute("disabled" , "true")
  sendBtn.style.backgroundColor = "rgb(29 155 240 / 47%)"
}
})


const twitCreatePrivacyBtn = document.getElementById("twit-create-privacy-options")
const twitPrivacyArea = document.createElement("div")
body.appendChild(twitPrivacyArea)
twitPrivacyArea.style.height = "20rem"
twitPrivacyArea.classList.add("twit-privacy-area")


const twitPrivacyAreap1 = document.createElement("p")
twitPrivacyAreap1.textContent = "Kimler yanıtlayabilir?"
twitPrivacyAreap1.style.fontWeight = "bold"

twitPrivacyArea.appendChild(twitPrivacyAreap1)

const twitPrivacyAreap2 = document.createElement("p")
twitPrivacyAreap2.textContent= "Bu gönderiyi kimlerin yanıtlayabileceğini seç. Bahsedilen herkes yanıt verebilir."
twitPrivacyArea.appendChild(twitPrivacyAreap2)


const btnCreate = (explain , iconClass , iconClasstwo) => {
   
  const btn = document.createElement("button")
  twitPrivacyArea.appendChild(btn)
  const btnp = document.createElement("p")
  btnp.textContent = explain
  btn.appendChild(btnp)
  btnp.style.marginBottom = "0"
  btnp.style.marginTop = "0.5rem"
  btnp.style.marginLeft = "1rem"
  btnp.style.whiteSpace = "nowrap"

  btn.addEventListener("mouseenter" , (event) => {
    btn.style.backgroundColor = "#80808057"
  })
  
  btn.addEventListener("mouseleave" , (event) => {
    btn.style.backgroundColor = "black"
  })

  const ico= document.createElement("i")
  ico.classList.add('fa', ...iconClass.split(' '))
  btn.appendChild(ico)
  btn.style.color = "white"
  btn.style.background = "black"

  const tikIco = document.createElement("i")
tikIco.classList.add('fa', ...iconClasstwo.split(' '))
btn.appendChild(tikIco)
tikIco.style.position = "fixed"
tikIco.style.color = "rgb(13 148 239)"
tikIco.style.marginLeft = "17rem"
tikIco.style.marginTop = "0.5rem"

  
  ico.style.backgroundColor = "rgb(13 148 239)"
  btn.style.display = "flex"
  ico.style.order = "-1"
  ico.style.fontSize = "xx-large"
  ico.style.width = "3.3rem"
  ico.style.height="2rem"
  ico.style.borderRadius = "5px"

  btn.style.marginBottom = "1rem"
 tikIco.style.display = "none"

 btn.addEventListener("click" , (e) => {
  tikIco.style.display = "block"
 })

 document.addEventListener("click" , (event) => {
  if(event.target === btn || btn.contains(event.target)) {
     return ;
  } 
    tikIco.style.display = "none"
  })

  return btn
}


const twitPrivacyAreabtn1 = btnCreate("Herkese açık","fa-light fa-earth-americas" , "fa-solid fa-check")
const twitPrivacyAreabtn2 = btnCreate("Takip ettiğin hesaplar","fa-light fa-user-check" , "fa-solid fa-check")
const twitPrivacyAreabtn3 = btnCreate("Onaylanmış hesaplar","fa-regular fa-circle-check" , "fa-solid fa-check")
const twitPrivacyAreabtn4 = btnCreate("Yalnızca bahsettiğin hesaplar","fa-solid fa-at" , "fa-solid fa-check")

twitPrivacyArea.style.display = "none"


twitCreatePrivacyBtn.addEventListener("click" , (event) => {
   
  twitPrivacyArea.style.display = "flex"

})

document.addEventListener("click" , (event) => {
  if(event.target === twitCreatePrivacyBtn || twitPrivacyArea.contains(event.target)) {
     return ;
  } 
    twitPrivacyArea.style.display = "none"
  })


  window.addEventListener("scroll" , (event) => {
    twitPrivacyArea.style.display = "none"
  })


  

  
  
const tweetCreateFunc = (input) => {


  const newTwit = document.createElement("div")

  const centerContent = document.querySelector(".center-content")
  const secondChild = centerContent.children[1]
  centerContent.insertBefore(newTwit , secondChild)

  newTwit.style.background = "black"
  newTwit.style.height = "7rem"
  newTwit.style.width = "47.4rem"
  newTwit.style.marginLeft = "6.2rem"

  newTwit.style.display = "flex"
  newTwit.classList.add("new-twit-container")
  
  const img = document.createElement("img")
  img.src = "https://pbs.twimg.com/profile_images/1762074719711268864/sSVFPxAt_400x400.jpg"
  newTwit.appendChild(img)
  img.classList.add("new-twit-prof-photo")

  const twitDetails = document.createElement("div")
  twitDetails.style.display = "flex"
  twitDetails.style.flexDirection = "column"
  newTwit.appendChild(twitDetails)

  const twitDetailsRow1 = document.createElement("button")
  twitDetails.appendChild(twitDetailsRow1)
  twitDetailsRow1.textContent = "Samet"
  twitDetailsRow1.style.background = "black"
  twitDetailsRow1.style.color = "white"
  twitDetailsRow1.fontSize = "large"

  twitDetailsRow1.style.display = "flex"

  const row1UserName = document.createElement("p")
  row1UserName.textContent = "@orbukk"
  row1UserName.style.color = "gray"
  row1UserName.style.marginTop = "0"
  row1UserName.style.marginLeft = "0.5rem"


  twitDetailsRow1.appendChild(row1UserName)

const row1TodaysDate = document.createElement("p")
const today = new Date();
row1TodaysDate.textContent = today.toDateString();
twitDetailsRow1.appendChild(row1TodaysDate)
row1TodaysDate.style.marginLeft = "1rem"
row1TodaysDate.style.marginTop = "0"

const twitCustomizatioArea = document.createElement("div")
twitCustomizatioArea.classList.add("twit-custommization-area")


body.appendChild(twitCustomizatioArea)

const twitCustomizatioAreaBtn1 = document.createElement("button")
twitCustomizatioAreaBtn1.textContent = "Sil"
twitCustomizatioAreaBtn1.classList.add("twit-customization-btn")
twitCustomizatioArea.appendChild(twitCustomizatioAreaBtn1)
twitCustomizatioAreaBtn1.style.color = "rgb(191 6 6)"

const twitCustomizatioAreaBtn2 = document.createElement("button")
twitCustomizatioAreaBtn2.textContent = "Profilden ayır"
twitCustomizatioAreaBtn2.classList.add("twit-customization-btn")
twitCustomizatioArea.appendChild(twitCustomizatioAreaBtn2)

const twitCustomizatioAreaBtn3 = document.createElement("button")
twitCustomizatioAreaBtn3.textContent = "Profilinde öne çıkar"
twitCustomizatioAreaBtn3.classList.add("twit-customization-btn")
twitCustomizatioArea.appendChild(twitCustomizatioAreaBtn3)

const twitCustomizatioAreaBtn4 = document.createElement("button")
twitCustomizatioAreaBtn4.textContent = "@orbuk kullanıcısının listelere ekle /kaldır"
twitCustomizatioAreaBtn4.classList.add("twit-customization-btn")
twitCustomizatioArea.appendChild(twitCustomizatioAreaBtn4)

const twitCustomizatioAreaBtn5 = document.createElement("button")
twitCustomizatioAreaBtn5.textContent = "Kimin yanıtlayabileceğini değiştir"
twitCustomizatioAreaBtn5.classList.add("twit-customization-btn")
twitCustomizatioArea.appendChild(twitCustomizatioAreaBtn5)



const customBtn1Icon = document.createElement("i")
customBtn1Icon.classList.add("fas" , "fa-trash")
twitCustomizatioAreaBtn1.appendChild(customBtn1Icon)
customBtn1Icon.classList.add("twit-custom-icon")
customBtn1Icon.style.color = "rgb(191 6 6);"



const customBtn2Icon = document.createElement("i")
customBtn2Icon.classList.add("fas","fa-thumbtack")
twitCustomizatioAreaBtn2.appendChild(customBtn2Icon)
customBtn2Icon.classList.add("twit-custom-icon")

const customBtn3Icon = document.createElement("i")
customBtn3Icon.classList.add("fas","fa-wand-magic-sparkles")
twitCustomizatioAreaBtn3.appendChild(customBtn3Icon)
customBtn3Icon.classList.add("twit-custom-icon")

const customBtn4Icon = document.createElement("i")
customBtn4Icon.classList.add("fas" , "fa-list-check")
twitCustomizatioAreaBtn4.appendChild(customBtn4Icon)
customBtn4Icon.classList.add("twit-custom-icon")


const customBtn5Icon = document.createElement("i")
customBtn5Icon.classList.add("far" , "fa-comment")
twitCustomizatioAreaBtn5.appendChild(customBtn5Icon)
customBtn5Icon.classList.add("twit-custom-icon")


const row1MoreButton = document.createElement("button")
row1MoreButton.textContent = "..."
twitDetailsRow1.appendChild(row1MoreButton)
row1MoreButton.style.marginLeft = "27rem"
row1MoreButton.style.color = "white"
row1MoreButton.style.background= "black"
row1MoreButton.classList.add("more-button")
row1MoreButton.setAttribute("id" , "morebutton")

row1MoreButton.addEventListener("click" , (event) => {
  twitCustomizatioArea.style.display = "flex"

})

document.addEventListener("click" , (event) => {
  if(event.target === row1MoreButton) {

    return ;
  }

  twitCustomizatioArea.style.display = "none"
})


window.addEventListener("scroll" , (event) => {
 
  twitCustomizatioArea.style.display = "none"

})


twitCustomizatioAreaBtn1.addEventListener("click" , (event) => {

  newTwit.remove();
})

const twit = document.createElement("p")
twit.textContent = input
twit.style.color = "white"
twitDetails.appendChild(twit)
twit.style.marginBottom = "2rem"

const interactionButtons = document.createElement("div")
interactionButtons.style.background = "black"
twitDetails.appendChild(interactionButtons)
interactionButtons.style.width = "43rem"
interactionButtons.style.height = "2rem"
interactionButtons.style.display = "flex"
interactionButtons.style.gap = "9rem"

const commentBtn = document.createElement("i")
commentBtn.classList.add("far","fa-comment")
commentBtn.style.color = "gray"



const retweetBtn = document.createElement("i")
retweetBtn.classList.add("fas","fa-retweet")
retweetBtn.style.color = "gray"


const likeBtn = document.createElement("i")
likeBtn.classList.add("far","fa-heart")
likeBtn.style.color = "gray"

likeBtn.addEventListener("click" , (event) => {
  if(likeBtn.textContent === "") {
    likeBtn.textContent = "1"
  } else {
    likeBtn.textContent = ""
  }
})




const statisticsBtn = document.createElement("i")
statisticsBtn.classList.add("fas","fa-chart-simple")
statisticsBtn.style.color = "gray"

interactionButtons.appendChild(commentBtn)
interactionButtons.appendChild(retweetBtn)
interactionButtons.appendChild(likeBtn)
interactionButtons.appendChild(statisticsBtn)







const interactionButtonsRight = document.createElement("div")
interactionButtons.appendChild(interactionButtonsRight)
const bookmarkicon = document.createElement("i")
bookmarkicon.classList.add("far" , "fa-bookmark")
bookmarkicon.style.color = "gray"


interactionButtonsRight.appendChild(bookmarkicon)

const sharebuttons = document.createElement("i")
sharebuttons.classList.add("fas" , "fa-arrow-up-from-bracket")
sharebuttons.style.color = "gray"

interactionButtonsRight.appendChild(sharebuttons)
sharebuttons.style.marginLeft = "1rem"

return newTwit;

}

sendBtn.addEventListener("click" , (event) => {
  if(twitCreateİnput.value !== "") {
  tweetCreateFunc(twitCreateİnput.value)
  twitCreateİnput.value = ""
} else {
  return
}
})

window.addEventListener("keydown" , (event) => {
  if(event.key === "Enter" && inputArea.value !== "") {
    tweetCreateFunc(inputArea.value);
    inputArea.value = ""
  } else if (event.key === "Enter" && twitCreateİnput.value !== "") {
   tweetCreateFunc(twitCreateİnput.value)
   twitCreateİnput.value = ""
  } else {
    return;
  }
})


const featerTwitCreate = document.querySelector(".twit-tuy")


const twitCreateScreen = document.createElement("div")
twitCreateScreen.classList.add("twit-create-screen")
twitCreateScreen.style.display = "none"
twitCreateScreen.style.flexDirection = "column"
body.appendChild(twitCreateScreen)

const twitCreateScreenTop = document.createElement("div")
twitCreateScreenTop.style.display ="flex"
twitCreateScreenTop.style.marginTop = "1rem"

twitCreateScreen.appendChild(twitCreateScreenTop)


const twitCreateScreenTopCloseBtn = document.createElement("button")
twitCreateScreenTopCloseBtn.textContent = "X"
twitCreateScreenTop.appendChild(twitCreateScreenTopCloseBtn)
twitCreateScreenTopCloseBtn.style.color ="white"
twitCreateScreenTopCloseBtn.style.width = "1rem"
twitCreateScreenTopCloseBtn.style.background = "black"
twitCreateScreenTopCloseBtn.style.marginLeft = "1rem"

const btn = document.createElement("button")
btn.textContent = "Taslaklar"
twitCreateScreenTop.appendChild(btn)
btn.style.marginLeft = "28rem"
btn.style.color = "rgb(29, 155, 240)"
btn.style.background = "black"

const twitCreateScreenInputArea = document.createElement("div")

const twitCreateScreenProfPhoto = document.createElement("img")
twitCreateScreenProfPhoto.src = "https://pbs.twimg.com/profile_images/1762074719711268864/sSVFPxAt_400x400.jpg"
twitCreateScreenInputArea.appendChild(twitCreateScreenProfPhoto)
twitCreateScreen.appendChild(twitCreateScreenInputArea)
twitCreateScreenProfPhoto.classList.add("twit-create-screen-prof-photo")

const inputArea = document.createElement("input")
twitCreateScreenInputArea.appendChild(inputArea)
inputArea.type = "text"
inputArea.placeholder = "Neler oluyor?"
inputArea.classList.add("twit-screen-input")

const twitCreateScreenPrivacyOptions = document.createElement("button")
twitCreateScreenPrivacyOptions.textContent = "Sadece bahsettiklerin yanıtlayabilir"
twitCreateScreenPrivacyOptions.style.color = "rgb(29, 155, 240)"
twitCreateScreenPrivacyOptions.style.background = "black"
twitCreateScreen.appendChild(twitCreateScreenPrivacyOptions)
twitCreateScreenPrivacyOptions.style.marginTop = "3rem"
twitCreateScreenPrivacyOptions.style.width = "17rem" 
twitCreateScreenPrivacyOptions.setAttribute("id" , "twit-create-screen-privacy-btn")




const twitCreateScreenOptionsArea = document.createElement("div")
twitCreateScreenOptionsArea.classList.add("twit-create-screen-options-area")
body.appendChild(twitCreateScreenOptionsArea) 


const btnCreate2 = (explain , iconClass , iconClasstwo) => {
   
  const btn = document.createElement("button")
  twitCreateScreenOptionsArea.appendChild(btn)
  const btnp = document.createElement("p")
  btnp.textContent = explain
  btn.appendChild(btnp)
  btnp.style.marginBottom = "0"
  btnp.style.marginTop = "0.5rem"
  btnp.style.marginLeft = "1rem"
  btnp.style.whiteSpace = "nowrap"

  btn.addEventListener("mouseenter" , (event) => {
    btn.style.backgroundColor = "#80808057"
  })
  
  btn.addEventListener("mouseleave" , (event) => {
    btn.style.backgroundColor = "black"
  })

  const ico= document.createElement("i")
  ico.classList.add('fa', ...iconClass.split(' '))
  btn.appendChild(ico)
  btn.style.color = "white"
  btn.style.background = "black"

  const tikIco = document.createElement("i")
tikIco.classList.add('fa', ...iconClasstwo.split(' '))
btn.appendChild(tikIco)
tikIco.style.position = "fixed"
tikIco.style.color = "rgb(13 148 239)"
tikIco.style.marginLeft = "17rem"
tikIco.style.marginTop = "0.5rem"

  
  ico.style.backgroundColor = "rgb(13 148 239)"
  btn.style.display = "flex"
  ico.style.order = "-1"
  ico.style.fontSize = "xx-large"
  ico.style.width = "3.3rem"
  ico.style.height="2rem"
  ico.style.borderRadius = "5px"

  btn.style.marginBottom = "1rem"
 tikIco.style.display = "none"

 btn.addEventListener("click" , (e) => {
  tikIco.style.display = "block"
 })

 document.addEventListener("click" , (event) => {
  if(event.target === btn || btn.contains(event.target)) {
     return ;
  } 
    tikIco.style.display = "none"
  })

  return btn
}

const twitCreateScreenOptionsAreap1 = document.createElement("p")
twitCreateScreenOptionsAreap1.textContent = "Kimler yanıtlayabilir?"
twitCreateScreenOptionsAreap1.style.fontWeight = "bold"
twitCreateScreenOptionsAreap1.style.color = "white"

twitCreateScreenOptionsArea.appendChild(twitCreateScreenOptionsAreap1)

const twitCreateScreenOptionsAreap2 = document.createElement("p")
twitCreateScreenOptionsAreap2.textContent= "Bu gönderiyi kimlerin yanıtlayabileceğini seç. Bahsedilen herkes yanıt verebilir."
twitCreateScreenOptionsArea.appendChild(twitCreateScreenOptionsAreap2)
twitCreateScreenOptionsAreap2.style.color = "white"

const twitCreateScreenOptionsAreaBtn1 = btnCreate2("Herkese açık","fa-light fa-earth-americas" , "fa-solid fa-check")
const twitCreateScreenOptionsAreaBtn2 = btnCreate2("Takip ettiğin hesaplar","fa-light fa-user-check" , "fa-solid fa-check")
const twitCreateScreenOptionsAreaBtn3 = btnCreate2("Onaylanmış hesaplar","fa-regular fa-circle-check" , "fa-solid fa-check")
const twitCreateScreenOptionsAreaBtn4 = btnCreate2("Yalnızca bahsettiğin hesaplar","fa-solid fa-at" , "fa-solid fa-check")


twitCreateScreenOptionsAreaBtn1.addEventListener("click" , (event) => {
  twitCreateScreenPrivacyOptions.textContent = "Herkes yanıtlayabilir"
})

twitCreateScreenOptionsAreaBtn2.addEventListener("click" , (event) => {
  twitCreateScreenPrivacyOptions.textContent = "Takip ettiğin hesaplar yanıtlayabilir"
})

twitCreateScreenOptionsAreaBtn3.addEventListener("click" , (event) => {
  twitCreateScreenPrivacyOptions.textContent = "Yalnızca onaylanmış hesaplar yanıtlayabilir"
})

twitCreateScreenOptionsAreaBtn4.addEventListener("click" , (event) => {
  twitCreateScreenPrivacyOptions.textContent = "Yalnızca bahsettiğin hesaplar yanıtlayabilir"
})




twitCreateScreenPrivacyOptions.addEventListener("click" , (event) => {
  twitCreateScreenOptionsArea.style.display = "flex"
})


document.addEventListener("click" , (event) => {
  if(twitCreateScreenPrivacyOptions.contains(event.target)) {
      return
  }
  twitCreateScreenOptionsArea.style.display = "none"
})


const twitCreateScreenBottom = document.createElement("div")
twitCreateScreenBottom.style.display = "flex"
twitCreateScreenBottom.style.height = "3rem"
twitCreateScreenBottom.style.background = "black"
twitCreateScreenBottom.style.gap = "3rem"
twitCreateScreenBottom.style.borderTop = "1px solid gray"
twitCreateScreenBottom.style.paddingTop = "1rem"
twitCreateScreenBottom.style.borderRadius = "15px"


const twitCreateScreenBottomIcon1 = document.createElement("i")
twitCreateScreenBottomIcon1.classList.add("fas" ,"fa-image")
twitCreateScreenBottomIcon1.style.color = "rgb(29, 155, 240)"
twitCreateScreenBottomIcon1.style.marginLeft = "2.1rem"
twitCreateScreenBottom.appendChild(twitCreateScreenBottomIcon1)
const twitCreateScreenBottomIcon2 = document.createElement("i")
twitCreateScreenBottomIcon2.classList.add("fas","fa-square-poll-vertical")
twitCreateScreenBottomIcon2.style.color = "rgb(29, 155, 240)"
twitCreateScreenBottom.appendChild(twitCreateScreenBottomIcon2)
const twitCreateScreenBottomIcon3 = document.createElement("i")
twitCreateScreenBottomIcon3.classList.add("far","fa-face-smile")
twitCreateScreenBottomIcon3.style.color = "rgb(29, 155, 240)"
twitCreateScreenBottom.appendChild(twitCreateScreenBottomIcon3)
const twitCreateScreenBottomIcon4 = document.createElement("i")
twitCreateScreenBottomIcon4.classList.add("fas","fa-calendar-days")
twitCreateScreenBottomIcon4.style.color = "rgb(29, 155, 240)"
twitCreateScreenBottom.appendChild(twitCreateScreenBottomIcon4)
const twitCreateScreenBottomIcon5 = document.createElement("i")
twitCreateScreenBottomIcon5.classList.add("fas","fa-location-dot")
twitCreateScreenBottomIcon5.style.color = "rgb(29, 155, 240)"
twitCreateScreenBottom.appendChild(twitCreateScreenBottomIcon5)

const twitCreateScreensumbit = document.createElement("button")
twitCreateScreensumbit.textContent = "Gönder"
twitCreateScreensumbit.style.background = "rgb(29, 155, 240)"
twitCreateScreensumbit.style.fontWeight = "bold"
twitCreateScreensumbit.style.color = "white"
twitCreateScreensumbit.classList.add("twit-create-sumbit")

twitCreateScreenBottom.appendChild(twitCreateScreensumbit)

inputArea.addEventListener("input" , (event) => {
  if(inputArea.value !== "") {
   twitCreateScreensumbit.removeAttribute("disabled")
   twitCreateScreensumbit.style.backgroundColor = "rgb(12 157 255 / 92%)"
   twitCreateScreensumbit.style.color = "white"
  } else {
    twitCreateScreensumbit.setAttribute("disabled" , "true")
    twitCreateScreensumbit.style.backgroundColor = "rgb(29 155 240 / 47%)"
  }
  })

twitCreateScreensumbit.addEventListener("click" , (event) => {
    
  if(inputArea.value !== "") {
tweetCreateFunc(inputArea.value)
    inputArea.value = ""
} else {
  return;
}

if(inputArea.value === "" ) {
  twitCreateScreensumbit.style.color = "#ffffffba"
  twitCreateScreensumbit.style.background = "rgb(29 155 240 / 63%)"
}


})


twitCreateScreen.appendChild(twitCreateScreenBottom)


featerTwitCreate.addEventListener(("click") , (event) => {
  twitCreateScreen.style.display = "flex"
})

twitCreateScreenTopCloseBtn.addEventListener(("click") , (event) =>{
    twitCreateScreen.style.display = "none"
})


document.addEventListener(("click") , (event) => {
  if(event.target === featerTwitCreate || twitCreateScreen.contains(event.target) || twitCreateScreenOptionsArea.contains(event.target) ) {
    return ;
  }

  twitCreateScreen.style.display = "none"

})


const twitCustomizatioArea = document.createElement("div")
twitCustomizatioArea.classList.add("twit-custommization-area")


body.appendChild(twitCustomizatioArea)

const twitCustomizatioAreaBtn1 = document.createElement("button")
twitCustomizatioAreaBtn1.textContent = "Sil"
twitCustomizatioAreaBtn1.classList.add("twit-customization-btn")
twitCustomizatioArea.appendChild(twitCustomizatioAreaBtn1)
twitCustomizatioAreaBtn1.style.color = "#7a0000"

const twitCustomizatioAreaBtn2 = document.createElement("button")
twitCustomizatioAreaBtn2.textContent = "Profilden ayır"
twitCustomizatioAreaBtn2.classList.add("twit-customization-btn")
twitCustomizatioArea.appendChild(twitCustomizatioAreaBtn2)

const twitCustomizatioAreaBtn3 = document.createElement("button")
twitCustomizatioAreaBtn3.textContent = "Profilinde öne çıkar"
twitCustomizatioAreaBtn3.classList.add("twit-customization-btn")
twitCustomizatioArea.appendChild(twitCustomizatioAreaBtn3)

const twitCustomizatioAreaBtn4 = document.createElement("button")
twitCustomizatioAreaBtn4.textContent = "@orbuk kullanıcısının listelere ekle /kaldır"
twitCustomizatioAreaBtn4.classList.add("twit-customization-btn")
twitCustomizatioArea.appendChild(twitCustomizatioAreaBtn4)

const twitCustomizatioAreaBtn5 = document.createElement("button")
twitCustomizatioAreaBtn5.textContent = "Kimin yanıtlayabileceğini değiştir"
twitCustomizatioAreaBtn5.classList.add("twit-customization-btn")
twitCustomizatioArea.appendChild(twitCustomizatioAreaBtn5)



const customBtn1Icon = document.createElement("i")
customBtn1Icon.classList.add("fas" , "fa-trash")
twitCustomizatioAreaBtn1.appendChild(customBtn1Icon)
customBtn1Icon.classList.add("twit-custom-icon")
customBtn1Icon.style.color = "#7a0000"



const customBtn2Icon = document.createElement("i")
customBtn2Icon.classList.add("fas","fa-thumbtack")
twitCustomizatioAreaBtn2.appendChild(customBtn2Icon)
customBtn2Icon.classList.add("twit-custom-icon")

const customBtn3Icon = document.createElement("i")
customBtn3Icon.classList.add("fas","fa-wand-magic-sparkles")
twitCustomizatioAreaBtn3.appendChild(customBtn3Icon)
customBtn3Icon.classList.add("twit-custom-icon")

const customBtn4Icon = document.createElement("i")
customBtn4Icon.classList.add("fas" , "fa-list-check")
twitCustomizatioAreaBtn4.appendChild(customBtn4Icon)
customBtn4Icon.classList.add("twit-custom-icon")


const customBtn5Icon = document.createElement("i")
customBtn5Icon.classList.add("far" , "fa-comment")
twitCustomizatioAreaBtn5.appendChild(customBtn5Icon)
customBtn5Icon.classList.add("twit-custom-icon")





const leftSideBarMoreOptionsDiv = document.createElement("div")
leftSideBarMoreOptionsDiv.style.position = "fixed"
leftSideBarMoreOptionsDiv.classList.add("left-side-bar-more-options")
body.appendChild(leftSideBarMoreOptionsDiv)

const btnCreate3 = (explain , iconClass , iconClasstwo) => {
   
  const btn = document.createElement("button")
  leftSideBarMoreOptionsDiv.appendChild(btn)
  const btnp = document.createElement("p")
  btnp.textContent = explain
  btn.appendChild(btnp)
  btnp.style.marginBottom = "0"
  btnp.style.marginTop = "0.5rem"
  btnp.style.marginLeft = "1rem"
  btnp.style.whiteSpace = "nowrap"

  btn.addEventListener("mouseenter" , (event) => {
  btn.style.backgroundColor = "#80808057"
})

btn.addEventListener("mouseleave" , (event) => {
  btn.style.backgroundColor = "black"
})



  const ico= document.createElement("i")
  ico.classList.add('fa', ...iconClass.split(' '))
  btn.appendChild(ico)
  btn.style.color = "white"
  btn.style.background = "black"

  const tikIco = document.createElement("i")
tikIco.classList.add('fa', ...iconClasstwo.split(' '))
btn.appendChild(tikIco)
tikIco.style.position = "fixed"
tikIco.style.color = "rgb(13 148 239)"
tikIco.style.marginLeft = "16rem"
tikIco.style.marginTop = "0.5rem"

  
  ico.style.backgroundColor = "black"
  btn.style.display = "flex"
  ico.style.order = "-1"
  ico.style.fontSize = "xx-large"
  ico.style.width = "3.3rem"
  ico.style.height="2rem"
  ico.style.borderRadius = "5px"
  ico.style.color = "white"

  btn.style.marginBottom = "1rem"
 tikIco.style.display = "none"

 btn.addEventListener("click" , (e) => {
  tikIco.style.display = "block"
 })

 document.addEventListener("click" , (event) => {
  if(event.target === btn || btn.contains(event.target)) {
     return ;
  } 
    tikIco.style.display = "none"
  })

  return btn
}


const leftSideBarMoreOptionsDivBtn1 =btnCreate3("Listeler","fa-solid fa-list-check" , "fa-solid fa-check")
const leftSideBarMoreOptionsDivBtn2 =btnCreate3("Premium","fa-brands fa-x-twitter", "fa-solid fa-check")
const leftSideBarMoreOptionsDivBtn3 =btnCreate3("Yer İşaretleri","fa-regular fa-bookmark" , "fa-solid fa-check")
const leftSideBarMoreOptionsDivBtn4 =btnCreate3("Para Kazanma","fa-solid fa-money-bill" , "fa-solid fa-check")
const leftSideBarMoreOptionsDivBtn5 =btnCreate3("Onaylı kuruluşlar","fa-solid fa-bolt-lightning" , "fa-solid fa-check")
const leftSideBarMoreOptionsDivBtn6 =btnCreate3("Reklamlar","fa-solid fa-square-arrow-up-right", "fa-solid fa-check")
const leftSideBarMoreOptionsDivBtn7 =btnCreate3("İşler","fa-solid fa-briefcase" , "fa-solid fa-check")
const leftSideBarMoreOptionsDivBtn8 = btnCreate3("Sohbet odanı oluştur" , "fa-solid fa-microphone-lines" , "fa-solid fa-check")
const leftSideBarMoreOptionsDivBtn9 = btnCreate3("Ayarlar ve gizlilik", "fa-solid fa-gear" , "fa-solid fa-check")


const leftSideBarMoreOptionsBtn = document.getElementById("left-side-bar-more-options-btn")
const leftSideBarMoreOptionsIcon = document.getElementById("left-side-bar-more-options-icon")

leftSideBarMoreOptionsIcon.addEventListener("click" , (event) => {
  leftSideBarMoreOptionsDiv.style.display = "flex"
})

leftSideBarMoreOptionsBtn.addEventListener("click" , (event) => {
  leftSideBarMoreOptionsDiv.style.display = "flex"
})



document.addEventListener("click" , (event) => {
  if(event.target === leftSideBarMoreOptionsBtn  || leftSideBarMoreOptionsDiv.contains(event.target) || leftSideBarMoreOptionsIcon.contains(event.target)) {
    return ;
  }

  leftSideBarMoreOptionsDiv.style.display = "none"
})

window.addEventListener( "scroll" , (event) => {
  leftSideBarMoreOptionsDiv.style.display = "none"
})


