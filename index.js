window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
    });
   
});
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:false,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
    });
});
const isMobile={
    Android:function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry:function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS:function(){
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera:function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows:function(){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any:function(){
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());

     } 
};
if (isMobile.any()){
    document.body.classList.add('_touch');
    let menuArrows=document.querySelectorAll('.menu_arrow');
    if(menuArrows.length>0){
        for (let index=0; index<menuArrows.length;index++){
            const menuArrow=menuArrows[index];
            menuArrow.addEventListener("click",function(e){
                menuArrow.parentElement.classList.toggle('_active');

            });

        }
        
    }
}
else{
    document.body.classList.add('_pc');
}
});