import axios from 'axios'
import config from '@/config.js'

const SECTION_ID = 297677 // id секции FRONT DISPLAY

/**
 * Получения списка товаров из заданного раздела
 * каталога сайта nnz-ipc.ru
 * @async
 * @param  {string} token - токен доступа к API
 * @return {array}        - массив c объектами товаров
 */
export async function getItems(token) {
	const apiResponse = await axios.get(
		`${config.host}/api/v1/get/items/from?id_list=${SECTION_ID}`,
		{
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	)
	if (apiResponse.status === 200) {
		const { status, data, error } = apiResponse.data
		if (status) {
			return data
		} else {
			console.error(error)
		}
	} else {
		console.error('error in getItems()')
	}
}
