const API = 'https://api.covidtracking.com/v1/states/info.json';
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
      
      const xhttp = new XMLHttpRequest();
      xhttp.open('GET', url_api, true);
      xhttp.onreadystatechange = (() => {
          if(xhttp.readyState === 4){
              (xhttp.status === 200)
                  ? resolve(JSON.parse(xhttp.responseText))
                  : reject(new Error('Error', url_api))
          }
      });
      xhttp.send();
  });
}

const anotherFunction = async () => {
    try{
      const data = await fetchData(API);
      const datos = await data[0].name;
console.log(datos)

    }catch (error){
        console.error(error)
    }
}

anotherFunction();
