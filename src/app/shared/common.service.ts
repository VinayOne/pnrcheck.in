import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const headers = new HttpHeaders({
  'X-RapidAPI-Key': '2d0898d518msh4264d2009a2b14fp16d7cdjsndbc63b10fa43',
  'X-RapidAPI-Host': 'irctc1.p.rapidapi.com',
  'Content-Type':'application/json',
});

const headerOptions = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getPnrDetails(pnr: number) {
    return this.http.get<any>(`https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnr}`, headerOptions);
    // return this.http.get<any>(`https://api.jsonbin.io/v3/qs/65da2bf4266cfc3fde8ec826`, headerOptions);
  }

  public getIPAddress() {  
    return this.http.get("http://api.ipify.org/?format=json");  
  }

  captureTraffic(userData: any) {
    return this.http.post("https://pincode.directory/api/trafficCapture", userData);
  }
}
