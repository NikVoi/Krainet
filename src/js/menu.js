document.addEventListener('DOMContentLoaded', () => {
	const asideMenu = document.querySelector('.aside__menu')
	const openButton = document.querySelector('.hamburger')
	const closeButton = document.querySelector('.close')
	const body = document.body

	openButton.addEventListener('click', () => {
		asideMenu.classList.add('active')
		body.style.overflow = 'hidden'
	})

	closeButton.addEventListener('click', () => {
		asideMenu.classList.remove('active')
		body.style.overflow = ''
	})
})
