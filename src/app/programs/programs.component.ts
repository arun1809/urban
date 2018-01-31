import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

   @Input() moreData;
   @Input() program;

  constructor() {
  	this.editImg = 'assets/images/editImg.png';
  };

	ngOnInit() {
		console.log(this.moreData[0]);
		this.options = {
		   	chart: {
		        type: 'column',
		        width: 275,
		        height:200
		    },
		    exporting: { enabled: false },
		    credits: {
      			enabled: false
  			},
		  xAxis: {
		        categories: [
		            'Jan',
		            'Feb',
		            'Mar',
		            'Apr',
		            'May',
		            'Jun',
		            'Jul',
		            'Aug',
		            'Sep',
		            'Oct',
		            'Nov',
		            'Dec'
		        ],
		        crosshair: true
		    },
		  yAxis: { visible : false},
	      title : { text : '' },
	      series: [{
	        showInLegend: false,
	      	name: 'PreviousYear',
	        data: this.program.Sales.PreviousYear,
	      },{
	        showInLegend: false,
	        name: 'CurrentYear',
	        data: this.program.Sales.CurrentYear,
	    }]
	    };

	    this.sales = {
		   	chart: {
		        type: 'line',
		        width: 120,
		        height: 50
		    },
		    exporting: { enabled: false },
		    credits: {
      			enabled: false
  			},
		  xAxis: {
		        categories: [
		            'Jan',
		            'Feb',
		            'Mar',
		            'Apr',
		            'May',
		            'Jun',
		            'Jul',
		            'Aug',
		            'Sep',
		            'Oct',
		            'Nov',
		            'Dec'
		        ],
		        crosshair: true
		    },
		  yAxis: { visible : false},
		  xAxis: { visible : false},
	      title : { text : '' },
	      series: [{
	        showInLegend: false,
	      	name: 'PreviousYear',
	        data: this.program.Sales.PreviousYear,
	      },{
	        showInLegend: false,
	        name: 'CurrentYear',
	        data: this.program.Sales.CurrentYear,
	    }]
	    };
	    this.showData = false; 
	    public showMoreItems()
		{
		    this.showData = true;        
		}
		public showLessItems()
		{
		    this.showData = false;
		}
	};


 

}
