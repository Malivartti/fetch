const serverUrlgender = 'https://api.genderize.io';
const serverUrlcountry = 'https://api.nationalize.io'
const responseGender = document.querySelector('.gender')
const responseCounries = document.querySelector('.countries')
const inputBtn = document.querySelector('.input')


document.querySelector('.form').onsubmit = function() {
	const firstName = inputBtn.value;
	const url = `${serverUrlgender}?name=${firstName}`;
	const url2 = `${serverUrlcountry}?name=${firstName}`

	fetch(url)
	.then(response => response.json())
	.then(res => responseGender.textContent = 'gender: ' + firstName + ' is ' + res.gender)
	fetch(url2)

	.then(response => response.json())
	.then(res => responseCounries.textContent =  res.country.map(item => item.country_id).join(', ') + ' - country codes from where it can be')
	inputBtn.value = ''
	return false
}