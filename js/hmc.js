var banner = document.querySelector('.banner-img')
var i=0;
var image = [
    'images/680065.jpg',
    './images/air-jordan-xxxii-basketball-shoe1.jpg'
];
        function changeImage(){
            banner.src = image[i];

            if(i < image.length - 1)
            {
                i++;
            }
            else{
                i = 0;
            }
        setTimeout(changeImage,1000);
        }
window.onload = changeImage;
var mainIcon = document.querySelectorAll('.main__part-icon');
mainIcon.forEach(function(x){
    x.addEventListener('click',function(){
        x.style.display = 'none';
    })   
})
var header = document.getElementById('idheader');
window.addEventListener('scroll',moveheader);
function moveheader(){
    var value = window.scrollY;
    if(value>0 && value<500)
    {
        header.style.top = '-25px';
       
    }
    else{
        header.style.top = 0;   
        header.style.transition = '0.3s';
    }
};
var btnReload = document.getElementById('idbtnreload')
window.addEventListener('scroll',() => {
    var scrolled = window.scrollY;
    if( scrolled >= 0 && scrolled < 400){
        btnReload.style.opacity = 0;
    }
    else{
        btnReload.style.display = 'flex';
        btnReload.style.transition = '0.3s';
        btnReload.style.opacity = 1;  
    }
})
btnReload.addEventListener('click',function backTop(){
    var scrolled = window.scrollTo;
    scrolled(0,0);
})
