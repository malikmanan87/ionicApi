import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { Contacts } from '@capacitor-community/contacts';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts: any[] = [];

  constructor(private callNumber: CallNumber) { }

  ngOnInit() {
    this.getContacts();
  }

  async getContacts() {
    try {
      if(isPlatform('android')) {
        const permission = await Contacts.getPermissions();
        if(!permission.granted) return;
      }
      const result = await Contacts.getContacts();
      this.contacts = result.contacts;
      console.log(this.contacts);
      // for (const contact of result.contacts) {
      //     console.log(contact);
      // }
    } catch(e) {
      console.log(e);
    }
  }
  
  call(contact) {
    console.log(contact);
    const phoneNumber = contact.phoneNumbers[0];
    if(phoneNumber) {
      this.callNumber.callNumber(phoneNumber, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    }
  }
}
