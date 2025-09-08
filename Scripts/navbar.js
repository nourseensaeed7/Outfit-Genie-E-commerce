// nav  bar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hidesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
let submenu =document.getElementById("submenu");
function togglemenu(){
    submenu.classList.toggle("openmenu");
}