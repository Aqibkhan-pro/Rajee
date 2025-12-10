import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Camera } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class MediaPermissionService {

  constructor() { }

  /** request for permission on dashboard */
  async requestMediaPermissions() {
    let cameraPermissionsGranted = false;
    try {
      const cameraPermissions = await Camera.checkPermissions();
      if (cameraPermissions.camera !== 'granted') {
        const result = await Camera.requestPermissions({ permissions: ['camera'] });
      }
      console.log('Camera Permissions:', cameraPermissions);

      cameraPermissionsGranted = cameraPermissions.camera !== 'granted' ? false : true;
    } catch (error) {
      console.error('Error requesting media permissions', error);
    }
    finally {
      return cameraPermissionsGranted
    }
  }


  async scannerPermission() {
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        return true;
      }
      return false
    } catch (error) {
      console.error('Error requesting scanner permissions', error);
      return false
    }


  }

}
