let mainMenu = document.getElementById('main-menu');

document.getElementById('main-menu-toggle').addEventListener('click', function() {
    mainMenu.classList.toggle('show');
});

window.onclick = function(event) {
    if (!event.target.closest('.menu-toggle')) {
        let dropdownMenus = document.getElementsByClassName('dropdown-menu');
        for (let i = 0; i < dropdownMenus.length; ++i) {
            if (dropdownMenus[i].classList.contains('show')) {
                dropdownMenus[i].classList.remove('show');
            }
        }
    }
}