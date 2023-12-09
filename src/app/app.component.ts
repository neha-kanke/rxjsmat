import { Component, OnInit } from '@angular/core';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{





  ngOnInit(): void {
    

   let  of$=of([1,2,3,4],[5,6,7,8])
   of$
   .pipe(
    tap(arr=>{
      console.log('before map',arr);
      
    }),
    map(arr=>{
      console.log(arr); 
      return arr.map(c=>c*10)
    }),
    tap(arr=>{
      console.log('after map',arr);
    }),
  
   )
   .subscribe(res=>console.log(res)
   )




  }
  title = 'rxjsmat';
}
