import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './container/hhome.component';
import { OslHomeService } from './services/osl-home.service';

// const routes: Routes = [
//     { path: '' ,component:  HomeComponent},
// ];

@NgModule({
    declarations:[],
    imports: [
        CommonModule,
     //   RouterModule.forChild(routes),
        HttpClientModule,

    ],
    providers:[OslHomeService],
    bootstrap:[],
})
export class OslHomeModule {}