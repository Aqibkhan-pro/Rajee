import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.page.html',
  styleUrls: ['./admin-panel.page.scss'],
  standalone: false
})
export class AdminPanelPage implements OnInit {

  FIREBASE_DB_URL = 'https://rajee-198a5-default-rtdb.firebaseio.com';

  // ✅ counts
  totalUsers = 0;
  activeUsers = 0;
  deactiveUsers = 0;

  pendingProducts = 0;      // from /products
  approvedProducts = 0;     // from /approvedProducts
  rejectedProducts = 0;     // from /rejectedProducts
  totalProducts = 0;        // approved + pending (you can change logic)

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}


  idToken: string | null = null;
  ngOnInit() {    // 2️⃣ User data
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
     this.idToken = userData?.idToken;
    if (!this.idToken) throw new Error('User not authenticated');
    this.loadCounts();
  }

  openUsers() {
    this.navCtrl.navigateForward(['/admin-panel/manage-users']);
  }

  openProducts() {
    this.navCtrl.navigateForward(['/admin-panel/manage-products']);
  }

  // ----------------- ✅ COUNTS -----------------

  async loadCounts() {
    try {
      const [users, pending, approved, rejected] = await Promise.all([
        this.fetchObject('/users'),
        this.fetchObject('/products'),
        this.fetchObject('/approvedProducts'),
        this.fetchObject('/rejectedProducts'),
      ]);

      // ✅ total users
      const usersArr = this.objToArray(users);
      this.totalUsers = usersArr.length;

      this.activeUsers = usersArr.filter(u =>
        u?.status === 'active' || u?.isActive === true
      ).length;

      this.deactiveUsers = this.totalUsers - this.activeUsers;

      // ✅ products counts
      this.pendingProducts = this.countObject(pending);    // /products
      this.approvedProducts = this.countObject(approved);  // /approvedProducts
      this.rejectedProducts = this.countObject(rejected);  // /rejectedProducts

      // ✅ total products (choose your own)
      this.totalProducts = this.pendingProducts + this.approvedProducts;

    } catch (e: any) {
      console.error(e);
      this.showToast(e?.message || 'Failed to load counts', 'danger');
    }
  }

  private async fetchObject(path: string): Promise<any> {
    const url = `${this.FIREBASE_DB_URL}${path}.json?auth=${this.idToken}`;
    const res = await fetch(url);

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Firebase error (${path}): ${txt}`);
    }

    return await res.json();
  }

  private countObject(data: any): number {
    return Object.keys(data || {}).length;
  }

  private objToArray(data: any): any[] {
    if (!data) return [];
    return Object.keys(data).map(key => ({ id: key, ...data[key] }));
  }

  private async showToast(message: string, color: string = 'danger') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom',
    });
    toast.present();
  }
}
