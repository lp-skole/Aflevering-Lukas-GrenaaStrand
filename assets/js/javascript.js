const menu = document.getElementById("menu");
const navigation = document.getElementById("navigation");


function expand(){
  navigation.style.display = "block";
  menu.innerHTML = `<i class="fas fa-chevron-circle-down" onclick="collapse()"></i>`;
}
function collapse(){
  navigation.style.display = "none";
  menu.innerHTML = `<i class="fas fa-bars" onclick="expand()"></i>`;
}

let i = 0;
let time = 5000;
const sliderImg = document.getElementById("sliderImg");
const image = [];
const alt = [];
image[0] = "assets/images/Grenaa_strand1.jpg";
image[1] = "assets/images/Grenaa_strand2.jpg";
image[2] = "assets/images/Grenaa_strand3.jpg";
image[3] = "assets/images/Grenaa_strand4.jpg";
image[4] = "assets/images/Grenaa_strand5.jpg";
image[5] = "assets/images/Grenaa_strand6.jpg";
image[6] = "assets/images/Grenaa_strand7.jpg";
image[7] = "assets/images/Grenaa_strand8.jpg";
image[8] = "assets/images/Grenaa_strand9.jpg";

alt[0] = "mennesker på en strand";
alt[1] = "dreng på en strand";
alt[2] = "nogle der laver noget ud a sand";
alt[3] = "en redningskrans";
alt[4] = "et livreder hus";
alt[5] = "udsigt over stranden";
alt[6] = "2 børn på stranden";
alt[7] = "lille sti på stranden";
alt[8] = "barn på en lille sti på stranden";

function imgChange(){
  sliderImg.src = image[i];
  sliderImg.alt = alt[i];
  if(i < image.length - 1){
    i++;
  }else{
    i = 0;
  };
  setTimeout("imgChange()", time);
};
window.onload = imgChange();