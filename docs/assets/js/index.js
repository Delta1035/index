
let inputDom = document.querySelector('.searchInput');
var submit = document.querySelector('#submit');
var searchForm = document.querySelector("#searchForm");
var engineButtons = document.querySelectorAll('.changeSearch button[data-engine]');
var tabButtons = document.querySelectorAll('.site-tab[data-tab]');
var tabPanels = document.querySelectorAll('.site-section[data-panel]');

var searchEngines = {
    baidu: {
        action: 'https://baidu.com/s',
        name: 'wd'
    },
    bing: {
        action: 'https://cn.bing.com/search',
        name: 'q'
    },
    google: {
        action: 'https://www.google.com/search',
        name: 'q'
    }
};

function setSearchEngine(engine) {
    var config = searchEngines[engine] || searchEngines.baidu;

    searchForm.action = config.action;
    inputDom.name = config.name;

    engineButtons.forEach(function (button) {
        var isActive = button.dataset.engine === engine;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
}

function looksLikeUrl(value) {
    return /^(https?:\/\/|localhost(:\d+)?(\/|$)|[\w-]+(\.[\w-]+)+(:\d+)?(\/|$))/i.test(value);
}

function normalizeUrl(value) {
    if (/^https?:\/\//i.test(value)) {
        return value;
    }

    return 'https://' + value;
}

function switchSiteTab(tab) {
    tabButtons.forEach(function (button) {
        var isActive = button.dataset.tab === tab;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', String(isActive));
    });

    tabPanels.forEach(function (panel) {
        var isActive = panel.dataset.panel === tab;
        panel.classList.toggle('active', isActive);
        panel.hidden = !isActive;
    });
}

if (searchForm && inputDom) {
    searchForm.addEventListener('submit', function (event) {
        var value = inputDom.value.trim();

        if (looksLikeUrl(value)) {
            event.preventDefault();
            window.location.href = normalizeUrl(value);
        }
    });
}

engineButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        setSearchEngine(button.dataset.engine);
        inputDom.focus();
    });
});

tabButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        switchSiteTab(button.dataset.tab);
    });
});

setSearchEngine('baidu');
switchSiteTab('dev');

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

if (addBtn && addPanel) {
    addBtn.addEventListener('click', function () {
        addPanel.style.display = 'flex';
    })
}

if (confirmBtn && addPanel && siteNameInput && siteURLInput) {
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
}

if (cancelBtn && addPanel) {
    cancelBtn.addEventListener('click', function () {
        addPanel.style.display = 'none';
    })
}

