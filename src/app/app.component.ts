import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headMessage : string;
  selectedRow : any;
  setClickedRow : Function;
  filterArray:any = [];
  Domains:Array<String>;
  ParentDomains:Array<String>;
  ChildDomains:Array<String>;
  constructor(){
      this.headMessage = "Please click below rows !!";
      this.Domains = ["chemical","oil","gas","Power","Financial"];
      this.ParentDomains = ["chemical","oil","gas","Power","Financial"];
 

      this.setClickedRow = function(index){
          this.selectedRow = this.ParentDomains[index];
  
          this.Domains = this.ParentDomains.filter(function(item) { 

           
            
        
         alert(this.selectedRow);
          
               
                
            })
            
           
    }
          
      }
      

     


  };

