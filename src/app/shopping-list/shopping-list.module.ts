import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoggingService } from "../logging.service";
import { SharedModule } from "../shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
    declarations:[
        ShoppingEditComponent,
        ShoppingListComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forChild([
            { path: 'shopping-list', component: ShoppingListComponent },
        ]),
        SharedModule
    ],
    providers:[LoggingService]
})
export class ShoppingListModule {}