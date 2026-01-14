import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

interface FirebaseProduct {
  id: string; // firebase key
  title?: string;
  image?: string;
  price?: string;
  description?: string;
  createdAt?: number;
  time?: number;
  section?: string;
  user?: any;
  location?: any;
  comments?: any[];
  [key: string]: any;
}

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss'],
  standalone: false,
})
export class ManageProductsComponent implements OnInit {
  FIREBASE_DB_URL = 'https://rajee-198a5-default-rtdb.firebaseio.com';

  products: FirebaseProduct[] = [];
  filteredProducts: FirebaseProduct[] = [];
  loading = false;

  searchText = '';
  idToken: string | null = null;

  constructor(private toastController: ToastController) {}

  ngOnInit() {    // 2️⃣ User data
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
     this.idToken = userData?.idToken;
    if (!this.idToken) throw new Error('User not authenticated');
    this.loadProducts();
  }

  onSearch(event: any) {
    this.searchText = event.target.value?.toLowerCase() || '';
    this.applySearch();
  }

  applySearch() {
    if (!this.searchText) {
      this.filteredProducts = [...this.products];
      return;
    }

    this.filteredProducts = this.products.filter(p =>
      (p.title || '').toLowerCase().includes(this.searchText) ||
      (p.description || '').toLowerCase().includes(this.searchText) ||
      (p.section || '').toLowerCase().includes(this.searchText) ||
      (p.user?.name || '').toLowerCase().includes(this.searchText)
    );
  }

  async loadProducts() {
    this.loading = true;
    try {
      const url = `${this.FIREBASE_DB_URL}/products.json?auth=${this.idToken}`;
      const res = await fetch(url);
      const data = await res.json();

      if (!data) {
        this.products = [];
        this.filteredProducts = [];
        return;
      }

      const arr: FirebaseProduct[] = Object.keys(data).map(key => ({
        id: key,
        ...data[key],
      }));

      // newest first
      arr.sort((a, b) => ((b.createdAt || b.time || 0) - (a.createdAt || a.time || 0)));

      this.products = arr;
      this.applySearch();
    } catch (e: any) {
      console.error(e);
      this.showToast(e.message || 'Failed to load products', 'danger');
    } finally {
      this.loading = false;
    }
  }

  // ✅ APPROVE: copy to approvedProducts then delete from products
  async approve(p: FirebaseProduct) {
    try {
      const approvedPayload = {
        ...p,
        approvedAt: Date.now(),
        status: 'approved'
      };

      // 1) Add into approvedProducts (use same id so easy to track)
      const putUrl = `${this.FIREBASE_DB_URL}/approvedProducts/${p.id}.json?auth=${this.idToken}`;
      const putRes = await fetch(putUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(approvedPayload),
      });

      if (!putRes.ok) throw new Error(await putRes.text());

      // 2) Remove from products
      await this.deleteFromProducts(p.id);

      // 3) Remove locally
      this.products = this.products.filter(x => x.id !== p.id);
      this.applySearch();

      this.showToast('Approved ✅ moved to approvedProducts', 'success');
    } catch (e: any) {
      console.error(e);
      this.showToast(e.message || 'Approve failed', 'danger');
    }
  }

  // ✅ REJECT: remove from products
  // If you want "move to rejectedProducts" enable OPTIONAL section below.
  async reject(p: FirebaseProduct) {
    try {
      // OPTIONAL: move to rejectedProducts instead of only delete
      // await this.moveToRejectedProducts(p);

      await this.deleteFromProducts(p.id);

      this.products = this.products.filter(x => x.id !== p.id);
      this.applySearch();

      this.showToast('Rejected ❌ removed from products', 'medium');
    } catch (e: any) {
      console.error(e);
      this.showToast(e.message || 'Reject failed', 'danger');
    }
  }

  private async deleteFromProducts(productId: string) {
    const delUrl = `${this.FIREBASE_DB_URL}/products/${productId}.json?auth=${this.idToken}`;
    const delRes = await fetch(delUrl, { method: 'DELETE' });
    if (!delRes.ok) throw new Error(await delRes.text());
  }

  // OPTIONAL helper if you want rejectedProducts
  private async moveToRejectedProducts(p: FirebaseProduct) {
    const rejectedPayload = {
      ...p,
      rejectedAt: Date.now(),
      status: 'rejected'
    };

    const putUrl = `${this.FIREBASE_DB_URL}/rejectedProducts/${p.id}.json?auth=${this.idToken}`;
    const putRes = await fetch(putUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rejectedPayload),
    });
    if (!putRes.ok) throw new Error(await putRes.text());
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
