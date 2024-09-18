//here we will write the js code to select slider by hiding the other images and displaying only one image

const imgs = document.querySelectorAll('.header-slider ul img') //used to select all images inside this <ul> 
const prev_btn = document.querySelector('.control_prev') 
const next_btn = document.querySelector(".control_next");

let n = 0 //when n=0, it should display 1st image
function changeSlide(){
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none"; //hides all images
  }
  imgs[n].style.display = "block"; //only 1st image displayed
}
//changeSlide();

//now write js code for prev_btn 
prev_btn.addEventListener('click',(e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length-1  //when we click on back button,we are on 1st image and directly displays the last image
    }
    changeSlide();
})

//now write js code for next_btn 
next_btn.addEventListener('click',(e)=>{
    if (n < imgs.length - 1) {
      n++;
    } else {
      n = 0; //when we click on next button,we are on last image and directly displays the 1st image
    }
    changeSlide();
})

//code to scroll the product images using only mouse
const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY
    })
}