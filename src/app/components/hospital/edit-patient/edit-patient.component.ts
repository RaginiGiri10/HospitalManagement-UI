import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEditPatient } from 'src/app/models/hospitals/editPatient';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({

  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  private patientId: number = 0;

  editpatient: IEditPatient;

  constructor(private hospitalService: HospitalService,
    private route: ActivatedRoute,private router:Router) {
      this.editpatient = {
        id:0,
        patientName:'',
        patientAge: 0,
        patientGender: '',
        departmentId:0,
        departmentList:[],
        doctorName:'',
        doctorFee:0
      }
     }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.patientId = +params['id']

      console.log('Patient Id - ' ,this.patientId)
      this.hospitalService.editPatientView(this.patientId)
      .subscribe({
        next: response => {
          console.log(response)
          this.editpatient = response
          }
        })
      
    })

  }
  updatePatient() {

    console.log(this.patientId)
    console.log(this.editpatient)
    this.hospitalService.editPatient(this.patientId,this.editpatient)
      .subscribe({
        next: _ => {
          this.router.navigate(['/hospitals'])
        },
        error: (err:HttpErrorResponse) => {
          console.log(err.error)
      }

    })
  }

}
