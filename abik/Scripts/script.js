window.addEventListener('DOMContentLoaded', () => {
	// Данные для перевода
	const translations = {
		ru: {
			logo: 'Abik',
			phone: '+372 5366 4448',
			email: 'info@abik.ee',
			slogan: 'Выполняем свою работу качественно, ответственно и добросовестно',
			services: 'Наши Услуги',
			all: 'Все',
			seasonal: 'Сезонные работы',
			private: 'Частный клиент',
			private2: 'Квартирное Товарищество',
			snow_removal: 'Уборка снега',
			grass_mowing: 'Покос травы',
			leaf_removal: 'Уборка и вывоз листвы',
			roof_snow_removal: 'Очистка крыши от снега',
			plumbing: 'Сантехник',
			electrician: 'Электрик',
			furniture_repair: 'Ремонт мебели',
			carpenter: 'Столяр',
			woodwork: 'Плотник',
			minor_repairs: 'Мелкий бытовой ремонт',
			window_repair: 'Ремонт окон',
			apartment_cleaning: 'Уборка квартир',
			furniture_assembly: 'Сборка мебели',
			yard_cleaning: 'Уборка территории',
			trash_removal: 'Вывоз мусора',
			ventilation_repair: 'Ремонт системы вентиляции',
			landscaping: 'Озеленение территории',
			grass_mowing_private: 'Покос территории',
			plumbing_work: 'Сантехнические работы',
			electrician_services: 'Услуги электрика',
			gallery: 'Галерея',
			feedback: 'Обратная связь',
			submit: 'Отправить',
			phone_footer: '+372 5366 4448',
			email_footer: 'info@abik.ee',
		},
		ee: {
			logo: 'Abik',
			phone: '+372 5366 4448',
			email: 'info@abik.ee',
			slogan: 'Teeme oma tööd kvaliteetselt, vastutustundlikult ja hoolikalt',
			services: 'Meie teenused',
			all: 'Kõik',
			seasonal: 'Hooajatööd',
			private: 'Eraettevõtted',
			private2: 'korteriühistu',
			snow_removal: 'Lumetõrje',
			grass_mowing: 'Muru niitmine',
			leaf_removal: 'Lehtede koristamine ja äraveo',
			roof_snow_removal: 'Katuse lumetõrje',
			plumbing: 'Sanitaartehnik',
			electrician: 'Elektrik',
			furniture_repair: 'Mööbli remont',
			carpenter: 'Puidutööd',
			woodwork: 'Puitmaterjalide töötlemine',
			minor_repairs: 'Väikesed koduremondid',
			window_repair: 'Aken remont',
			apartment_cleaning: 'Korterite koristamine',
			furniture_assembly: 'Mööbli kokkupanek',
			yard_cleaning: 'Aia puhastus',
			trash_removal: 'Jäätmete eemaldamine',
			ventilation_repair: 'Ventilatsioonisüsteemi remont',
			landscaping: 'Maastiku kujundamine',
			grass_mowing_private: 'Territooriumi niitmine',
			plumbing_work: 'Sanitaartehnilised tööd',
			electrician_services: 'Elektriku teenused',
			gallery: 'Galerii',
			feedback: 'Tagasiside',
			submit: 'Saada',
			phone_footer: '+372 5366 4448',
			email_footer: 'info@abik.ee',
		},
	}

	// Функция для переключения языка
	function switchLanguage(language) {
		const elements = document.querySelectorAll('[data-translate]')
		elements.forEach(el => {
			const key = el.getAttribute('data-translate')
			if (translations[language] && translations[language][key]) {
				el.textContent = translations[language][key]
			}
		})

		// Перевод услуг
		const serviceItems = document.querySelectorAll('.service-item')
		serviceItems.forEach(item => {
			const serviceKey = item.getAttribute('data-service-key')
			if (translations[language] && translations[language][serviceKey]) {
				item.querySelector('h3').textContent =
					translations[language][serviceKey]
			}
		})
	}

	// Переключение языка
	document
		.getElementById('lang-ru')
		.addEventListener('click', () => switchLanguage('ru'))
	document
		.getElementById('lang-ee')
		.addEventListener('click', () => switchLanguage('ee'))

	// Загрузка услуг
	const servicesList = document.querySelector('.services-list')
	const services = [
		{ name: 'snow_removal', category: 'seasonal', price: '50 €' },
		{ name: 'grass_mowing', category: 'seasonal', price: '30 €' },
		{ name: 'leaf_removal', category: 'seasonal', price: '35 €' },
		{ name: 'roof_snow_removal', category: 'seasonal', price: '100 €' },
		{ name: 'plumbing', category: 'private', price: '40 €' },
		{ name: 'electrician', category: 'private', price: '50 €' },
		{ name: 'furniture_repair', category: 'private', price: '20 €' },
		{ name: 'carpenter', category: 'private', price: '30 €' },
		{ name: 'woodwork', category: 'private', price: '30 €' },
		{ name: 'minor_repairs', category: 'private', price: '25 €' },
		{ name: 'window_repair', category: 'private', price: '40 €' },
		{ name: 'apartment_cleaning', category: 'private', price: '40 €' },
		{ name: 'furniture_assembly', category: 'private', price: '35 €' },
		{ name: 'yard_cleaning', category: 'private2', price: '50 €' },
		{ name: 'trash_removal', category: 'private', price: '45 €' },
		{ name: 'ventilation_repair', category: 'private2', price: '70 €' },
		{ name: 'landscaping', category: 'private2', price: '80 €' },
		{ name: 'grass_mowing_private', category: 'private2', price: '30 €' },
		{ name: 'plumbing_work', category: 'private2', price: '40 €' },
		{ name: 'electrician_services', category: 'private2', price: '50 €' },
	]

	services.forEach(service => {
		const serviceItem = document.createElement('div')
		serviceItem.classList.add('service-item')
		serviceItem.setAttribute('data-category', service.category)
		serviceItem.setAttribute('data-service-key', service.name)
		serviceItem.innerHTML = `
            <h3>${translations.ru[service.name]}</h3>
            <p>Цена: ${service.price}</p>
        `
		servicesList.appendChild(serviceItem)
	})

	// Фильтрация услуг
	const filterButtons = document.querySelectorAll('.filter button')
	filterButtons.forEach(button => {
		button.addEventListener('click', () => {
			const filter = button.getAttribute('data-filter')
			filterButtons.forEach(btn => btn.classList.remove('active'))
			button.classList.add('active')

			const serviceItems = document.querySelectorAll('.service-item')
			serviceItems.forEach(item => {
				if (filter === 'all' || item.getAttribute('data-category') === filter) {
					item.style.display = 'block'
				} else {
					item.style.display = 'none'
				}
			})
		})
	})

	// Загрузка изображений в галерею
	const gallery = document.getElementById('gallery')
	fetch('get-images.php')
		.then(response => response.json())
		.then(images => {
			images.forEach(image => {
				const img = document.createElement('img')
				img.src = `gallery/${image}`
				img.alt = 'Gallery Image'
				gallery.querySelector('.gallery-grid').appendChild(img)
			})
		})
		.catch(error => console.error('Error loading images:', error))

	// Обработка отправки формы обратной связи
	const feedbackForm = document.getElementById('feedback-form')
	feedbackForm.addEventListener('submit', async e => {
		e.preventDefault()

		const formData = new FormData(feedbackForm)
		const data = Object.fromEntries(formData.entries())

		try {
			const response = await fetch('send-feedback.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})

			if (response.ok) {
				alert('Ваше сообщение отправлено!')
				feedbackForm.reset()
			} else {
				alert('Произошла ошибка при отправке сообщения. Попробуйте позже.')
			}
		} catch (error) {
			console.error('Error submitting form:', error)
			alert(
				'Не удалось отправить сообщение. Проверьте соединение с интернетом.'
			)
		}
	})
})
