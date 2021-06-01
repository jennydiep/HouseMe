import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(public storage: Storage) {
    console.log('Storage provider is working');
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.storage = storage;
  }

  // Create and expose methods that users of this service can call
  async addUser(key: string, object: Object) {
    try {
      const result = await this.storage.set(key, JSON.stringify(object));
      // console.log('set Object in storage: ' + result);
      return true;
    }
    catch (reason) {
      console.log(reason);
      return false;
    }
  }

  async getUser(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      if (result != null) {
        return JSON.parse(result);
      }
      return null;
    }
    catch (reason) {
      console.log(reason);
      return null;
    }
  }

  remove(key: string) {
    this.storage.remove(key);
  }

  clear() {
    this.storage.clear();
  }
}
