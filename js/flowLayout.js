/**
 * Created by yyg on 2016/3/4.
 */

window.onload = function(){

    var mainPanels = document.getElementsByClassName("main-panel");

    for(var i in mainPanels){
        mainPanels[i].onclick = function(){
            var re = /focus/;
            if(!re.test(this.className)) {
                this.className = this.className + " focus";
                for (var j in this.children) {
                    //                    this.children[j].style.display = "block";
                    if (this.children[j].className == "cpanel") {
                        this.children[j].style.display = "block";
                    }
                }
            }else{
                this.className = "main-panel";
                for (var j in this.children) {
                    //                    this.children[j].style.display = "block";
                    if (this.children[j].className == "cpanel") {
                        this.children[j].style.display = "none";
                    }
                }
            }
        }
    }
    var wrapper = document.getElementsByClassName("wrapper");
    var innerWrapper = document.getElementsByClassName("inner-wrapper");
    wrapper[0].style.height =innerWrapper[0].offsetHeight + 56 + "px";


    (function waterfall(){
        var list = document.getElementById("leader-list");
        var wrap = document.getElementById("list-wrapper");
        var boxs = getElementsByClass(wrap , "lblock");
        var viewWidth = document.getElementById("leader-list").offsetWidth - 20; //计算视口的宽度
        var cols = Math.floor(viewWidth / 105);console.log(cols); //获取一行能存放多少个图片
        var harr = []; //存放所有的图片div


        wrap.style.cssText = "width:"+105*cols+"px;margin:0 auto";
        for(var i = 0 ; i < boxs.length ; i ++){
            if(i < cols){
                harr.push(boxs[i].offsetHeight);
            }else{
                var minHeight = getMinHeight(harr);
                var index = getIndex(harr , minHeight);
                boxs[i].style.cssText = "position:absolute";
                boxs[i].style.top = minHeight + 'px';
                boxs[i].style.left = boxs[index].offsetLeft + "px";
                harr[index] += boxs[i].offsetHeight;
            }
        }
        wrap.style.height = getMaxHeight(harr) + "px";
    })();

    function getElementsByClass(parent , className){
        var children = parent.children;
        var tempArr = new Array();

        for(var i = 0; i < children.length ; i ++){
            if(children[i].className == className){
                tempArr.push(children[i]);
            }
        }
        return tempArr;
    }

    function getMinHeight(arr){
        return Math.min.apply(null , arr);
    }
    function getMaxHeight(arr){
        return Math.max.apply(null , arr);
    }
    function getIndex(arr , val){
        for(var i in arr){
            if(arr[i] === val) return i;
        }
    }

}