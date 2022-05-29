import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AjaxFunctionProvider {

  BaseUrl : any = 'http://easycash.ng/user/';

  constructor(public http: HttpClient) {
    console.log('Hello AjaxFunctionProvider Provider');
  }
  
  postMethod(path,params) {
    // var config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, };
    // return this.http
    //   .post(this.BaseUrl+path,
    //   params, config)
    //   .map(res => {
    //     console.log("POST call successful value returned in body",
    //     res);})
    //   .catch(error => error)


      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json') 
      return new Promise((resolve, reject) => {
        this.http.post(this.BaseUrl+path,params,{headers: headers})
        .subscribe(
          (val) => {       
              console.log("POST call successful value returned in body",
                          val);
                          resolve(val);
                                  },
          response => {       
              console.log("POST call in error", response);
              reject(response);
          },
          () => {
              console.log("The POST observable is now completed.");
          });    
    });
  }

}
