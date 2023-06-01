import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Os } from '../models/os';

@Injectable({
  providedIn: 'root'
})
export class OsService {

  baseUrl : String = environment.baseUrl;


  constructor(
    private http : HttpClient,
    private snack: MatSnackBar
  ) {}

  findAll():Observable<Os[]>{
    const url = this.baseUrl + "/os";
    return this.http.get<Os[]>(url);
  }

  create(os: Os):Observable<Os>{
    const url = this.baseUrl + '/os';
    return this.http.post<Os>(url,os);
  }

  message(msg:String):void{
    this.snack.open(`${msg}` ,'OK',{
      horizontalPosition:'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
  uptade(os: Os): Observable<Os>{
    const url = this.baseUrl + '/os';
    return this.http.put<Os>(url,os);
  }

  delete(os: Os){
    const url = this.baseUrl + '/os/' + os.id;
    return this.http.delete<Os>(url);
  }
  
  findById(id: any): Observable<Os>{
    const url = this.baseUrl + '/os/' + id;
    return this.http.get<Os>(url);
  }

  

}
