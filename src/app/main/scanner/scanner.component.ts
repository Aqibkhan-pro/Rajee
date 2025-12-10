import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Location } from '@angular/common';
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
  standalone: false
})
export class ScannerComponent implements OnInit, OnDestroy {
  screenType: any;
  private pageElement: HTMLElement | null = null;
  passwordManager: any
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private location: Location

  ) {
  }

  async ngOnInit() {

    this.pageElement = document.querySelector('ion-router-outlet > app-main.ion-page');
    if (this.pageElement) {
      this.renderer.setStyle(this.pageElement, 'top', '0');
    }
  }

  async ionViewWillEnter() {
    BarcodeScanner.hideBackground();
    setTimeout(async () => {
      document.body.classList.add('scanner-active');
      document.body.style.setProperty('--ion-background-color', 'transparent');
      document.body.style.setProperty('background', 'transparent');
      document.body.style.setProperty('--ion-background-color-rgb', '0,0,0,0');
      await this.startScan();
    }, 850);

  }

  async startScan() {
    try {
      const result = await BarcodeScanner.startScan();
      if (result?.hasContent) {
        console.log("Parsed result:", result);
        this.cancelScan();
      }
    } catch (err) {
      console.error('Scan error:', err);
      this.cancelScan();
    }
  }

  async cancelScan() {
    try {
      await BarcodeScanner.stopScan();
    } finally {
      await BarcodeScanner.showBackground();
      document.body.style.removeProperty('--ion-background-color');
      document.body.style.removeProperty('--ion-background-color-rgb');
      document.body.classList.remove('scanner-active');
      document.body.style.removeProperty('background');

      this.location.back();
    }
  }

  cancelClick() {
    this.cancelScan();
  }

  torchOn = false;

  async toggleTorch() {
    try {
      if (this.torchOn) {
        await BarcodeScanner.disableTorch();
      } else {
        await BarcodeScanner.enableTorch();
      }
      this.torchOn = !this.torchOn;
    } catch (err) {
      console.error('Torch toggle failed', err);
    }
  }

  ngOnDestroy() {
    this.screenType = ''
    this.cancelScan();
    if (this.pageElement) {
      this.renderer.setStyle(this.pageElement, 'top', 'env(safe-area-inset-top)');
    }
  }
}
