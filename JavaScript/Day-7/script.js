//1.Solving problems using array functions on the rest countries' data 
//a.Get all the countries from the Asia continent /region using the Filter function

//1st step : create a XHR object
//2nd step: API URL
//.open method
//2 parameters
//3rd step : establishing the bridge
//4th step : once the data sucessfully received from server
//onload is an event
//when we use :  once the data / server is showing 200 sataus code
var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");

xhr.send();

xhr.onload=function(){
    var result=JSON.parse(xhr.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(result);
}
//_________________________________________________________

//b.Get all the countries with a population of less than 2 lakhs using Filter function

//1st step : create a XHR object
var request1 = new XMLHttpRequest();

request1.open("GET","https://restcountries.com/v2/all");

request1.send();

request1.onload=function(){
    var result1=JSON.parse(request1.response);
    const pop = result1.filter((countryData)=>{
        return countryData.population<200000;
    })
console.log(pop);}
//______________________________________________________

//c.Print the following details name, capital, flag using forEach function

var requestt = new XMLHttpRequest();

requestt.open("GET","https://restcountries.com/v2/all");

requestt.send();

requestt.onload=function(){
    var resultt=JSON.parse(requestt.response);
   resultt.forEach(countryData => {
    console.log(countryData.name);
        console.log(countryData.capital);
        console.log(countryData.flag); 

   });
}
//_________________________________________________________

//d.Print the total population of countries using reduce function

var reques = new XMLHttpRequest();

reques.open("GET","https://restcountries.com/v2/all");

reques.send();

reques.onload=function(){
    var resul=JSON.parse(reques.response);
    var total = resul.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
 
}
//_________________________________________________________

//e.Print the country which uses US Dollars as currency

var req = new XMLHttpRequest();

req.open("GET","https://restcountries.com/v2/all");

req.send();

req.onload=function(){
    var res=JSON.parse(req.response);
   var currency = res.filter((countryData) => {
     for(let key in countryData.currencies){
        if(countryData.currencies[key].code === "USD"){
            return countryData;
        }
     }
   })
        console.log(currency);
    }
