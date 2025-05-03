WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function() {
	// Equipment slider
	const equipmentSliders = [],
		equipment = document.querySelectorAll('.equipment .swiper')

	equipment.forEach((el, i) => {
		el.classList.add('equipment_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1600: {
					spaceBetween: 30,
					slidesPerView: 3
				}
			}
		}

		equipmentSliders.push(new Swiper('.equipment_s' + i, options))
	})


	// Articles slider
	const articlesSliders = [],
		articles = document.querySelectorAll('.articles .swiper')

	articles.forEach((el, i) => {
		el.classList.add('articles_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1600: {
					spaceBetween: 30,
					slidesPerView: 3
				}
			}
		}

		articlesSliders.push(new Swiper('.articles_s' + i, options))
	})


	// Text slider
	const textSliders = [],
		textSlider = document.querySelectorAll('.text_block .slider .swiper')

	textSlider.forEach((el, i) => {
		el.classList.add('text_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}

		textSliders.push(new Swiper('.text_s' + i, options))
	})


	// Menu
	$('header .menu_item > a.sub_link').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		if ($(this).hasClass('active')) {
			$(this).next().addClass('show')

			$('.overlay').fadeIn(200)
		} else {
			$(this).next().removeClass('show')

			$('.overlay').fadeOut(100)
		}
	})


	$('.overlay').click(function(e) {
		e.preventDefault()

		$('header .menu_item > a.sub_link').removeClass('active')

		$('header .sub_menu').removeClass('show')
		$('.overlay').fadeOut(100)
	})


	// Search
	$('header .search .btn, header .search .close_btn').click(function(e) {
		e.preventDefault()

		$('header .search .btn').toggleClass('active')
		$('header .menu, header .phone').toggleClass('hide')
		$('header .search form').toggleClass('show')

		if ($('header .search .btn').hasClass('active')) {
			setTimeout(() => $('header .search .input').focus(), 300)
		}
	})


	$(document).click(e => {
		if ($(e.target).closest('.search').length === 0) {
			$('header .search .btn').removeClass('active')
			$('header .menu, header .phone').removeClass('hide')
			$('header .search form').removeClass('show')
		}
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Select file
	const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => el.closest('.file').querySelector('label span').innerText = el.value)
		})
	}


	// Contacts info - Maps
	$('.contacts_info .item').click(function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const mapIndex = $(this).data('map-index')

			$('.contacts_info .item').removeClass('active')
			$(this).addClass('active')

			$('.contacts_info .map').hide()
			$('.contacts_info .map' + mapIndex).fadeIn(300)

			initMap(mapIndex)
		}
	})


	// Product info
	$('.product_info .head .title').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.product_info .head .data').slideToggle(300)
	})


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))

			if (el.querySelector('option[selected]')) {
				el.classList.add('selected')
			}
		})
	}


	// Download files
	$('.download_files .item .name').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})

	$('.download_files .item select[name="chapter"]').change(function(e) {
		const form = $(this).closest('.form')

		form.find('select[name="equipment"]').removeAttr('disabled')
		form.find('.nice-select.disabled').removeClass('disabled')
	})


	// Category
	$('.category_info .item .head').click(function(e) {
		e.preventDefault()

		const item = $(this).closest('.item')

		item.toggleClass('open')
		item.find('.data').slideToggle(300)
	})


	// Mob. menu button
	$('header .mob_menu_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('header .menu').toggleClass('show')
	})
})



window.addEventListener('load', function () {
	// Aligning elements in the grid
	document.querySelectorAll('.articles .row').forEach(el => {
		let styles = getComputedStyle(el)

		articlesHeight(el, parseInt(styles.getPropertyValue('--count')))
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth

		// Aligning elements in the grid
		document.querySelectorAll('.articles .row').forEach(el => {
			let styles = getComputedStyle(el)

			articlesHeight(el, parseInt(styles.getPropertyValue('--count')))
		})

		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Aligning articles
function articlesHeight(context, step) {
	let start = 0,
		finish = step,
		items = [...context.querySelectorAll('.article')],
		itemsName = context.querySelectorAll('.name'),
		i = 0

	itemsName.forEach(el => el.style.height = 'auto')

	items.forEach(el => {
		items.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .name'))

		start = start + step
		finish = finish + step
		i++
	})
}



// Init maps
function initMap(mapIndex) {
	if (!$('#map' + mapIndex).hasClass('initialized')) {
		const placemarks = [
			{
				center: [55.843373, 37.526115],
				balloonContent: String() + '<div class="logo">'
						+ '<img src="../images/logo.svg" alt="">'
					+ '</div>'

					+ '<div class="name">ЦЕНТРАЛЬНЫЙ ОФИС</div>',
				balloonOffset: [-10, -24]
			},
			{
				center: [55.516700, 36.970085],
				balloonContent: String() + '<div class="logo">'
						+ '<img src="../images/logo.svg" alt="">'
					+ '</div>'

					+ '<div class="name">Производство</div>',
				balloonOffset: [-10, -24]
			}
		]

		ymaps.ready(() => {
			let myMap = new ymaps.Map('map' + mapIndex, {
				center: placemarks[mapIndex - 1].center,
				zoom: 16,
				controls: []
			})

			// Кастомный маркер
			const myPlacemark = new ymaps.Placemark(placemarks[mapIndex - 1].center, {
				balloonContent: placemarks[mapIndex - 1].balloonContent
			}, {
				hideIconOnBalloonOpen: true,
				balloonShadow: false,
				balloonOffset: placemarks[mapIndex - 1].balloonOffset
			})

			myMap.geoObjects.add(myPlacemark)

			// myMap.controls.add('zoomControl', {
			// 	position : {
			// 		right : '20px',
			// 		top   : '20px'
			// 	}
			// })

			myMap.behaviors.disable('scrollZoom')
			myPlacemark.balloon.open()

			$('#map' + mapIndex).addClass('initialized')
		})
	}
}