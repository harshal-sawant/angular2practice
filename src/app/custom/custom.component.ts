import {Component} from "@angular/core";

@Component({
    selector: 'main-container',
    template: `
                    <h1>Nested Child Component Example</h1>
                    <router-outlet></router-outlet>
                `
})

export class CustomComponent {
    private name: any = "Harshal";
}

