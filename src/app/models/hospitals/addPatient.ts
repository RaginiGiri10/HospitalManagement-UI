import { IDepartmentCategory } from "./departmentCategory";

export interface IAddPatient{
    patientName: string,
    patientAge: number,
    patientGender: string,
    departmentId:number,
    departmentList:IDepartmentCategory[],
    doctorName:string,
    doctorFee:number

}