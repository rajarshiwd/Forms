import { Component,OnInit } from '@angular/core';
import {DataService} from './data.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent implements OnInit {
  // headMessage : string;
  // selectedRow : any;

  filterArray:any = [];
  // Domains:Array<String>;
  // ParentDomains:Array<String>;
  // ChildDomains:Array<String>;
  constructor(private service: DataService){
     
    // this.Domains = ["chemical","oil","gas","Power","Financial"];
    // this.ParentDomains = ["chemical","oil","gas","Power","Financial"];      
      }
      
      ngOnInit(){

      }

      onSubmit(value){
        Object.keys(value).forEach((key) => (value[key] == "") && delete value[key]);
        console.log(value);

        this.service.toUrl(value);

      }
   
      
 

      // setClickedRow(domain){
          
       
      //     this.Domains = this.Domains.filter(function(item) { 

      //         return item !== domain;
      //       })
            
           
    
      //     }
        }

