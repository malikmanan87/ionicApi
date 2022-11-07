import { Component, OnInit } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
import { isPlatform } from '@ionic/angular';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contacts: any[] = [];

  constructor() {}

  ngOnInit() {
    this.getContacts();
  }

  async getContacts() {
    try {
      if (isPlatform('android')) {
        const permissions = await Contacts.getPermissions();
        if (!permissions.granted) return;
      }
      const result = await Contacts.getContacts();
      this.contacts = result.contacts;
      console.log(this.contacts);
      // for (const contact of result.contacts) {
      //   console.log(contact);
      // }
    } catch (e) {
      console.log(e);
    }
  }
}
