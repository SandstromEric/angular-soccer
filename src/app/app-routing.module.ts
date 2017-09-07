import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

import { LoginComponent } from './login/login.component';

import { CoreModule } from './core/core.module'

const routes: Routes = [
  { path: 'login', component: LoginComponent, },
  { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule' }
  // { path: 'uploads', component: UploadsListComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }