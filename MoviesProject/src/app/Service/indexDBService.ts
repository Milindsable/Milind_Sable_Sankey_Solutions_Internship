import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class IndexedDbService {

  private dbName = 'myDatabase';
  private storeName = 'myObjectStore';
  private db: IDBDatabase | null = null;

  constructor() {
    this.initDatabase();
  }

  private initDatabase() {
    if (typeof window !== 'undefined' && window.indexedDB) {
        // Your IndexedDB code here
        const request = window.indexedDB.open(this.dbName, 1);

        request.onupgradeneeded = (event) => {
            this.db = (event.target as any).result as IDBDatabase;
            this.db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
          };
      
          request.onsuccess = (event) => {
            this.db = (event.target as any).result as IDBDatabase;
          };
        // ...
      } else {
        console.error('IndexedDB is not supported in this environment.');
      }
  }

  addData(data: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      if (!this.db) {
        reject(new Error('Database not initialized.'));
        return;
      }
  
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const objectStore = transaction.objectStore(this.storeName);
  
      const request = objectStore.add(data);
  
      request.onsuccess = (event) => {
        const key = (event?.target as IDBRequest)?.result;
        console.log('Data added successfully. Key:', key);
        resolve(key);
      };
  
      request.onerror = (event) => {
        console.error('Error retrieving data:', (event?.target as IDBRequest)?.error);
        reject((event?.target as IDBRequest)?.error ?? new Error('Unknown error'));
      };
    });
  }
}
