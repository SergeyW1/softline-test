const map = document.querySelector(".map");
const mapNav = document.querySelector('.map-nav')
const regionsModal = document.querySelector('.regions')
const slidebar = document.querySelector(".slidebar");
const directBanner = document.querySelector(".directions__banner");
const bannerSize = document.querySelectorAll(".banner-size");
const bannerText = document.querySelectorAll(".banner-text");
const bannerTitle = document.querySelectorAll('.banner-text__title')
const bannerTextDescription = document.querySelectorAll(".banner-text__description");
const sliderPhoto = document.querySelectorAll(".photo-size");
const gallerySlider = document.querySelector(".gallery__slider");
const rectangleNoActive = document.querySelector(".rectangle-no-active")
const modal = document.querySelector('.modal')
const navItem = document.querySelectorAll('.nav-container__item')
const regions = document.querySelectorAll('.regions__container')
const wrapperItem = document.querySelectorAll('.item-info')
const regionToggle = document.querySelectorAll('.region-toggle')
const regionTitle = document.querySelectorAll('.region-title')
const directionsBanner = document.querySelectorAll('.directions__banner--noactive')
let dataSizeIndex;
let dataRegionIndex;
dataSet();

map.addEventListener("click", (e) => {
	let region = e.target.dataset.region
	if (e.target.classList.contains('nav-container__item')) {
		const el = document.querySelector('.nav-active')
		if (el) {
			el.classList.remove('nav-active')
		}
		e.target.classList.add('nav-active')
		regions.forEach(item => {
			item.classList.add('none')
		})
		if (region === '0') {
			regions.forEach(item => {
				item.classList.remove('none')
			})
		} else {
			regions[region - 1].classList.remove('none')
		}
	}
});

regionsModal.addEventListener('click', (e) => {
	let title = e.target.dataset.regionTitle
	if (title) {
		regionTitle[title - 1].classList.toggle('region-title__red')
		regionToggle[title - 1].classList.toggle('region-toggle__active')
	}
})


slidebar.addEventListener("click", () => {
	rectangleNoActive.classList.toggle("rectangle-active");
	modal.classList.toggle('modal-active')
	if (rectangleNoActive.classList.contains('rectangle-active')) {
		document.querySelectorAll('.nav-container__item').forEach(item => {
			if (item.classList.contains('nav-active')) {
				item.classList.remove('nav-active')
				regions.forEach(item => {
					item.classList.remove('none')
				})
			}
		})
	}
	if (modal.classList.contains('modal-active')) {
		mapNav.classList.add('overflow')
	} else {
		mapNav.classList.remove('overflow')
	}
});

directBanner.addEventListener("mouseover", (e) => {
	let data = e.target.closest(".banner-size");
	if (directBanner.clientWidth < 350) return;
	if (!data) return;
	dataSizeIndex = data.dataset.sizeIn;
	bannerText[dataSizeIndex].classList.add("banner-text__open");
	bannerTextDescription[dataSizeIndex].classList.add(
		"banner-text__description-active"
	);
});

directBanner.addEventListener("mouseout", (e) => {
	let data = e.target.closest(".banner-size");
	if (directBanner.clientWidth < 350) return;
	if (!data) return;
	dataSizeIndex = data.dataset.sizeIn;
	bannerText[dataSizeIndex].classList.remove("banner-text__open");
	bannerTextDescription[dataSizeIndex].classList.remove(
		"banner-text__description-active"
	);
});

directBanner.addEventListener('click', (e) => {
	let data = e.target.closest('.banner-size')
	if (!data) return
	dataSizeIndex = data.dataset.sizeIn
	directionsBanner[dataSizeIndex].classList.toggle('directions__banner--active')
	bannerSize[dataSizeIndex].classList.toggle('banner-size__active')
	bannerText[dataSizeIndex].classList.toggle('banner-text__active')
	bannerTitle[dataSizeIndex].classList.toggle('banner-title__active')
	bannerTextDescription[dataSizeIndex].classList.toggle('banner-text__description-active')
	if (bannerSize[dataSizeIndex].classList.contains('banner-size__active')) {
		document.querySelector('.directions').classList.add('directions__active')
	} else {
		document.querySelector('.directions').classList.remove('directions__active')
	}
})

function dataSet() {
	bannerSize.forEach((item, index) => {
		item.dataset.sizeIn = index;
	});
	sliderPhoto.forEach((item, index) => {
		item.dataset.numPhoto = index + 1;
	});
	navItem.forEach((item, index) => {
		item.dataset.region = index;
	});
	wrapperItem.forEach((item, index) => {
		item.dataset.wrapperItem = index + 1
	})
	regionTitle.forEach((item, index) => {
		item.dataset.regionTitle = index + 1
	})
}

//Slider Photo

$(".gallery-content__photo").slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: "linear",
});




