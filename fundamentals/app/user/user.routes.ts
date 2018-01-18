import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

// /user/profile
export const userRoutes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent}
];
