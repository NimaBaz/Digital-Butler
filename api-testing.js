var url =  'https://hlabsdemos.com:8080/auth_svc/get_user_info?userid=nico@holisticlabs.net';

fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log(data);
    })

const url2 = 'https://hlabsdemos.com:8082/webapp/topology';
// The data we are going to send in our request
let data = {"homeid":"44ddfbdc50b7000001","timestamp":1512187048986};

// let test_header = new Headers();

// The parameters we are gonna pass to the fetch function
let fetchData = { 
    method: 'POST', 
    body: data,
    headers: new Headers({
    	'content-type': 'application/json'
    })
}


fetch(url2, fetchData)
 .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log(data);
    })