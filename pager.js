// 假设后端传的数据是这样的
var data = [1, 2, 3, 4, 5, 6, 7, 'a', 'b']
var dataArray = sourceData.data.list

var winterPage = {}
var log = function() {
    console.log.apply(console, arguments)
}

// 监听点击按钮获取不同页面的数据
var bindClickEvent =function() {
    var pagerDivEle = document.querySelector('.pager')
    pagerDivEle.addEventListener('click', function(event) {
        log('click target', event.target)
    })
}

var btnContainer = function() {
    var bodyEle = document.querySelector('body')
    bodyEle.insertAdjacentHTML('beforeEnd', '<div class="pager"></div>')
}

var btnTpl = function(inx) {
    var t = `<button type="button" name="button">${inx}</button>`
    return t
}

var insertTpl = function(selStr, tpl) {
    var ele = document.querySelector(selStr)
    ele.insertAdjacentHTML('beforeEnd', tpl)
}

var insertBtns = function(data) {
    for (let i = 0; i < data.length; i++) {
        insertTpl('.pager', btnTpl(i + 1))
    }
}

function Page(dataArray) {

}

Page.prototype = {
    constructor: Page,
    btnContainer: function() {
        var bodyEle = document.querySelector('body')
        bodyEle.insertAdjacentHTML('beforeEnd', '<div class="pager"></div>')
    },
    makePageBtns: function() {
        for (var i = 0; i < data.length; i++) {
            insertTpl('.pager', btnTpl(i + 1))
        }
    }
}

var __main = function() {
    var page = new Page()
    page.btnContainer()
    page.makePageBtns(data)
    // bindClickEvent()
    log('page', page)
    log('sourceData', sourceData.data.list)
}

__main()
