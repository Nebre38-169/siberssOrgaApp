import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Rotance } from 'src/app/class/boquette/rotance';
import { RotanceService } from 'src/app/services/boquette/rotance.service';

@Component({
  selector: 'app-rotance-create',
  templateUrl: './rotance-create.component.html',
  styleUrls: ['./rotance-create.component.scss'],
})
export class RotanceCreateComponent implements OnInit {
  @Input() boquette: Boquette;
  public newRotance: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private rotance: RotanceService,
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.newRotance = this.formBuilder.group({
      lieu : ['',Validators.required],
      info : [''],
      date : ['',Validators.required],
      time : ['',Validators.required],
      commencer : [false,Validators.required]
    });
  }

  onSubmitForm(){
    const formValue = this.newRotance.value;
    const date = new Date(formValue.date);
    const time = new Date(formValue.time);
    const dateTime = new Date(date.getFullYear(),date.getMonth(),date.getDate(),time.getHours(),time.getMinutes());
    const r = new Rotance(
      undefined,
      undefined,
      undefined,
      this.boquette,
      formValue.lieu,
      formValue.info,
      dateTime,
      formValue.commencer? 'Y':'N',
      'N'
    );
    this.rotance.createNew(r)
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
