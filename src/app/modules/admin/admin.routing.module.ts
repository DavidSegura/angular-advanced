import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./components/main/main.component";
import { ListComponent } from "./components/list/list.component";
import { AddComponent } from "./components/add/add.component";
import { EditorComponent } from "@tinymce/tinymce-angular";
import { DashboardComponent } from './components/dashboard/dashboard.component';

const adminRoutes: Routes = [
    { path: "admin", component: MainComponent, children: [
        { path: "", redirectTo: "dashboard", pathMatch: "full" },
        { path: "dashboard", component: DashboardComponent },
        { path: "list", component: ListComponent },
        { path: "add", component: AddComponent },
        { path: "edit", component: EditorComponent }
    ]}
];

@NgModule({
    imports: [ RouterModule.forChild(adminRoutes) ],
    exports: [ RouterModule ] 
})

export class AdminRoutingModule {}