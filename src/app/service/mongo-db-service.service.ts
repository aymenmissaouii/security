import { Injectable } from '@angular/core';
import * as Realm from "realm-web";


@Injectable({
  providedIn: 'root'
})
export class MongoDbServiceService {

  app: Realm.App;
  mongodb: any;
  collection: any;

  constructor() {
    this.app = new Realm.App({ id: "application-0-oqcuapi" });
    const credentials = Realm.Credentials.anonymous();
    this.app.logIn(credentials).then((user) => {
      this.mongodb = user.mongoClient("mongodb-atlas");
      this.collection = this.mongodb.db("sample_mflix").collection("YOUR_COLLECTION_NAME");
    });
  }

  // Example method to get data from MongoDB
  async getData() {
    return await this.collection.find({});
  }

  // Example method to insert data into MongoDB
  async insertData(document: any) {
    return await this.collection.insertOne(document);
  }
}
