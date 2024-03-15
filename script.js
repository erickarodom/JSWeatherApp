let farenhiet = document.getElementById("temp-farenhiet");
async function myFunction(){
    // const url = 'https://open-weather13.p.rapidapi.com/city/tacoma';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd813b7fc12msh64c9c8d32de2945p1e5955jsnb3c8d0f5e629',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        let result = await response.text();
        result = JSON.parse(result);
        console.log(result);
        console.log(result.weather[0].description);
        let currentTemp =  Math.round(result.main.temp);
        
        farenhiet.innerHTML = `${currentTemp}<span>&#x2109</span>`;

    } catch (error) {
        console.error(error);
    }
}

myFunction();