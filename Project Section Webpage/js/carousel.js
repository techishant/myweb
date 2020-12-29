var introImage =document.getElementById("intro_img");
var introHeader =document.getElementById("intro_header");
var introPara =document.getElementById("intro_para");

const carouselData=[
    {
        heading:'techishant',
        para:'This is the Ultimate project section of my website.Here one can find all the amazing projects developed by me. Please check it out...... ',
        imgName:'image-1',
    },

    {
        heading:'techishant|the ultimate project section ',
        para:'This gonna be very helpful for new web developers to get ideas. Every one can use this ideas this would really be a intresting project the Games,Utilities projects. With the project I have also described the principle on which its working. Hope you like it.....',
        imgName:'image-2',
    }
];

introHeader.textContent = carouselData[1].heading;
introPara.innerText = carouselData[1].para;
introImage.src="../images/" + carouselData[1].imgName + ".jpg"

let songIndex= 0;

setInterval(() => {
   songIndex = (songIndex + 1) % carouselData.length;

   
   introImage.src="/images/" + carouselData[songIndex].imgName + ".jpg";
   introHeader.textContent = carouselData[songIndex].heading;
   introPara.innerText = carouselData[songIndex].para;
   
  
}, 5000);
