import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IHospitalList } from 'src/app/models/hospitals/hospitalList';
import { HospitalService } from 'src/app/services/hospital.service';
import { Router } from '@angular/router';

@Component({
 
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  hospitalList: IHospitalList[]

  message: string = 'Loading...'
  messageClass:string ='bg-primary'
  isHospitalsAvailable: boolean = false;

  constructor(private hospitalService: HospitalService, private router:Router) { 
    this.hospitalList = []
  }

  ngOnInit(): void {
   this.getAllHospitals()

  }
  editPatient(id:number) {
    
    console.log("Id selected is ", id)
    this.router.navigate(['/editpatient',id])
  }
  deletePatient(id: number) {
   
    var confirmDelete = confirm(`Are you sure you want to remove patient with id = ${id}?`)
    if (confirmDelete) {
      this.hospitalService.deletePatient(id)
        .subscribe({
            next: _ => this.getAllHospitals(),
            error: (err: HttpErrorResponse) => {
              console.log(err.error)
            }
  
          })
    }
  }

  getAllHospitals() {
    this.hospitalService.getAllHospitals()
    .subscribe({
      next: (data) => {
        this.hospitalList = data;    
        this.isHospitalsAvailable = true;
      },        
      error:(error:HttpErrorResponse) => {
        console.log(error.message)   
        this.message = "something went wrong!!!"
        this.messageClass="bg-danger"
      }            
    })
  }




}
