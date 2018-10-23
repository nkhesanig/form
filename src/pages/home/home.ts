import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  human={
    name:"",
    surname:"",
    age:0,
    gender:"",
  }

 person: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb:FormBuilder) {
    this.person = this.fb.group({
      
      name: ['',[Validators.required]],
      surname: ['',[Validators.required]],
      age:[0,[Validators.required]],
      gender:['',[Validators.required]],
    });
      }
      ionViewDidload() {
        console.log('ionViewDidLoad HomePage');
      }
      onSubmit({value,valid}:{value:Person,valid:boolean}){
        console.log(value);
  }

  }