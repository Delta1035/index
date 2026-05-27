let inputDom = document.querySelector('.searchInput');
var searchForm = document.querySelector("#searchForm");
var baiduBtn = document.querySelector('#baidu');
var bingBtn = document.querySelector('#bing');

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

if (addBtn && addPanel && confirmBtn && cancelBtn && siteNameInput && siteURLInput) {
    addBtn.addEventListener('click', function () {
        addPanel.style.display = 'flex';
    })

    confirmBtn.addEventListener('click', function () {
        var site = {
            name: siteNameInput.value,
            url: siteURLInput.value
        }

        if ((siteNameInput.value !== null && siteNameInput.value.trim().length > 0) && (siteURLInput.value !== null && siteURLInput.value.trim().length > 0)) {
            if (localStorage.getItem('siteList') === null) {//不存在
                localStorage.setItem('siteList', JSON.stringify([site]))
            } else {
                let savedSiteList = JSON.parse(localStorage.getItem('siteList'));
                savedSiteList.push(site);
                localStorage.setItem('siteList', JSON.stringify(savedSiteList))
            }
        }
        addPanel.style.display = 'none';
    })

    cancelBtn.addEventListener('click', function () {
        addPanel.style.display = 'none';
    })
}


function useBaidu(){
    searchForm.action = "https://baidu.com/s";
    inputDom.name = 'wd';
    baiduBtn.classList.add('active');
    bingBtn.classList.remove('active');
}

function useBing(){
    searchForm.action = "https://cn.bing.com/search";
    inputDom.name = 'q';
    bingBtn.classList.add('active');
    baiduBtn.classList.remove('active');
}
