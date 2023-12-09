import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icourse, Icoursesref } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  couserurl:string=`${environment.baseurl}/courses`

  constructor(private httpserv:HttpClient) { }


  getalldata():Observable<Array<Icourse>>{
    return this.httpserv.get<Icoursesref>(this.couserurl)   //  before    it retrn payload:{icourses[]}
    .pipe(
      shareReplay(),
      map(res=>{
        return res['payload']
      })

    ) 
  }
  updatecouser(course:Icourse):Observable<Icourse>{
    let updaturl=`${this.couserurl}/${course.id}`
    return this.httpserv.put<Icourse>(updaturl,course)
  }
}