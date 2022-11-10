import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-local-notification',
  templateUrl: './local-notification.page.html',
  styleUrls: ['./local-notification.page.scss'],
})
export class LocalNotificationPage implements OnInit {
  constructor() {}

  async ngOnInit() {
    await LocalNotifications.requestPermissions();
  }

  async schedule() {
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Native Plugins App',
          body: 'Checking Local Notification',
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 1) },
          sound: 'sound.wav',
          attachments: null,
          smallIcon: 'ic_stat_adb',
          actionTypeId: '',
          extra: {
            data: 'Checking extras',
          },
        },
      ],
    });
    console.log('schedule notifications: ', notifs);
  }
}
