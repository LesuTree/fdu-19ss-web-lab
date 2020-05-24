



/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/

/*Global Variable Area */

/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
function my$(id) {
    return document.getElementById(id);
}
var count=1;
let box = my$("box");
let wrap=box.children[0];
let buttons=box.children[1];
let prev=my$("prev");
let next=my$("next");
let spans=buttons.children;
let auto=setInterval(onMouseClickHandle,2000);
let tds=document.getElementsByTagName("td");
let inputs=new Array(12);
prev.onclick=function () {
    for (var j=0;j<buttons.children.length;j++){
        buttons.children[j].removeAttribute("class");
    }
    if (count%5===1){
        wrap.style.left=-2400+"px";
        count=5;
        buttons.children[4].className="on";
    }
   else if (count%5===0){
        wrap.style.left=-1800+"px";
        count=4;
        buttons.children[3].className="on";
    }
    else {
        wrap.style.left=-600*(count%5-2)+"px";
        count--;
        buttons.children[count-1].className="on";
    }
}
next.onclick=function () {
    for (var j=0;j<buttons.children.length;j++){
        buttons.children[j].removeAttribute("class");
    }
   if (count%5===0){
       wrap.style.left=0+"px";
       count=1;
       buttons.children[0].className="on";
   }
   else if (count%5===1){
       wrap.style.left=-600+"px";
       count=2;
       buttons.children[1].className="on";
   }
   else {
       wrap.style.left=-600*(count%5)+"px";
       count++;
       buttons.children[count-1].className="on";
   }
}






/*let inner=box.children[0];
let ulObj=inner.children[0];
let list=ulObj.children;
let buttons=box.children[1];
let right=my$("prev");
let left=my$("next");
var imgWidth=inner.offsetWidth;
var pic=0;

var timeId=setInterval(onmouseClickHandle,1000);
for (var i=0;i<list.length;i++){
    buttons.children[i].setAttribute("index",i);
}

function onmouseClickHandle() {
    if (pic == list.length-1){
        pic=0;
        ulObj.style.left=0+ "px";
    }
    pic++;

    if (pic == list.length-1){
        buttons.children[buttons.children.length-1].className="";
        buttons.children[0].className="on";
    }
    else {
        for (var j=0;j<buttons.children.length;j++){
            buttons.children[j].removeAttribute("class");
        }
        buttons.children[pic].className="on";
    }

}
right.onclick=onmouseClickHandle();
left.onclick=function () {
    if (pic==0){
        pic=list.length-1;
        ulObj.style.left=-pic*imgWidth+"px";
    }
    pic--;
    animate(ulObj,-pic*imgWidth);
    for (var j=0;j<buttons.children.length;j++){
        buttons.children[j].removeAttribute("class");
    }
    buttons.children[pic].className="on";
}*/



/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
function onMouseClickHandle() {
    for (var j=0;j<buttons.children.length;j++){
        buttons.children[j].removeAttribute("class");
    }
    if (count%5===0){
        wrap.style.left=0+"px";
        count=1;
        buttons.children[0].className="on";
    }
    else if (count%5===1){
        wrap.style.left=-600+"px";
        count=2;
        buttons.children[1].className="on";
    }
    else {
        wrap.style.left=-600*(count%5)+"px";
        count++;
        buttons.children[count-1].className="on";
    }
}
box.onmouseout=function () {
    auto=setInterval(onMouseClickHandle,2000);
}
box.onmouseover=function () {
    clearInterval(auto);
}
/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
for(let i=0;i<5;i++){
    spans[i].addEventListener("click",function () {
        spans[count%5-1].className="";
        spans[i].className="on";
        wrap.style.left=-600*i+"px";
        count=i+1;
    })
}

/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
for (let i=0;i<tds.length;i++){
    tds[i].addEventListener("click",function () {
        let tdValue = tds[i].innerText;
        tds[i].innerText = "";
        let txt = document.createElement("input");
        txt.type = "text";
        txt.value = tdValue;
        tds[i].appendChild(txt);
        txt.focus();
        inputs[i]=txt;
    },false);
    tds[i].addEventListener("focusout",function () {
        tds[i].innerText=inputs[i].value;
    },false);
}

/*********************************************end*************************************/
//设置任意的一个元素,移动到指定的目标位置
