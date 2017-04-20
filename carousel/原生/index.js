class DOM {
    constructor() {

    }
    // 获取元素
    selector() {
        return document.querySelector.apply(document, arguments);
    }
    selectorAll() {
        return document.querySelectorAll.apply(document, arguments);
    }

    // 操作元素内容
    appendHTML(parent, html) {
        parent.insertAdjacentHTML("beforeend", html);
    }

    // 遍历
    getFirstChild(parent) {
        return parent.firstElementChild;
    }
    getLastChild(parent) {
        return parent.lastElementChild;
    }
    getNextElement(ele) {
        return ele.nextElementSibling;
    }
    getPrevElement(ele) {
        return ele.previousElementSibling;
    }

    // 操作样式
    addClass(ele, className) {
        ele.classList.add(className);
    }
    removeClass(ele, className) {
        ele.classList.remove(className);
    }
    containClass(ele, className) {
        return ele.classList.contains(className);
    }
}


class Slide extends DOM {
    constructor(num) {
        super();
        this.imgNum = num;
        this.container = document.querySelector(".carousel-container");
    }

    initial() {
        this.insertImage(this.imgNum);
        this.insertIndicator()
        this.bindEventControl();
        this.bindEventHover();
    }

    insertImage(len) {
        var selector = this.selector;
        // 插入图片容器
        var imgGroupHtml = `<div class="carousel-imageGroup"></div>`;
        this.appendHTML(this.container, imgGroupHtml);
        // this.container.insertAdjacentHTML("beforeend", imgGroupHtml);

        // 插入图片
        var images= "";
        for(var index = 1; index < len + 1; index++) {
            var image = `<img src="../images/${index}.jpg" alt="图片" class="carousel-image">`;
            images += image;
        }
        var imgGroup = selector(".carousel-imageGroup");
        this.appendHTML(imgGroup, images);
        // imageGroup.innerHTML = images;

        // 显示第一张图片
        var imgFirst = this.getFirstChild(imgGroup);
        this.addClass(imgFirst, "carousel-show")
        // imageFirst.classList.add("carousel-show");
    }

    insertIndicator() {
        var selector = this.selector;
        var selectorAll = this.selectorAll;

        // 插入指示器容器
        var indicatorGroupHtml = `<div class="carousel-indicatorGroup"></div>`
        this.appendHTML(this.container, indicatorGroupHtml)
        // this.container.insertAdjacentHTML("beforeend", indicatorGroupHtml);

        // 根据图片生成indicator
        var len = selectorAll(".carousel-image").length;
        var indicatores = "";
        for(var i = 1; i < len + 1; i++) {
            var indicator = `<span class = "carousel-indicator">${i}</span>`;
            indicatores += indicator;
        }
        var indicatorGroup = selector(".carousel-indicatorGroup");
        this.appendHTML(indicatorGroup, indicatores);
        // indicatorGroup.innerHTML = indicatores;

        // 高亮第一个indicator
        var indicatorFirst = selector(".carousel-indicator");
        this.addClass(indicatorFirst, "carousel-indicator-active");
    }

    bindEventControl() {
        var that = this;
        var selector = this.selector;
        // 插入controls
        var controlsHTML = `
            <div class="carousel-controlGroup carousel-hide">
                <input type="button" value="&lt;" class="carousel-control carousel-prev">
                <input type="button" value="&gt;" class="carousel-control carousel-next">
             </div>
        `;
        this.appendHTML(this.container, controlsHTML);
        // this.container.insertAdjacentHTML("beforeend", controlsHTML);

        selector(".carousel-controlGroup").addEventListener("click", function(event) {
            var btn = event.target;
            if(that.containClass(btn, "carousel-prev")){
                that.playNextOrPrev(false);
            } else {
                that.playNextOrPrev(true);
            }
        });
    }

    bindEventHover() {
        var that = this;
        var selector = this.selector;

        var clear = that.autoplay();
        var container = this.container;
        var controlGroup = selector(".carousel-controlGroup");
        container.addEventListener("mouseenter", function(event){
            clearInterval(clear);
            // 显示控件
            that.addClass(controlGroup, "carousel-show");
            // selector(".carousel-controlGroup").classList.add("carousel-show");
        });

        container.addEventListener("mouseleave", function(event) {
            clear = that.autoplay();
            that.removeClass(controlGroup, "carousel-show");
            // selector(".carousel-controlGroup").classList.remove("carousel-show");
        })
    }

    // 自动播放
    autoplay() {
        var that = this;
        return setInterval(function() {
            that.playNextOrPrev(true);
        }, 2000);
    }

    playNextOrPrev(bool) {
        var that = this;
        var selector = that.selector;
        var activeImage = selector(".carousel-image.carousel-show");
        that.removeClass(activeImage, "carousel-show");
        // activeImage.classList.remove("carousel-show");

        var nextEle = that.getNextElement(activeImage);
        var prevEle = that.getPrevElement(activeImage);
        var anotherActive = bool ? nextEle : prevEle;

        var imageGroup = selector(".carousel-imageGroup");
        var imageFirst = that.getFirstChild(imageGroup);
        var imageLast = that.getLastChild(imageGroup);
        if(anotherActive === null) {
            anotherActive = bool ? imageFirst : imageLast;
        }
        anotherActive.classList.add("carousel-show");
        that.indicateNextOrPrev(bool);
    }

    indicateNextOrPrev(bool) {
        var that = this;
        var selector = that.selector;

        var activeindicator = selector(".carousel-indicator-active");
        that.removeClass(activeindicator, "carousel-indicator-active");
        // activeindicator.classList.remove("carousel-indicator-active");

        var nextIndicator = that.getNextElement(activeindicator);
        var prevIndicator = that.getPrevElement(activeindicator);
        var anotherActive = bool ? nextIndicator : prevIndicator;
        var indicatorGroup = selector(".carousel-indicatorGroup");
        var indicatorFirst = indicatorGroup.firstElementChild;
        var indicatorLast = indicatorGroup.lastElementChild;
        if(anotherActive === null) {
            anotherActive = bool ? indicatorFirst : indicatorLast;
        }
        that.addClass(anotherActive, "carousel-indicator-active");
        // anotherActive.classList.add("carousel-indicator-active");
    }
}

var slide = new Slide(7);
slide.initial();





