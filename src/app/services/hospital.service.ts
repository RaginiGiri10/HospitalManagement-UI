import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAddPatient } from '../models/hospitals/addPatient';
import { IEditPatient } from '../models/hospitals/editPatient';

import { IHospitalList } from '../models/hospitals/hospitalList';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private baseApiUrl:string =environment.baseApiUrl
  constructor(private httpClient: HttpClient) { }
  getAllHospitals():Observable<IHospitalList[]> {
    
    return this.httpClient.get<IHospitalList[]>(this.baseApiUrl + 'hospital')
    
  }
  addPatientView():Observable<IAddPatient> {
    return this.httpClient.get<IAddPatient>(this.baseApiUrl + 'hospital/addpatient')
  }
  addPatient(hospital: IAddPatient) {
   
    return this.httpClient.post(this.baseApiUrl + 'hospital',hospital)
  }
  editPatientView(id: number):Observable<IEditPatient> {
    return this.httpClient.get<IEditPatient>(this.baseApiUrl + 'hospital/' + id);
  }
  editPatient(id: number, hospital: IEditPatient) {
    return this.httpClient.put(this.baseApiUrl + 'hospital/' + id,hospital)
  }
  deletePatient(id: number) {
    return this.httpClient.delete(this.baseApiUrl + 'hospital/' + id)
  }



 
}
