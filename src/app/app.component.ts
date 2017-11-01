import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  headMessage : string;
  selectedRow : any;

  filterArray:any = [];
  Domains:Array<String>;
  ParentDomains:Array<String>;
  ChildDomains:Array<String>;
  constructor(){
     
    this.Domains = ["chemical","oil","gas","Power","Financial"];
    this.ParentDomains = ["chemical","oil","gas","Power","Financial"];      
      }
      
   
      
 

      setClickedRow(domain){
          
       
          this.Domains = this.Domains.filter(function(item) { 

              return item !== domain;
            })
            
           
    
          }
        }

