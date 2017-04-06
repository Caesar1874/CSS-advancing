class Slide {
    construcor(num) {
        this.imgNum = num;
        this.container = this.selector(".carousel-container");
    }
    // tool
    selector() {
        return document.querySelector.apply(document, arguments);
    }
    selectorAll() {
        return document.querySelectorAll.apply(document, arguments);
    }
    initial() {
        this.insertImage(this.imgNum);
        this.insertIndicator()
        this.bindEventHover();
        this.bindEventControl();
    }

    insertImage(len) {
        var that = this;
        console.log(that)
        var selector = that.selector;

        // 插入图片容器
        var imgGroupHtml = `<div class="carousel-imageGroup"></div>`;
        this.container.insertAdjacentHTML("beforeend", imgGroupHtml);
        // 插入图片
        var images= "";
        for(var index = 1; index < len + 1; index++) {
            var image = `<img src="../images/${index}.jpg" alt="图片" class="carousel-image">`;
            images += image;
        }
        var imageGroup = selector(".carousel-imageGroup");
        imageGroup.innerHTML = images;
        // 显示第一张图片
        var imageFirst = imageGroup.firstElementChild;
        imageFirst.classList.add("carousel-show");
    }

    insertIndicator() {
        var that = this;
        var selector = that.selector;

        // 插入指示器容器
        var indicatorGroupHtml = `<div class="carousel-indicatorGroup"></div>`
        that.container.insertAdjacentHTML("beforeend", indicatorGroupHtml);
        // 根据图片生成indicator
        var len = selectorAll(".carousel-image").length;
        var indicatores = "";
        for(var i = 1; i < len + 1; i++) {
            var indicator = `<span class = "carousel-indicator">${i}</span>`;
            indicatores += indicator;
        }
        var indicatorGroup = selector(".carousel-indicatorGroup");
        indicatorGroup.innerHTML = indicatores;
        // 高亮第一个indicator
        var indicatorFirst = selector(".carousel-indicator");
        indicatorFirst.classList.add("carousel-indicator-active");
    }

    bindEventControl() {
        var that = this;
        // 插入controls
        var controlsHTML = `
            <div class="carousel-controlGroup carousel-hide">
                <input type="button" value="&lt;" class="carousel-control carousel-prev">
                <input type="button" value="&gt;" class="carousel-control carousel-next">
             </div>
        `;
        that.container.insertAdjacentHTML("beforeend", controlsHTML);

        selector(".carousel-controlGroup").addEventListener("click", function(event) {
            var btn = event.target;
            if(btn.classList.contains("carousel-prev")){
                that.playNextOrPrev(false);
            } else {
                that.playNextOrPrev(true);
            }
        });
    }

    bindEventHover() {
        var that = this;
        var selector = that.selector;

        var clear = that.autoplay();
        var container = that.container;
        container.addEventListener("mouseenter", function(event){
            clearInterval(clear);
            // 显示控件
            selector(".carousel-controlGroup").classList.add("carousel-show");
        });

        container.addEventListener("mouseleave", function(event) {
            clear = autoplay();
            selector(".carousel-controlGroup").classList.remove("carousel-show");
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
        activeImage.classList.remove("carousel-show");

        var anotherActive = bool ? activeImage.nextElementSibling : activeImage.previousElementSibling;

        var imageGroup = selector(".carousel-imageGroup");
        var imageFirst = imageGroup.firstChild;
        var imageLast = imageGroup.lastChild;
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
        activeindicator.classList.remove("carousel-indicator-active");

        var anotherActive = bool ? activeindicator.nextElementSibling: activeindicator.previousElementSibling;
        var indicatorGroup = selector(".carousel-indicatorGroup");
        var indicatorFirst = indicatorGroup.firstElementChild;
        var indicatorLast = indicatorGroup.lastElementChild;
        if(anotherActive === null) {
            anotherActive = bool ? indicatorFirst : indicatorLast;
        }
        anotherActive.classList.add("carousel-indicator-active");
    }


}

var slide = new Slide(7);
slide.initial();








/* function playNext() {
 var activeImage = $(".carousel-image.carousel-show");
 activeImage.fadeOut();
 activeImage.removeClass("carousel-show");

 var nextActive = activeImage.next();
 if(nextActive.length === 0) {
 nextActive = $(".carousel-image:first");
 console.log("bug")
 }
 nextActive.addClass("carousel-show");
 nextActive.fadeIn();

 indicateNextOrPrev(true);
 }*/

/*
 function playPrev() {
 var activeImage = $(".carousel-image.carousel-show");
 activeImage.fadeOut();
 activeImage.removeClass("carousel-show");

 var nextActive = activeImage.prev();
 if(nextActive.length === 0) {
    nextActive = $(".carousel-image:last")
 }
 nextActive.addClass("carousel-show");
 nextActive.fadeIn();

 indicateNextOrPrev(false);
 }
 */



/*
function indicateNext() {
    var activeindicator = $(".carousel-indicator-active");
    activeindicator.removeClass("carousel-indicator-active");

    var nextActive = activeindicator.next();
    if(nextActive.length === 0) {
        nextActive = $(".carousel-indicator:first")
    }
    nextActive.addClass("carousel-indicator-active");
}

function indicatePrev() {
    var activeindicator = $(".carousel-indicator-active");
    activeindicator.removeClass("carousel-indicator-active");

    var nextActive = activeindicator.prev();
    if(nextActive.length === 0) {
        nextActive = $(".carousel-indicator:last")
    }
    nextActive.addClass("carousel-indicator-active");
}*/





