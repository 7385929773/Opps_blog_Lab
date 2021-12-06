class Blog {
    constructor(title, detail) {
        this.title=title;
        this.detail=detail;
        this.addTitle();
        this.addDescription();
    }


 addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute("id", "blog-title");
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
}

 addDescription() {
    var discription_card = document.createElement('p');
    discription_card.setAttribute("id", "blog-title");
    console.log(discription_card);
    document.getElementById('card-text').appendChild(discription_card);
    discription_card.innerHTML += this.datail;

}
}
var btn = document.getElementById("addBlog");
btn.addEventListener("click", ()=>{
    document.getElementById("popupContact").style.display = "block";
})
var btn1 = document.getElementById("post");
btn1.addEventListener("click", ()=>{
    document.getElementById("popupContact").style.display = "none";
    var img = document.createElement("img");
    img.setAttribute("src","./assets/javascript.png");
    document.getElementById("card-text").appendChild(img);
    var title = document.getElementById("title").value;
    var detail = document.getElementById("detail").value;
    var blog = new Blog(title, detail);
})
