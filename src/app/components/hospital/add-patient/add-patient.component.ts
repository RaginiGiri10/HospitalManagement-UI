import { Component, OnInit } from '@angular/core';
import { IAddPatient } from 'src/app/models/hospitals/addPatient';
import { HospitalService } from 'src/app/services/hospital.service';
import { Router } from '@angular/router';

@Component({
 
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  hospital :IAddPatient
  constructor(private hospitalService: HospitalService,private router:Router) {
    this.hospital = {
     patientName:'',
     patientAge: 0,
     patientGender: '',
     departmentId:1,
     departmentList:[],
     doctorName:'',
     doctorFee:0
    }

   }

  ngOnInit(): void {
    this.hospitalService.addPatientView()
    .subscribe({
      next: response => {
        this.hospital = response
        this.hospital.departmentId=1
      },
      error: err => {
        console.log(err)
      }
        
      })

  }
  

  addPatient() {
    this.hospital.departmentId = +this.hospital.departmentId
     console.log(this.hospital)
     this.hospitalService.addPatient(this.hospital)
       .subscribe({
         next: _ => {
                  
           this.router.navigate(['/hospitals'])
           }
         })
   }
 
}
 
