import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TraversalComponent } from './traversal/traversal.component';
export const routes:Routes=[
    {path:'sort',component:HomeComponent},
    {path:'search',component:TraversalComponent},
    {path:'',redirectTo:'sort',pathMatch:'full'}
]