import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ApiService } from '../user/api.service';
declare var jquery:any;
declare const $: any;
@Component({
    selector: 'app-deviceCare',
    templateUrl: './deviceCare.component.html',
    styleUrls: ['./deviceCare.component.css', 
    '../user/user.component.css'],
    providers: [ApiService]
})

export class DeviceCareComponent implements OnInit{
    name:string;
    device24 = 0;
    device5  = 0;
    deviceGuest = 0;
    deviceWired = 0;
    bandwidthHog = 0;
    offlineHog = 0;
    constructor(private apiService: ApiService) {
    	console.log('constructor device_care..');
      }

      ngOnInit() {
        this.apiService.fetchData().then(data =>{
          // console.log(data);
          for( let deviceInd in data.devices){
            let device = data.devices[deviceInd];
            if (device.band === "2.4GHz"){
              this.device24 ++;
            }
            if (device.band === "5GHz"){
              this.device5 ++;
            }
            if (device.isGuest === true){
              this.deviceGuest ++;
            }
            if (!device.hasOwnProperty("wireless")){
              this.deviceWired ++;
            }

          }

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

      smallModal(some_ID) {
        var small_modal = document.getElementById(some_ID);
        small_modal.style.display = "block";
      }
      normalModal(some_ID) {
        var modal = document.getElementById(some_ID);
        modal.style.display = "block";
      }
      closeModal(some_ID){
        var modal = document.getElementById(some_ID);
        modal.style.display = "none";
      }
     
}