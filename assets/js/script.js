// var date = new Date();
// var year = date.getFullYear();
// document.getElementById('year').innerHTML = year;
const nav = document.querySelector('nav');
const blurDiv = document.querySelector('span.blur');
window.addEventListener('scroll', e => {
	if (window.scrollY > 100) nav.style.backgroundColor = 'rgba(255, 255, 255, .7)';
	else nav.style.backgroundColor = 'transparent';
});

const menuBtn = document.querySelector('div.menu-btn');
const navItems = document.querySelector('div.nav__items');
menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	navItems.classList.toggle('open');
	blurDiv.classList.toggle('open');
});

const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline
	.from('main header h1', { y: '-50%', opacity: 0 });

const floatingBtn = document.querySelector('main .header div .floating');
floatingBtn.addEventListener('click', e => {
	window.scrollTo(0 , e.screenY);
});

const icon = document.querySelector('nav .nav__icon');
icon.addEventListener('click', e => {
	window.scrollTo(0 , 0);
});
