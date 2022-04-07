/** @format */

let checkMenu = false;
let nutmenu = document.getElementsByClassName("nutchucnang");
function hienThiMenu() {
  for (var i = 0; i < nutmenu.length; i++) {
    if (checkMenu) {
      leftHien(i);
      console.log(true);
    } else {
      leftAn(i);
      console.log(false);
    }
  }
  checkMenu = !checkMenu;
}
function changeMenu(){
  let change = document.getElementById("buttonchinh");
  if(checkMenu){
    change.className = 'fas fa-bars';
  }else{
      change.className = 'fas fa-times';
      console.log(1);
  }
}

function leftHien(i) {
  nutmenu[i].style = "left: -5px";
}
function leftAn(i) {
  nutmenu[i].style = "left: -200px";
}
hienThiMenu();
changeMenu();
