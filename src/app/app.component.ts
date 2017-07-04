import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Details';
  public msg:string;
  public msg1:string;
  public msg2:string;
  public status=false;
  students=['Aravind','Balakrishna','Ravi','Vinod'];
  clicked()
  {
this.status=!this.status;
  }
  over()
  {
  this.msg="please click to get students details";
  }
  leave()
  {
  this.msg="";
  }
  focus(){
this.msg1="please enter student name";

  }
  blur(newStudent : string)
  {
this.msg1="";
  }
  addStudent(newStudent : string)
  {
  if (newStudent) {
      this.students.push(newStudent);
    }
  }
}
