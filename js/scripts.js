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
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 30,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 30,
					slidesPerView: 3
				}
			}
		}

		equipmentSliders.push(new Swiper('.equipment_s' + i, options))
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
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


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