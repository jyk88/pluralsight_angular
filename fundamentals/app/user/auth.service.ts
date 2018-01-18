import { IUser } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    currentUser: IUser;
    loginUser(username: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: username,
            firstName: 'john',
            lastName: 'papa'
        }
        console.log('aww yess it is logged in')
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}