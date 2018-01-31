import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  programs: string = ""; 
   constructor(private _apiService: ApiService) { 
   	this.addImg = 'assets/images/addProgram.png'
   	this.logoImg = 'assets/images/logo.png'
   }  

   ngOnInit(): void { 
      this.programs = this._apiService.getData().subscribe(programs => this.programs = programs);
      this.programsMoreData = this._apiService.getMore().subscribe(programsMoreData => this.programsMoreData = programsMoreData);
   } 
}
