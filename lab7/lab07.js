const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
var contain=document.querySelector(".flex-container");
window.onclick=function () {
    for (let i=0;i<4;i++) {
        //添加最外层的div
        var item = document.createElement("div");
        item.className = "item";


        //添加h3元素
        var h3Gene=document.createElement("h3");
        h3Gene.innerText="Gene: "+works[i].tips;
        item.appendChild(h3Gene);

        //添加inner-box的div元素
        var innerItem1=document.createElement("div");
        innerItem1.className = "inner-box";

        //添加author的h3元素
        var h3Author = document.createElement("h3");
        h3Author.innerText=works[i].author;
        h3Author.style.display="inline";
        innerItem1.appendChild(h3Author);

        //添加lifeTime的h5元素
        var h5Lifetime=document.createElement("h5");
        h5Lifetime.innerText = "Lifetime:"+works[i].lifetime;
        h5Lifetime.style.display="inline";
        h5Lifetime.style.marginLeft="1em";
        innerItem1.appendChild(h5Lifetime);

        item.appendChild(innerItem1);
        //添加inner-box的div2元素
        var innerItem2=document.createElement("div");
        innerItem2.className = "inner-box";

        //添加Pictures的h3元素
        var h3Pictures=document.createElement("h3");
        h3Pictures.innerText="Popular pictures";
        innerItem2.appendChild(h3Pictures);

        //添加pictures
        for (var j=0;j<works[i].photos.length;j++){
            var img=document.createElement("img");
            img.src="./"+works[i].photos[j];
            img.className="photo";
            innerItem2.appendChild(img);
        }

        item.appendChild(innerItem2);

        //添加button元素
        var button=document.createElement("button");
        button.innerText="Visit";
        item.appendChild(button);


        contain.appendChild(item);

    }
}