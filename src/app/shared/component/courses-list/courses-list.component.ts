import { Component, Input, OnInit } from '@angular/core';
import { Icourse } from '../../models/courses';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseFormComponent } from '../course-form/course-form.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
@Input() courselistaay !: Array<Icourse> | null
  constructor( private _matdilog:MatDialog) { }
  ngOnInit(): void {
  }
  oneditcourse(couser:Icourse){
let couserdicofi=new MatDialogConfig() //// it is create instance object
couserdicofi.data=couser
couserdicofi.width="700px"
couserdicofi.disableClose
couserdicofi.autoFocus=true
let cousermatref=this._matdilog.open(CourseFormComponent,couserdicofi)
  }
}
