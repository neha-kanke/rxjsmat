import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Icourse } from '../../models/courses';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { CoursesService } from '../../services/courses.service';
import { concat, concatMap, filter, map, mergeMap, switchMap } from 'rxjs';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  cousrdata !: Icourse
  courseform !: FormGroup
  // private _couserserv=Inject(CoursesService)
  constructor(@Inject(MAT_DIALOG_DATA) private couserdata: Icourse, private fb: FormBuilder, private _couerservice:CoursesService) {
    console.log(couserdata);
    this.cousrdata = couserdata
    this.courseform = fb.group({
      description: [couserdata.description, Validators.required],
      category: [couserdata.category, Validators.required],
      releasedAt: [moment(couserdata.releasedAt), Validators.required],
      longdecription: [couserdata.longDescription, Validators.required]
    })
  }

  ngOnInit(): void {
this.courseform.value
this.courseform.valueChanges
.pipe(
  filter(()=>{
    return this.courseform.valid
  }),
  
// concatMap(value=>{
//   let updateobj={...value,id:this.couserdata.id}
//   return this._couerservice.updatecouser(updateobj)
// })
// mergeMap(value=>{
//   let updateobj={... value,id:this.couserdata.id}
//   return this._couerservice.updatecouser(updateobj)
// })
switchMap(value=>{
  let updateobj={...value,id:this.couserdata.id}
  return this._couerservice.updatecouser(updateobj)
})

) 
.subscribe(res=>{
  console.log(res);
  
})





// this.courseform.valueChanges
// .subscribe(obj=>{
//   console.log(obj);
//   let newobj={...obj,id:this.couserdata.id}
// this._couerservice.updatecouser(newobj)
// .subscribe((res:Icourse)=>{
//   console.log(res);
//                            /// subecription in subscription then flatingopertor
// })
  
// })

  }
  oncouser(){
if(this.courseform.valid){
  let obj={...this.courseform.value,id:this.couserdata.id}
  this._couerservice.updatecouser(obj)
  .subscribe(res=>{
    console.log(res);
    
  })
}
  }

}
