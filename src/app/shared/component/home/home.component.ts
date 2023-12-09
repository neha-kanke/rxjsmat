import { Component,  OnInit, inject } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Icourse} from '../../models/courses';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

coursesarry !:Array<Icourse>
// Avancedarr !:Array<Icourse>
// beginnerarr !:Array<Icourse>
beginnerarr$ !: Observable<Array<Icourse>>
 Avancedarr$ !:  Observable <Array<Icourse>>
coursearrylist$ ! : Observable <Array<Icourse>>
private _couresserv = inject(CoursesService)
  constructor() { }

  ngOnInit(): void {
    // this._couresserv.getalldata()
    // .subscribe(res=>{
    //   console.log(res);
    //   // this.coursesarry=res['payload']
    // this.beginnerarr=res.filter(couser =>couser.category === 'BEGINNER')
  
    // this.Avancedarr=res.filter(couser=>couser.category==='ADVANCED'
    // )
    // console.log(this.Avancedarr);
   
    // })

    this.coursearrylist$=this._couresserv.getalldata()
      this.beginnerarr$=this.coursearrylist$
      .pipe(
        map(course=>{
          return course.filter(b=>b.category==='BEGINNER')
        })
      )
    this.Avancedarr$=this.coursearrylist$
    .pipe(
      map(couses=>{
        return couses.filter(a=>a.category==="ADVANCED")
      })
    )
  }
 
}
