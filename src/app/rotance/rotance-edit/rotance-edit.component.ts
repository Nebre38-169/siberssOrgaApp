import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Rotance } from 'src/app/class/boquette/rotance';
import { RotanceService } from 'src/app/services/boquette/rotance.service';

@Component({
  selector: 'app-rotance-edit',
  templateUrl: './rotance-edit.component.html',
  styleUrls: ['./rotance-edit.component.scss'],
})
export class RotanceEditComponent implements OnInit {
  @Input() r: Rotance;
  public editRotance: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private rotance: RotanceService,
    private modal: ModalController
  ) { }

  ngOnInit() {
    let date = `${this.r.date.getFullYear()}-`;
    if(this.r.date.getMonth()+1<10){
      date+=`0${this.r.date.getMonth()+1}`;
    }else{
      date+=`${this.r.date.getMonth()+1}`;
    }
    date+='-';
    if(this.r.date.getDate()<10){
      date+=`0${this.r.date.getDate()}`;
    }else{
      date+=`${this.r.date.getDate()}`;
    }
    let time = '';
    if(this.r.date.getHours()<10){
      time+=`0${this.r.date.getHours()}`;
    }else{
      time+=`${this.r.date.getHours()}`;
    }
    time+=':';
    if(this.r.date.getMinutes()<10){
      time+=`0${this.r.date.getMinutes()}`;
    }else{
      time+=`${this.r.date.getMinutes()}`;
    }
    console.log(time);
    this.editRotance = this.formBuilder.group({
      lieu: [this.r.lieu,Validators.required],
      info: [this.r.info],
      date: [date,Validators.required],
      time: [time,Validators.required],
      commencer : [this.r.commencer,Validators.required],
      fini : [this.r.fini,Validators.required]
    });
  }

  onSubmitForm(){
    const formValue = this.editRotance.value;
    const date = new Date(formValue.date);
    const time = String(formValue.time).split(':');
    const dateTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      parseInt(time[0],10),
      parseInt(time[1],10)
    );
    console.log(dateTime);
    this.r.date = dateTime;
    this.r.lieu = formValue.lieu;
    this.r.info = formValue.info;
    this.r.commencer = formValue.commencer;
    this.r.fini = formValue.fini;
    this.rotance.edit(this.r)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      }else{
        this.modal.dismiss({
          done:true
        });
      }
    });
  }

  onBack(){
    this.modal.dismiss({
      done:false
    });
  }
}
