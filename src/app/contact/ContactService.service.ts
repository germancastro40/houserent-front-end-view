import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject( HttpClient );

  private baseUrl:string = "http://localhost:3000"

  constructor() { }

  sendEmail(nombre:string, email:string, mensaje:string, telefono:string):Observable<string>{
    const url:string = `${this.baseUrl}/sendMail`
    const body = {nombre, email, mensaje, telefono}

    return this.http.post<string>(url, body)
    .pipe(
      map((resp) => {
        return resp;
        console.log(resp)
      }),
      catchError(err =>  throwError( () => err.error.message ))
    )

  }

}
