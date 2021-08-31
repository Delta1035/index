
let inputDom = document.querySelector('.searchInput');
var submit = document.querySelector('#submit');
console.log(inputDom);
inputDom.addEventListener('keyup', function (event) {
    console.log(event);
})

//获取添加面板
var addPanel = document.querySelector('.add-site-input');
//获取添加按钮
var addBtn = document.querySelector('.add');
//确认按钮
var confirmBtn = document.querySelector('.confirm');
//取消按钮
var cancelBtn = document.querySelector('.cancel');
//网站名输入框
var siteNameInput = document.querySelector('#siteName');
//网站地址输入框
var siteURLInput = document.querySelector('#siteURL');

//搜索表单
var searchForm = document.querySelector("#searchForm");
console.log(searchForm);


addBtn.addEventListener('click', function () {
    addPanel.style.display = 'flex';
})

confirmBtn.addEventListener('click', function () {
    var site = {
        name: siteNameInput.value,
        url: siteURLInput.value
    }

    console.log(site);
    console.log(localStorage.getItem('siteList'));

    if ((siteNameInput.value !== null && siteNameInput.value.trim().length > 0) && (siteURLInput.value !== null && siteURLInput.value.trim().length > 0)) {
        if (localStorage.getItem('siteList') === undefined) {//不存在
            console.log('1');
            localStorage.setItem('siteList', JSON.stringify([site]))
        } else {
            console.log('2');
            let savedSiteList = JSON.parse(localStorage.getItem('siteList'));
            var r = savedSiteList.push(site);
            console.log(r);
            localStorage.setItem('siteList', JSON.stringify())
        }
    }
    addPanel.style.display = 'none';

})

cancelBtn.addEventListener('click', function () {
    addPanel.style.display = 'none';
})


function useBaidu(){
    searchForm.action = "https://www.baidu.com/s";
    inputDom.name = 'wd';
    submit.click();
}

function useBing(){
    searchForm.action = "https://cn.bing.com/search?q";
    inputDom.name = 'q';
    submit.click();
}