import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AuthService } from './auth.service';

import { userRoutes } from './user.routes';
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from './login.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent,
    ],
    providers: [
        AuthService
    ]

})
export class UserModule {

}