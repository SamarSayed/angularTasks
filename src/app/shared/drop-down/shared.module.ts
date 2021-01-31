import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DropDownComponent } from "./drop-down.component";

@NgModule({
    declarations:[
        DropDownComponent
    ],
    imports:[
        CommonModule
    ],
    providers:[],
    exports: [DropDownComponent]
})
export class SharedModule{}