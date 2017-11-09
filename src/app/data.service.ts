import{Injectable} from '@angular/core'; 

 
 import 'rxjs/add/operator/map'; 
 import {URLSearchParams} from '@angular/http'


 
 
import { Http, Response, Headers } from '@angular/http'; 
 
 
@Injectable() 
 export class DataService{ 
     
     url:string; 
    

 constructor(private http :Http){ 

 
 } 
 
 
    setUrl(options){ 
      
      let params = new URLSearchParams();
      for(let key in options){
          params.set(key, options[key]) 
      }
      
      console.log("http://someUrl?" + params.toString());
   } 

    // toUrl(base, obj) { 
    //      if (!obj) { 
    //        return base; 
    //      } 
     
     
    //      const str = []; 
     
     
    //      for(var p in obj) { 
    //        if (obj.hasOwnProperty(p)) { 
    //          str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p])); 
    //        } 
    //      } 
     
     
    //      if (str.length > 0) { 
    //        if (base.indexOf('?') > 0) { 
    //          return base + '&' + str.join('&'); 
    //        } 
     
     
    //        return base + '?' + str.join('&'); 
    //      } 
     
     
    //    return base; 
    //    } 

    toUrl(obj) {
      var parts = [];
      for (var i in obj) {
          if (obj.hasOwnProperty(i) && typeof(obj[i])=== "string") {
              parts.push(encodeURIComponent(i) + "%20eq%20%27" + encodeURIComponent(obj[i]));
          }
          if (obj.hasOwnProperty(i) && typeof(obj[i])=== "number") {
            parts.push(encodeURIComponent(i) + "%20eq%20" + encodeURIComponent(obj[i]));
        }
      }
      return console.log("http://houtibd01:9090/denodo-odata4-service-6.0/denodo-odata.svc/eds/LoadLogDetail?$filter=("+parts.join("&")+")&$format=json");
  }
    } 
    




  //  getData() { 
    
  //    return this.http.get(this.url) 
  //      .map(res =>res.json()); 
       
  //  } 
 