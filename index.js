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
        speed:0,
    });
});
$(document).ready(function(){
    $('.slider2').slick({
        arrows:false,
        dots:false,
        adaptiveHeight:false,
        slidesToShow: 5,
        slidesToScroll:1,
        speed:2000,
        autoplay:true,
        autoplaySpeed:2000,
        centerMode: true,
        centerPadding: '140px',
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1,
                    centerPadding: '80px'
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.slider3').slick({
        arrows:false,
        dots:false,
        adaptiveHeight:false,
        slidesToShow: 5,
        slidesToScroll:1,
        speed:2000,
        autoplay:true,
        autoplaySpeed:2000,
        centerMode: true,
        centerPadding: '0px',
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2,
                    centerPadding: '0px'
                }
            }
        ]
    });
});
const form=document.getElementById('form');
form.addEventListener('submit', formSend);
async function formSend(e){
    e.preventDefault();
    let error =formValidate(form);
    let formData = new FormData(form);
    if (error===0){
        let response=await fetch('https://formcarry.com/s/zOWGYg-Ual',{
            method:'POST',
            body:formData
        });
    }
    else {
        alert('Заполните обязательные поля');
    }

}
function formValidate(form){
    let error=0;
    let formReq=document.querySelectorAll('._req');
    for (let index=0; index< formReq.length;index++){
        const input= formReq[index];
        formRemoveError(input);
        if(input.classList.contains("_email")){
            if(emailTest(input)){
                formAddError(input);
                error++;
            }
        }
        else if(input.classList.contains("_tel")){
            if(telTest(input)){
                formAddError(input);
                error++;
            }

        }
        else if(input.getAttribute("type")==="checkbox" && input.checked===false){
            formAddError(input);
                error++;
        }
        else{
            if (input.value===''){
                formAddError(input);
                error++;
            }
        }
    }
    return error;
}
function emailTest(input){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
function telTest(input){
    return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
}
function formAddError(input){
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}
function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}
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