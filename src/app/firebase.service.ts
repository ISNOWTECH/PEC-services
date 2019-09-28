import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';



export interface UserInfo {
  id?: string,
  doc: string,
  name: string,
  type: string,
  age: number,
}


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private usersObs: Observable<UserInfo[]>;
  private userCollection: AngularFirestoreCollection<UserInfo>;

  constructor(public afs: AngularFirestore) {

    this.userCollection = this.afs.collection<UserInfo>('users');
    this.usersObs = this.userCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUsers(): Observable<UserInfo[]> {
    return this.usersObs;
  }

  getUser(id: string): Observable<UserInfo> {
    return this.userCollection.doc<UserInfo>(id).valueChanges().pipe(
      take(1),
      map(user => {
        user.id = id;
        return user;
      })
    );
  }

  addUser(user: UserInfo): Promise<DocumentReference> {
    return this.userCollection.add(user);
  }

  updateUser(user: UserInfo): Promise<void> {
    return this.userCollection.doc(user.id).update({ ...user });
  }

  deleteUser(id: string): Promise<void> {
    return this.userCollection.doc(id).delete();
  }

}
