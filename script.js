$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //MENÚ DESPLEGABLE MOVIL
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //ANIMACIÓN DE ESCRIBIR
    var typed= new Typed(".escribir",{
        strings: ["Ingeniero Informático", "Desarrollador", "Programador"],
        typeSpeed:100,
        backSpeed: 60,
        loop: true
    });
    var typed= new Typed(".escribir2",{
        strings: ["Ingeniero Informático", "Desarrollador", "Programador"],
        typeSpeed:100,
        backSpeed: 60,
        loop: true
    });
})