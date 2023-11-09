function closeDropdownMenus() {
	let dropdownMenus = document.getElementsByClassName('dropdown-menu');
	for (let i = 0; i < dropdownMenus.length; ++i) {
		if (dropdownMenus[i].classList.contains('show')) {
			dropdownMenus[i].classList.remove('show');
		}
	}
}

let mainMenu = document.getElementById('main-menu');
document.getElementById('main-menu-toggle').addEventListener('click', function() {
	if (!mainMenu.classList.contains('show')) {
		closeDropdownMenus();
	}
	mainMenu.classList.toggle('show');
});

let userMenu = document.getElementById('user-menu');
document.getElementById('user-menu-toggle').addEventListener('click', function() {
	if (!userMenu.classList.contains('show')) {
		closeDropdownMenus();
	}
	userMenu.classList.toggle('show');
});

window.onclick = function(event) {
	if (!event.target.closest('.menu-toggle')) {
		closeDropdownMenus();
	}
}