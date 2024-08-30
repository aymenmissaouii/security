import { Component, OnInit } from '@angular/core';
import { MongoDbServiceService } from '../service/mongo-db-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  data!: any[];

  constructor(private mongoDbService: MongoDbServiceService) {}

  ngOnInit(){
    this.mongoDbService.getData().then(data => {
      this.data = data;
    });
  }

}
