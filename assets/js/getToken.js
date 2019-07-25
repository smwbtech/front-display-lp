import axios from 'axios'
import config from '@/config.js'

/**
 * Получение токена авторизации
 * nnz api
 * @async
 * @return {string} - токен авторизации nnz API
 */
export async function getToken() {
	const apiResponse = await axios.get(
		`${config.host}/auth/token/${config.login}`,
		{
			headers: {
				Authorization: `Bearer ${config.password}`
			}
		}
	)
	if (apiResponse.status === 200) {
		const { data, status, error } = apiResponse.data
		if (status) {
			return data.token
		} else {
			console.error(error)
		}
	} else {
		console.error('error in getToken()')
	}
}
