const url = 'https://menu7.p.rapidapi.com/menu-api/api/manage-locks/%7Block%7D';
const options = {
	method: 'DELETE',
	headers: {
		Authorization: '<REQUIRED>',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'menu7.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}