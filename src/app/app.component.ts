import { Component } from '@angular/core';
import { Device } from '@capacitor/device';
import { Network } from '@capacitor/network';
import { Plugins } from '@capacitor/core';
import { MongoDbServiceService } from './service/mongo-db-service.service';

const { NetworkInterface } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  deviceInfo: any;
  ipAddress!: string;
  macAddress!: string;

  data!: any[];


  constructor(private mongoDbService: MongoDbServiceService) {
    this.getDeviceInfo();
    this.getNetworkInfo();
    this.getMACAddress();
  }


  addData() {
    this.mongoDbService.insertData({ name: "New Document" }).then(result => {
      console.log("Inserted document:", result);
    });
  }

  async getDeviceInfo() {
    this.deviceInfo = await Device.getInfo();
    console.log('Device Info:', this.deviceInfo);
  }

  async getNetworkInfo() {
    const status = await Network.getStatus();
    this.ipAddress = status.connected ? status.connectionType : 'Not connected';
    console.log('IP Address:', this.ipAddress);
  }

  async getMACAddress() {
    try {
      const { mac } = await NetworkInterface['getWiFiIPAddress']();
      this.macAddress = mac;
      console.log('MAC Address:', this.macAddress);
    } catch (error) {
      console.error('Error getting MAC Address:', error);
    }
  }
}
