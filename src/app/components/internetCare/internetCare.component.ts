import { Component, OnInit } from '@angular/core';
import { ApiService } from '../user/api.service';
declare var jquery:any;
declare const $: any;
@Component({
    selector: 'app-internetCare',
    templateUrl: './internetCare.component.html',
    styleUrls: ['./internetCare.component.css', 
    '../user/user.component.css'],
    providers: [ApiService]
})

export class InternetCareComponent implements OnInit{
    name:string;
    ip_address: string = "Loading...";
    up_speed: string = "Loading...";
    DNS_status: string = "Loading...";
    down_speed: string = "Loading...";

    constructor(private apiService: ApiService) {
    	console.log('constructor internetCare..');
      }
      
      ngOnInit(){
        this.apiService.fetchData().then(data =>{
          // console.log(data);
          this.DNS_status = data.network_status.dnsstatus,
          this.up_speed = 
           Math.floor(data.network_status.maxbandwidth.maxtcpulbw).toString() 
           + " Mbps",
          this.down_speed = 
            Math.floor(data.network_status.maxbandwidth.maxtcpdlbw).toString()
            + " Mbps",
          this.ip_address = data.network_status.ispinfo.ispipaddr;
        })
      }

      /* functions for minimizing/closing cards */
      minimize(id_) { 
        $("#" + id_).slideToggle();
      }
      remove(id_) { 
        
        $("#" + id_).hide();
      }
      showDiv(id_) {
        $("#" + id_).show();
      }
}