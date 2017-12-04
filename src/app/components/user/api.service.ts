import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
   	role: string = 'test';
   	webappRoot: string = 'https://hlabsdemos.com:8082/webapp/';
	core_svcRoot: string = 'https://hlabsdemos.com:9001/core_svc/';
	vcks_svcRoot: string = 'https://hlabsdemos.com:8099/vcks_svcs/';
	offer_svcRoot: string = 'https://hlabsdemos.com:8112/offer_svc/';
	user_auth: string = 'https://hlabsdemos.com:8080/auth_svc/get_user_info?userid=nico@holisticlabs.net';
   	
	constructor(){
		
   }

   testAPI(){
   	// let apiData = 'none';
   	console.log("testing");
   	return fetch(this.user_auth)
  	.then((resp) => resp.json()) // Transform the data into json
  	.then(function(data) {
  		// console.log(data);
    	// apiData = data;
    	return data;
    })

   }

   deviceCareAPI(){
   	let deviceCareUrl = 'home/api?func=digitalhome_service&action=retrieve';
   	console.log("deviceCare testing");

	let payload = {
    	userid: "nico@holisticlabs.net",
		accesstoken: "demotoken",
		deviceid: "web",
		homeid: "44ddfbdc50b7000001",
		isanalyst: "false",
		app: "profiler",
		type: "device",
		service: "device",
		scope: "device_apps"
	};


   	let fetchData = { 
	    method: 'POST', 
	    body: JSON.stringify(payload),
	    headers: new Headers({"Content-Type": "application/json"})
	};

	// console.log(content);

   	return fetch(this.core_svcRoot + deviceCareUrl, fetchData)
  	.then((resp) => resp.json()) // Transform the data into json
  	.then(function(data) {
    	return data;
    })

   }

  
}