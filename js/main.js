const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const allNavItems = document.querySelectorAll(`.nav__link`);
const footerYear = document.querySelector('.footer__year ');
const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	// solving bug with navigation

	allNavItems.forEach((item) =>
		item.addEventListener('click', () =>
			navMobile.classList.remove('nav-mobile--active')
		)
	);
	allNavItems.forEach((item) =>
		item.addEventListener('click', () => navBtn.classList.remove('is-active'))
	);
};

navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
