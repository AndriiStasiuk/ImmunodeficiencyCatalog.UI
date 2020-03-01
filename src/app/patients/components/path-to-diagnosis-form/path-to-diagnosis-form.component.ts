import { Component, OnInit,Input } from '@angular/core';
import { PatientPathToDiagnosis } from 'src/app/models/path-to-diagrosis-info';
import { FirstPidSymptomModels} from 'src/app/models/firstPidSymptomModels'

export interface pid_select {
  value: string;
  viewValue: string;
}

export interface symtoms_select{
  checked: boolean;
  symptomName: string;
  dateStart: string;
}

export interface firstPidSymptomModels{
  symptomName: string;
  dateStart: string;
}


@Component({
  selector: 'app-path-to-diagnosis-form',
  templateUrl: './path-to-diagnosis-form.component.html',
  styleUrls: ['./path-to-diagnosis-form.component.scss']
})
export class PathToDiagnosisFormComponent implements OnInit {

   // Data for radio button  
   firstDiagnosisPidDate: string;
   firstDiagnosisPidDates: string[] = ['Відомо', 'Невідомо'];
 
   pidLabOnly: string;
   pidLabOnlys: string[] = ['Так', 'Ні','Невідомо'];
 
 
   pid_selects: pid_select[] = [
     {value: 'лімфопенія-0', viewValue: 'Лімфопенія'},
     {value: 'нейтропенія-1', viewValue: 'Нейтропенія'},
     {value: 'тромбоцитопенія-2', viewValue: 'Тромбоцитопенія'},
     {value: 'анемія-3', viewValue: 'Анемія'},
     {value: 'монцитопенія-4', viewValue: 'Монцитопенія'},
     {value: 'підвищенийРівеньIgE-5', viewValue: 'Підвищений рівень IgE'},
     {value: 'гіпогамаглобулінемія-6', viewValue: 'Гіпогамаглобулінемія'},
     {value: 'інше-7', viewValue: 'Інше'}
   ];
 
   familyTiesPid: string;
   familyTiesPids: string[] = ['Так', 'Ні','Невідомо'];
 
   symtoms_select: symtoms_select[]=[
    {checked:false, symptomName:'Інфекції', dateStart:''},
    {checked:false, symptomName:'Дисрегуляція імунної відповіді', dateStart:''},
    {checked:false, symptomName:'Малігнізація (онконастороженість)', dateStart:''},
    {checked:false, symptomName:'Синдромальні маніфестації', dateStart:''},
  ] 
   
   @Input('wayToDiagnose')
   public wayToDiagnose : any[];
   @Input('path_to_diagnoses')

   public path_to_diagnoses: PatientPathToDiagnosis
   firstPidSymptomModels: firstPidSymptomModels[]=[]
   symtom: string;
   
 onCheckboxChange(symtoms,event) {
  if(event.checked == true || event.type == "change"){
    symtoms.checked=true;
    //console.log(this.firstPidSymptomModels.push({symptomName:symtoms.symptomName, dateStart:''}))
    console.log(symtoms.symptomName)
    console.log(event)
    console.log(this.firstPidSymptomModels)
    if(event.type == "change"){
      console.log(event.target.value)
      console.log(this.firstPidSymptomModels.push({symptomName:symtoms.symptomName, dateStart:event.target.value}))
      console.log(this.firstPidSymptomModels)
      this.path_to_diagnoses.firstPidSymptomModels = this.firstPidSymptomModels;
    }
  }
  else {
    console.log(symtoms.checked=false,event)
  }  
}
  
addSymtom(){
  if(this.symtom){
    this.symtoms_select.push({checked:false, symptomName:this.symtom, dateStart:''})
  }
  this.symtom="";
}

  constructor() { }

  ngOnInit() {
    console.log(this.path_to_diagnoses)
  }

}
