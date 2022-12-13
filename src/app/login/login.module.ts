import { NgModule } from "@angular/core";
import { RegisterComponent } from "../login/register/register.component";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login.routing";


@NgModule({
    declarations:[
        LoginComponent,
        RegisterComponent,
    ],
    imports:[
        SharedModule,
        LoginRoutingModule  
    ],
    exports:[]
})

export class LoginModule { }