 function onStart(){
    
}

function fetchUrl(newstr){
    let url = "https://api.eios.nl/shortLinks/" + newstr;
    return fetch(url).then(
        response => response.json()
    )
}

