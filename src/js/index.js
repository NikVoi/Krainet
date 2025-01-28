document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form')
	const nameInput = form.querySelector('input[type="text"]')
	const emailInput = form.querySelector('input[type="email"]')
	const messageInput = form.querySelector('textarea')

	function showError(input, message) {
		let error = input.nextElementSibling
		if (!error || !error.classList.contains('error-message')) {
			error = document.createElement('div')
			error.className = 'error-message'
			input.parentElement.appendChild(error)
		}
		error.textContent = message
		input.classList.add('error')
	}

	function clearError(input) {
		const error = input.nextElementSibling
		if (error && error.classList.contains('error-message')) {
			error.remove()
		}
		input.classList.remove('error')
	}

	function validateForm() {
		let isValid = true

		if (nameInput.value.trim() === '') {
			showError(nameInput, 'Имя не может быть пустым')
			isValid = false
		} else {
			clearError(nameInput)
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!emailRegex.test(emailInput.value.trim())) {
			showError(emailInput, 'Введите корректный email')
			isValid = false
		} else {
			clearError(emailInput)
		}

		if (messageInput.value.trim() === '') {
			showError(messageInput, 'Сообщение не может быть пустым')
			isValid = false
		} else {
			clearError(messageInput)
		}

		return isValid
	}

	async function sendData(data) {
		console.log(data)
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				}
			)

			if (!response.ok) {
				throw new Error('Ошибка при отправке данных')
			}

			alert('Сообщение успешно отправлено!')
			form.reset()
		} catch (error) {
			alert('Произошла ошибка. Попробуйте снова.')
			console.error(error)
		}
	}

	form.addEventListener('submit', e => {
		e.preventDefault()
		if (validateForm()) {
			const formData = {
				name: nameInput.value.trim(),
				email: emailInput.value.trim(),
				message: messageInput.value.trim(),
			}
			sendData(formData)
		}
	})
})
