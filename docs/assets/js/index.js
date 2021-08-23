//设置壁纸
var bgDom = document.querySelector('.bg-image');
var count = Math.ceil(Math.random()*5)+1;
// var bgURL = 'url(../images/bg/bg('+count+'))';
// console.log(bgDom.style);

// bgDom.style.backgroundImage = "url(star.jpg)";
// bgDom.style.backgroundRepeat = "no-repeat";//设置背景不平铺
// bgDom.style.backgroundPosition = "center";//设置背景图的位置
// bgDom.style.backgroundSize = "cover";//设置背景图像的尺寸
// console.log(bgDom.style.backgroundImage);
// console.log(bgDom.style.backgroundImage.url);


let inputDom = document.querySelector('.searchInput');
console.log(inputDom);
inputDom.addEventListener('keyup',function(event){
    console.log(event);
})