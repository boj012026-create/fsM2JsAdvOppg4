import axios from 'axios';

const baseUrl =	"https://api.adviceslip.com/advice";

export async function adviceApi() {
	const response = await axios.get(baseUrl);
	//console.log(response.data.slip.advice);
	return response.data.slip.advice;
}

