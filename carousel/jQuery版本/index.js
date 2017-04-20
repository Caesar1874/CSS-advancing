
function __main() {
    insertImage(7);
    insertIndicator()
    bindEventHover();
    bindEventControl();
}
$(__main());

// 动态添加图片
function insertImage(num) {
    var len = num;
    var imageGroup = "";
    for(var i = 1; i < len + 1; i++) {
        var imageStr = `<img src="../images/${i}.jpg" alt="图片" class="carousel-image">`;
        imageGroup += imageStr;
    }
    $(".carousel-imageGroup").append(imageGroup);
    $(".carousel-image:first").addClass("carousel-show");
}

// 动态添加indicator
function insertIndicator() {
    var len = $(".carousel-image").length;
    var indicatorGroup = "";
    for(var i = 1; i < len + 1; i++) {
        var indicatorStr = `<span class = "carousel-indicator">${i}</span>`;
        indicatorGroup += indicatorStr;
    }
    $(".carousel-indicatorGroup").append(indicatorGroup);
    $(".carousel-indicator:first").addClass("carousel-indicator-active");
}

// hover: 自动播放与停止
function bindEventHover() {
    var clear = autoplay();
    $(".carousel-image, .carousel-control").hover(function(event){
        if(event.type === "mouseenter"){
            clearInterval(clear);
            // 显示控件
            $(".carousel-controlGroup").addClass("carousel-show");
        } else{
            clear = autoplay();
            $(".carousel-controlGroup").removeClass("carousel-show");
        }
    });
}

function autoplay() {
    return setInterval(function() {
        playNextOrPrev(true);
    }, 1000);
}

// 播放
function playNextOrPrev(bool) {
    var activeImage = $(".carousel-image.carousel-show");
    activeImage.fadeOut();
    activeImage.removeClass("carousel-show");

    var anotherActive = bool ? activeImage.next() : activeImage.prev();

    if(anotherActive.length === 0) {
        var selector = bool ? ".carousel-image:first" : ".carousel-image:last";
        anotherActive = $(selector);
    }
    anotherActive.addClass("carousel-show");
    anotherActive.fadeIn();
    indicateNextOrPrev(bool);
}

// 指示器
function indicateNextOrPrev(bool) {
    var activeindicator = $(".carousel-indicator-active");
    activeindicator.removeClass("carousel-indicator-active");

    var anotherActive = bool ? activeindicator.next(): activeindicator.prev();

    if(anotherActive.length === 0) {
        var selector = bool ? ".carousel-indicator:first" : ".carousel-indicator:last";
        anotherActive = $(selector);
    }
    anotherActive.addClass("carousel-indicator-active");
}

// 控制： prev next
function bindEventControl() {
    $(".carousel-control").on("click", controlHandler);
}

function controlHandler(event) {
    var target = $(event.target);

    if(target.hasClass("carousel-prev")){
        playNextOrPrev(false);
    } else {
        playNextOrPrev(true);
    }
}


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





