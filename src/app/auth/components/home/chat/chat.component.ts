import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: false
})
export class ChatComponent implements OnInit {
  newMessage: string = '';

  messages = [
    {
      text: 'Hey! How are you doing?',
      time: '10:30 AM',
      sent: false
    },
    {
      text: 'I\'m doing great! Thanks for asking 😊',
      time: '10:32 AM',
      sent: true
    },
    {
      text: 'That\'s wonderful to hear!',
      time: '10:33 AM',
      sent: false
    },
    {
      text: 'Are you free this weekend?',
      time: '10:33 AM',
      sent: false
    },
    {
      text: 'Yes, I am! What did you have in mind?',
      time: '10:35 AM',
      sent: true
    },
    {
      text: 'Maybe we could grab coffee and catch up?',
      time: '10:36 AM',
      sent: false
    },
    {
      text: 'Sounds perfect! Saturday afternoon works for me',
      time: '10:37 AM',
      sent: true
    },
    {
      text: 'Great! I\'ll text you the details later',
      time: '10:38 AM',
      sent: false
    },
    {
      text: 'Looking forward to it! 🎉',
      time: '10:39 AM',
      sent: true
    }
  ];

  constructor(private navCtrl: NavController) { }

  async ngOnInit() {


  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        text: this.newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sent: true
      });
      this.newMessage = '';
    }
  }
}
