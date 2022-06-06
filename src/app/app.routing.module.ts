import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShopComponent } from "./components/shop/shop.component";
import { ParksComponent } from "./components/parks/parks.component";
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from "./components/keeper/keeper.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "shop", component: ShopComponent },
    { path: "park", component: ParksComponent },
    { path: "animals", component: AnimalsComponent },
    { path: "contact", component : ContactComponent },
    { path: "keeper", component: KeeperComponent },
    { path: "**", component: NotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}