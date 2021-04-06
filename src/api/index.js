export const getCountries = () => {
    return fetch(
        "https://restcountries.eu/rest/v2/all"
    )
    
    .then(res => res.json())
    .then(res => console.log(res))
}

export const getCountry = (name) => {
    return fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
    )
    .then(res => res.json())
}