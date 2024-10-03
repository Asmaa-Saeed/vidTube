var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");


menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

const SubscribedBtn = document.getElementById('subBtn');
SubscribedBtn.addEventListener('click', () => {
    SubscribedBtn.innerHTML = 'Subscribed';
});