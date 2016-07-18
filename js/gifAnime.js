function ChangeImg() {
 if(document.images) {
  eval("document."+ChangeImg.arguments[0]+
  ".src=('"+ChangeImg.arguments[1]+"')");
 }
}

function preload() {
  if (document.images) {
    var imgsrc = preload.arguments;
    arr=new Array(imgsrc.length);
    for (var j=0; j<imgsrc.length; j++) {
      arr[j] = new Image;
      arr[j].src = imgsrc[j];
    }
  }
}
