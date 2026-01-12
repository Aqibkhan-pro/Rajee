import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.scss'],
  standalone: false
})
export class MapComponentComponent implements OnInit {

  @Input() location: { lat: number, lng: number } | null = null;
  pickedLocation: { lat: number, lng: number } | null = null;
  map: any;
  marker: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // const defaultLocation = this.location || { lat: 24.8607, lng: 67.0011 }; // default to Karachi
    // this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    //   center: defaultLocation,
    //   zoom: 15
    // });

    // this.marker = new google.maps.Marker({
    //   position: defaultLocation,
    //   map: this.map,
    //   draggable: true
    // });

    // this.map.addListener('click', (event: any) => {
    //   this.marker.setPosition(event.latLng);
    //   this.pickedLocation = {
    //     lat: event.latLng.lat(),
    //     lng: event.latLng.lng()
    //   };
    // });

    // // Set initial picked location
    // this.pickedLocation = defaultLocation;
  }

  confirm() {
    this.modalCtrl.dismiss(this.pickedLocation);
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
