import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  standalone: false
})
export class NotificationComponent implements OnInit {

  notifications: any[] = [];

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications() {
    this.notifications = [
      {
        id: 1,
        title: 'Order Confirmed',
        message: 'Your order #12345 has been successfully placed.',
        time: '2 mins ago',
        icon: 'cart-outline',
        color: 'success',
        isRead: false
      },
      {
        id: 2,
        title: 'New Offer',
        message: 'Get 20% off on your next purchase.',
        time: '10 mins ago',
        icon: 'pricetag-outline',
        color: 'warning',
        isRead: false
      },
      {
        id: 3,
        title: 'Payment Successful',
        message: 'Your payment of $99.99 was successful.',
        time: '30 mins ago',
        icon: 'card-outline',
        color: 'primary',
        isRead: true
      },
      {
        id: 4,
        title: 'Order Shipped',
        message: 'Your order #12345 has been shipped.',
        time: '1 hour ago',
        icon: 'cube-outline',
        color: 'tertiary',
        isRead: false
      },
      {
        id: 5,
        title: 'Password Changed',
        message: 'Your account password was updated successfully.',
        time: '2 hours ago',
        icon: 'lock-closed-outline',
        color: 'medium',
        isRead: true
      },
      {
        id: 6,
        title: 'New Login',
        message: 'A new login was detected from Chrome browser.',
        time: '3 hours ago',
        icon: 'log-in-outline',
        color: 'danger',
        isRead: false
      },
      {
        id: 7,
        title: 'Wishlist Updated',
        message: 'An item was added to your wishlist.',
        time: '5 hours ago',
        icon: 'heart-outline',
        color: 'danger',
        isRead: true
      },
      {
        id: 8,
        title: 'Order Delivered',
        message: 'Your order #12344 has been delivered.',
        time: 'Yesterday',
        icon: 'checkmark-done-outline',
        color: 'success',
        isRead: true
      },
      {
        id: 9,
        title: 'Price Drop Alert',
        message: 'An item in your cart is now cheaper.',
        time: 'Yesterday',
        icon: 'trending-down-outline',
        color: 'warning',
        isRead: false
      },
      {
        id: 10,
        title: 'Subscription Active',
        message: 'Your premium subscription is now active.',
        time: 'Yesterday',
        icon: 'star-outline',
        color: 'primary',
        isRead: true
      },
      {
        id: 11,
        title: 'Refund Processed',
        message: 'Your refund of $49.99 has been processed.',
        time: '2 days ago',
        icon: 'refresh-outline',
        color: 'success',
        isRead: false
      },
      {
        id: 12,
        title: 'Account Verified',
        message: 'Your email address has been verified.',
        time: '2 days ago',
        icon: 'mail-open-outline',
        color: 'secondary',
        isRead: true
      },
      {
        id: 13,
        title: 'Cart Reminder',
        message: 'You left items in your cart.',
        time: '3 days ago',
        icon: 'cart-outline',
        color: 'warning',
        isRead: false
      },
      {
        id: 14,
        title: 'Security Alert',
        message: 'Suspicious activity detected on your account.',
        time: '3 days ago',
        icon: 'shield-checkmark-outline',
        color: 'danger',
        isRead: false
      },
      {
        id: 15,
        title: 'Profile Updated',
        message: 'Your profile information was updated.',
        time: '4 days ago',
        icon: 'person-outline',
        color: 'medium',
        isRead: true
      },
      {
        id: 16,
        title: 'New Feature',
        message: 'Check out the new features in the latest update.',
        time: '5 days ago',
        icon: 'sparkles-outline',
        color: 'tertiary',
        isRead: false
      },
      {
        id: 17,
        title: 'Feedback Received',
        message: 'Thanks for your valuable feedback!',
        time: '6 days ago',
        icon: 'chatbubble-ellipses-outline',
        color: 'primary',
        isRead: true
      },
      {
        id: 18,
        title: 'Weekly Summary',
        message: 'Your weekly activity summary is ready.',
        time: '1 week ago',
        icon: 'calendar-outline',
        color: 'secondary',
        isRead: true
      },
      {
        id: 19,
        title: 'Maintenance Notice',
        message: 'Scheduled maintenance on Sunday at 2 AM.',
        time: '1 week ago',
        icon: 'construct-outline',
        color: 'medium',
        isRead: false
      },
      {
        id: 20,
        title: 'Welcome!',
        message: 'Thanks for joining our platform.',
        time: '2 weeks ago',
        icon: 'happy-outline',
        color: 'success',
        isRead: true
      }
    ];

  }

  markAsRead(notification: any) {
    notification.isRead = true;
  }
}
