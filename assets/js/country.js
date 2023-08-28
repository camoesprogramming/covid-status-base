const configCountryList = {
  "accept": "application/json",
  "X-CSRF-TOKEN": ""
}

const CountryListBaseURL = "https://covid-api.com/api/regions?per_page="

const ArrayOfCountrys = []

const promise = axios.get(CountryListBaseURL, configCountryList)
promise.then((response) => {
  
 (response.data.data).forEach(element => {
  ArrayOfCountrys.push(element.name)
 });
 ArrayOfCountrys.sort();
 
 populateSelectCountryList(ArrayOfCountrys);
 
})

function populateSelectCountryList (array) {
  const catchSelectCountry = document.getElementById("cmbCountry");
  array.forEach(element => {
    catchSelectCountry.innerHTML += `
    <option value="${element}">${element}</option>
    `
   }) 
}

