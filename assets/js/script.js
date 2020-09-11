const nav = document.querySelector('nav');
const blurDiv = document.querySelector('span.blur');
const toTopBtn = document.querySelector('main main.content div.toTopBtn');
const sideImages = document.querySelectorAll('.side_images img');
const travelLog = document.querySelector('#travel-log');
const amazonClone = document.querySelector('#amazon-clone');
const realestate = document.querySelector('#realestate');
const covidTracker = document.querySelector('#covid-tracker');
const netflixCone = document.querySelector('#netflix-clone');
const yelpClone = document.querySelector('#yelp-clone');
const projectImages = [travelLog, amazonClone, realestate, covidTracker, netflixCone, yelpClone];
const menuBtn = document.querySelector('div.menu-btn');
const navItems = document.querySelector('div.nav__items');
const navItem = document.querySelectorAll('a.nav__item');
const floatingBtn = document.querySelector('main .header div .floating');
const icon = document.querySelector('nav .nav__icon');
const react = document.getElementById('react');
const node = document.getElementById('node');
const django = document.getElementById('django');
const filters = document.querySelectorAll('.category');
const projects = document.querySelectorAll('.project');

window.addEventListener('scroll', (e) => {
	if (window.scrollY > 100) nav.style.backgroundColor = 'rgba(255, 255, 255, .7)';
	else nav.style.backgroundColor = 'transparent';
	if (window.scrollY >= window.innerHeight) {
		toTopBtn.style.opacity = '1';
		toTopBtn.style.transform = 'scale(1)';
	} else {
		toTopBtn.style.opacity = '0';
		toTopBtn.style.transform = 'scale(0)';
	}
});

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	navItems.classList.toggle('open');
	blurDiv.classList.toggle('open');
	navItem.forEach((item) => {
		item.addEventListener('click', () => {
			menuBtn.classList.remove('open');
			navItems.classList.remove('open');
			blurDiv.classList.remove('open');
		});
	});
});

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
	.from('main .header h1', { y: '-50%', opacity: 0 })
	.from('a.nav__item', { opacity: 0, stagger: 0.5 }, '<.3')
	.from('main .header > div', { y: '50%', opacity: 0 }, 0);

floatingBtn.addEventListener('click', (e) => {
	window.scrollTo(0, window.innerHeight);
});

const scrollToTop = element => {
	element.addEventListener('click', (e) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});
};
scrollToTop(icon);
scrollToTop(toTopBtn);

filters.forEach((filter) => {
	filter.addEventListener('click', () => {
		filters.forEach((filter) => {
			filter.classList.remove('active');
		});
		filter.classList.add('active');
		let values = filter.innerText.toLowerCase();
		projects.forEach((project) => {
			project.style.display = 'none';
			if (
				project.getAttribute('data-skill') === values ||
				project.getAttribute('data-skill2') === values ||
				values === 'all'
			) {
				project.style.display = 'flex';
			}
		});
	});
});

sideImages.forEach((img) => {
	img.addEventListener('click', (e) => {
		const biggerImageSrc = e.target.getAttribute('src');
		const biggerImageid = e.target.getAttribute('data-bigger');
		projectImages.forEach(projectImg => {
			const projectImgId = projectImg.getAttribute('id');
			if (biggerImageid === projectImgId) projectImg.setAttribute('src', biggerImageSrc);
		});
	});
});
