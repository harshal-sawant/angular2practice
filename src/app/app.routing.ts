import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }     from './home/home.component';
import { FeatureComponent }   from './feature/feature.component';
import { PrivateComponent }     from './private/private.component';

import { CustomComponent } from './custom/custom.component';
import { CustomChildHomeComponent } from './custom/CustomChildHome.component';
import { CustomChildComponent } from './custom/Customchild.component';
import { CustomChildParamComponent } from './custom/Customchildparam.component';


const app_routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'feature', component: FeatureComponent },
  {
     path: 'custom', 
     component: CustomComponent,
     children: [
       { path: 'childcomp', component: CustomChildComponent },
       { path: 'childcomp/:id', component: CustomChildParamComponent }, 
       { path: '', component: CustomChildHomeComponent }
     ] 
  },
  { path: 'private', component: PrivateComponent },
  { path: '**',  pathMatch:'full', redirectTo: '/home' }
];

export const app_routing = RouterModule.forRoot(app_routes);