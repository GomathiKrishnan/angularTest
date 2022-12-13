import { NgModule } from "@angular/core";
import { CardComponent } from "../home/card/card.component";
import { EditCartComponent } from "../home/edit-cart/edit-cart.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing";


@NgModule({
    declarations:[
        HomeComponent,
        SidenavComponent,
        HeaderComponent,
        CardComponent,
        FooterComponent,
        EditCartComponent,
    ],
    imports:[
        HomeRoutingModule,
        SharedModule
    ]
})

export class HomeModule { }