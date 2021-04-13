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
    console.log(typeof inputUrl.value);
    let responseData = await getShortUrl();
    resultSlug.textContent = "Here's your slug:" + responseData.slug;
}

createUrl.addEventListener('click', displayUrl);