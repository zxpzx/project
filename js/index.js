    whatScreen();
    onresize = function(){
        whatScreen();
    }

//改变屏幕显示的4中屏幕宽度
function whatScreen(){
    var width = document.querySelector("html").offsetWidth;
    var title = document.querySelector("title");

    if(width <= 768){
        title.innerText = "极小屏幕-"+width;
    }else if (width > 768 && width <= 992){
        title.innerText = "小屏幕-"+width;
    }else if (width > 992 && width <= 1200){
        title.innerText = "中等屏幕-"+width;
    }else if (width > 1200){
        title.innerText = "大屏幕-"+width;
    }
}