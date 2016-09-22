import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id, 
    selector: 'feature',
    templateUrl: 'feature.component.html'
})
export class FeatureComponent implements OnInit {
    private birthday: any;
    constructor() { }

    ngOnInit() { 
        this.birthday = new Date();
    }

}