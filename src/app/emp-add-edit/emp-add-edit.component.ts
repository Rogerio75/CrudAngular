import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
 empForm: FormGroup;

  education : string [] =[
    'Ensimo medio',
    'Facul',
    'Mestrado ',
    'Doutorado',
    'Pos graduado',
  ]
 constructor(private _fb: FormBuilder, private _empService: EmployeeService, private _DialogRef: DialogRef <EmpAddEditComponent> ){
  this.empForm = this._fb.group({
   firstName: '',
   lastName: '',
   email: '',
   dob: '',
   gender: '',
   education: '',
   company: '',
   experience: '',
   package: '',
  })
 }
 onFormSubmit(){
 if(this.empForm.valid){
this._empService.addEmployee(this.empForm.value).subscribe({
 next: (val: any) => {
  alert('Funcionario adicionado com sucesso')
  this._DialogRef.close();
 },
 error:() => {console.error;},

});

 }
 }
}
