let inputUrl = document.getElementById('user-input');
let createUrl = document.getElementById('btn-submit');
let resultSlug = document.getElementById('result-tag');

let BASE_URL = "https://api.eios.nl/shortLinks";

function getShortUrl(){
    let data = {
        "longUrl": inputUrl.value
    }

    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then( response => {
        return response.json();
    });
}

async function displayUrl(){
    let responseData = await getShortUrl();
    resultSlug.textContent = "Here's your slug:" + responseData.slug;
    let key = responseData.slug;

    let allEntries = JSON.parse(localStorage.getItem("entries"));
    let newEntries = {...allEntries}
    console.log(newEntries);
    newEntries[key] = inputUrl.value;


    
    localStorage.setItem("entries", JSON.stringify(newEntries));
}

createUrl.addEventListener('click', displayUrl);