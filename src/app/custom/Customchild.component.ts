import { Component } from "@angular/core";
import { CustomDirective } from "./custom.directive";

@Component({
    selector: "child-Component",
    template : `
                <h3>This is nested child component of Custom Component.</h3>
                <a [routerLink]="['/custom']">Redirect to Custom Component</a>

                {{check}}

                <br/>
                Following is the custom Directive.
                <h1>My First Attribute Directive</h1>
                <h4>Pick a highlight color</h4>
                <div>
                <input type="radio" name="colors" (click)="color='lightgreen'">Green
                <input type="radio" name="colors" (click)="color='yellow'">Yellow
                <input type="radio" name="colors" (click)="color='cyan'">Cyan
                
                </div>
                <p [myHighlight]="color" [defaultColor]="'violet'" >Highlight me!</p>
                <br />
                 <p>Super power boost: {{2 | multiplyby: 10}}</p>
                 `                
})

export class CustomChildComponent {
    private check:string = "true";
}

