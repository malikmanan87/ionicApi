import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { ConnectionStatus, Network } from '@capacitor/network';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit, OnDestroy {
  networkistener: PluginListenerHandle;
  status: ConnectionStatus;
  // status: string;

  constructor(private NgZone: NgZone) {}

  async ngOnInit() {
    this.networkistener = await Network.addListener(
      'networkStatusChange',
      (status) => {
        console.log('Network status changed', status);
        this.NgZone.run(() => {
          this.changeStatus(status);
        });
      }
    );

    const status = await Network.getStatus();
    this.changeStatus(status);
    console.log('Network status:', this.status);
  }

  changeStatus(status) {
    this.status = status;
    // this.status = status.connected ? 'Online' : 'Offline';
  }

  ngOnDestroy(): void {
    if (this.networkistener) this.networkistener.remove();
  }
}
