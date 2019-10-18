import axios from 'axios'

/**
 * Получить курсы валют на сегодняшнее число
 * @return {Object||null} - в случае успешного ответа api вернет объект курсов валют
 */
export async function getCurrency() {
	const apiResponse = await axios.get(
		'https://www.cbr-xml-daily.ru/daily_json.js'
	)
	if (apiResponse.status === 200) {
		return apiResponse.data
	} else {
		return null
	}
}
