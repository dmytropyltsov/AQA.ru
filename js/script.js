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

let topicMenu = document.getElementById('topic-menu');
let topicMenuToggle = document.getElementById('topic-menu-toggle');
let topicMenuIcon = topicMenuToggle.querySelector('i');
document.getElementById('topic-menu-toggle').addEventListener('click', function() {
	topicMenuIcon.classList.toggle('bi-chevron-up');
	topicMenuIcon.classList.toggle('bi-chevron-down');
	topicMenu.classList.toggle('show');
});

document.querySelectorAll('.page-menu-toggle').forEach(toggle => {
	toggle.addEventListener('click', function(event) {
		let pageMenu = event.currentTarget.closest('.page-selector').querySelector('.page-menu');
		if (!pageMenu.classList.contains('show')) {
			closeDropdownMenus();
		}
		pageMenu.classList.toggle('show');
	});
});

document.querySelectorAll('.likes .show-more').forEach(toggle => {
	toggle.addEventListener('click', function(event) {
		event.preventDefault();
		let hiddenLikes = event.currentTarget.closest('.likes').querySelector('.hidden-likes');
		event.currentTarget.style.display = 'none';
		hiddenLikes.classList.toggle('show');
	});
});

window.onclick = function(event) {
	if (!event.target.closest('.menu-toggle')) {
		closeDropdownMenus();
	}
}