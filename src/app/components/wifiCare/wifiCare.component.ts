import { Component, OnInit } from '@angular/core';
import { ApiService } from '../user/api.service';
declare var jquery:any;
declare const $: any;
@Component({
    selector: 'app-wifiCare',
    templateUrl: './wifiCare.component.html',
    styleUrls: ['./wifiCare.component.css', 
    '../user/user.component.css'],
    providers: [ApiService]
})

export class WifiCareComponent implements OnInit{
    name:string;
    neighbor_home_channel = 0;
    constructor(private apiService: ApiService) {
    	console.log('constructor wifi_care..');
      }
      
      ngOnInit(){
        this.apiService.fetchData().then(data =>{
          this.neighbor_home_channel = 
          data.network_status.bssidnbourlist.length;
        })

      }
      minimize(id_) { 
        $("#" + id_).slideToggle();
      }
      remove(id_) { 
        
        $("#" + id_).hide();
      }
      showDiv(id_) {
        $("#" + id_).show();
      }

      smallModal(id_) {
        var small_modal = document.getElementById(id_);
        small_modal.style.display = "block";
      }
      normalModal(id_) {
        var modal = document.getElementById(id_);
        modal.style.display = "block";
      }
      closeModal(id_){
        var modal = document.getElementById(id_);
        modal.style.display = "none";
      }
}