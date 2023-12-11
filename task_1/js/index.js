let rotation =0;
function img_Rotate(dg,img) {

    rotation += dg;

    const image = document.getElementById(img);
    image.style.transform = `rotate(${rotation}deg)`;

}
function img_Alert(){
alert("ALERT with href")
}
