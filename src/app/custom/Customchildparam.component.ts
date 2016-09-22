import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: "child-Component",
    template : `
                <h3>This is nested child component with Parameter.</h3>
                {{id}}

                <a [routerLink]="['/custom']">Redirect to Custom Component</a>
                `
})

export class CustomChildParamComponent {
    id:any;
    paramsSub: any;

    constructor(private activatedRoute: ActivatedRoute) { }
  
    ngOnInit() {
        this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }
        
    

}

