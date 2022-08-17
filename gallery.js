let galleryImages = document.querySelectorAll(".gallery-img");
let getLastedOpenImg;
let windowWidth = window.innerWidth;
let newImg = document.createElement("img");
let container = document.body;


if(galleryImages){
    galleryImages.forEach(function(image, index){
        image.onclick = function(){
           let getElementCss = window.getComputedStyle(image);
           let getFullImageUrl = getElementCss.getPropertyValue("background-image");
           let getImgUrlPos = getFullImageUrl.split("/img/thumbs/")
           let setNewImgUrl = getImgUrlPos[1].replace('")', ' ');
        
            
           getLastedOpenImg = index + 1;

           
           let newImgWindow = document.createElement("div");
           container.appendChild(newImgWindow);
           newImgWindow.setAttribute("class", "img-window");
           newImgWindow.setAttribute("onclick", "closeImg()");

     
           newImgWindow.appendChild(newImg);
           newImg.setAttribute("src", "img/thumbs/" + setNewImgUrl);
           newImg.setAttribute("id", "current-image");

           newImg.onload = function(){

            let imgWidth = this.Width;
            let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

            let newNextBtn = document.createElement("a");
            let NextBtnText = document.createTextNode("Next");
            newNextBtn.appendChild(NextBtnText);
            container.appendChild(newNextBtn);
            newNextBtn.setAttribute("class", "img-btn-next");
            newNextBtn.setAttribute("onclick", "changeImg(1)");
            newNextBtn.style.cssFloat = "right:" + calcImgToEdge +"px;";

            let newPrevBtn = document.createElement("a");
            let PrevBtnText = document.createTextNode("Prev");
            newPrevBtn.appendChild(PrevBtnText);
            container.appendChild(newPrevBtn);
            newPrevBtn.setAttribute("class", "img-btn-prev");
            newPrevBtn.setAttribute("onclick", "changeImg(0)");
            newPrevBtn.style.cssFloat = "left:" + calcImgToEdge +"px;";
           
         }
        }


           
   });
}

function closeImg(){
   document.querySelector(".img-window").remove();
   document.querySelector(".img-btn-next").remove();
   document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir){
   document.querySelector("#current-image").remove();

   let getImgWindow = document.querySelector(".img-window");
   let newImg = document.createElement("img");
   
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if(changeDir === 1) {
      calcNewImg = getLastedOpenImg + 1;
      if(calcNewImg > galleryImages.length){
         calcNewImg = 1;
      }
    }else if (changeDir === 0){
      calcNewImg = --getLastedOpenImg;
      if(calcNewImg < 0){
         calcNewImg = --galleryImages.length;
      }
    }
    newImg.setAttribute("src", "img/image" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-image");

    getLastedOpenImg = calcNewImg;
}