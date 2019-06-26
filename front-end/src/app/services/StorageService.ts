import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class StorageService {
    private storageSub = new Subject<boolean>();


    watchStorage(): Observable<any> {
        return this.storageSub.asObservable();
    }

    setItem(key: string, data: any) {
        localStorage.setItem(key, data);
        this.storageSub.next(data);
    }

    cleanStorage(){
        localStorage.clear()
    }

    removeItem(key) {
        localStorage.removeItem(key);
        this.storageSub.next(true);
    }
}