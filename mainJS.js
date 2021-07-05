function toggleMenu(){
  let menu = document.getElementById('toggle-menu');
  if(menu.style.display != "none"){
    menu.style.display = "none";
  }else{
    menu.style.display = "flex";
  }
}