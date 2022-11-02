function task1() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function task2() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var divTask_2 = document.getElementById("task-1");
  
    if (dots.style.display === "none") {

        divTask_2.style.backgroundColor = "#deb887";

        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {

        divTask_2.style.backgroundColor = "#65f74f";
        
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function task3() {
    var largeImage = document.getElementById('image_LNU');
    largeImage.style.display = 'block';
    // largeImage.style.width=200+"px";
    // largeImage.style.height=200+"px";
    var url=largeImage.getAttribute('src');
    window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');


    // var image = document.getElementById("image_LNU");

    // image.style.width = 1000+"px";
    // window.open(url, 'Image', 'width=image.stylewidth,height=image.style.height,resizable=1');
}

function task4(value) {
    document.getElementById("output").innerHTML = "$" + value + " ~> " + value * 37 + " UAH";
    // alert("$" + value + " --> " + value * 37 + " UAH")

}


