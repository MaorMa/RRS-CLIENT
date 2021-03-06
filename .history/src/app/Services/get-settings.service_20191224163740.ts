import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { baseURLService } from './base-urlservice.service';

@Injectable({
  providedIn: 'root'
})
export class GetSettingsService {

  apiUrl: string = 'http://localhost:59416/api/';
  // apiUrl: string = 'http://proj.ise.bgu.ac.il/Proj-RR/backend/api/';
  // apiUrl: string;

  constructor(private http: HttpClient, private baseURL: baseURLService) {
    // this.apiUrl = this.baseURL.appConfig.baseURL;
   }

  getFamilies(): Observable<any> {
    return this.apiPostCall("Settings/GetFamilies");
  }

  getMarkets(): Observable<any> {
    return this.apiGetCall("Settings/GetMarkets");
  }

  //Get info from server 
  apiGetCall(apiExt): Observable<any> {
    var dataFromAPI = this.http.get(this.apiUrl + apiExt)
      .pipe(
        retry(3), // retry a failed request up to 3 times
      );
    return dataFromAPI;
  }

  //Get families from server according to user
  apiPostCall(apiExt): Observable<any> {
    // console.log(localStorage.getItem('token'))
    const formData = new FormData();
    const headerDict = {
      'Authorization': sessionStorage.getItem('token')
    }
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    var dataFromAPI = this.http.post(this.apiUrl + apiExt, formData, requestOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
      );
    return dataFromAPI;
  }
}
