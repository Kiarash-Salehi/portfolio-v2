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
const navItem = document.querySelectorAll('a.nav__item');
menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	navItems.classList.toggle('open');
	blurDiv.classList.toggle('open');
	navItem.forEach(item => {
		item.addEventListener('click', () => {
			menuBtn.classList.remove('open');
			navItems.classList.remove('open');
			blurDiv.classList.remove('open');
	});});
});

const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline
	.from('main .header h1', { y: '-50%', opacity: 0 })
	.from('a.nav__item', { opacity: 0, stagger: 0.5 }, '<.3')
	.from('main .header > div', { y: '50%', opacity: 0 }, 0);

const floatingBtn = document.querySelector('main .header div .floating');
floatingBtn.addEventListener('click', e => {
	window.scrollTo(0, window.innerHeight);
});

const icon = document.querySelector('nav .nav__icon');
icon.addEventListener('click', e => {
	window.scrollTo(0, 0);
});


const react = document.getElementById('react');
const node = document.getElementById('node');
const django = document.getElementById('django');

const filters = document.querySelectorAll('.category');

const projects = document.querySelectorAll('.project');

filters.forEach(filter => {
	filter.addEventListener('click', () => {
		filters.forEach(filter => { filter.classList.remove('active'); });
		filter.classList.add('active');
		let values = filter.innerText.toLowerCase();
		projects.forEach(project => {
			project.style.display = 'none';
			if (project.getAttribute('data-skill') === values || project.getAttribute('data-skill2') === values || values === 'all') {
				project.style.display = 'flex';
			}
		});
	});
});