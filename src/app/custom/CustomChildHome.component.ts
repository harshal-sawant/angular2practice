import { Component } from "@angular/core";

@Component({
    selector: "child-Component2",
    template : `<div class="main-container">
                    {{name}}
                </div>
                <a [routerLink]="['/custom/childcomp']">Redirect to Child Custom Component</a> <br />   
                <a [routerLink]="['/custom/childcomp', 1]">Redirect with Parameter</a> <br />
                <a [routerLink]="['/home']">Redirect to Home</a>
                `
})

export class CustomChildHomeComponent {
    private name:any = "My Name is Harshal."
}

