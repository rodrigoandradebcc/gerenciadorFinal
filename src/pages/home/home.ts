import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController } from 'ionic-angular';
import { BackandService } from '@backand/angular2-sdk';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;
  constructor(public navCtrl: NavController,public backand: BackandService,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
      this.user =  {};
    }

    login(){

      let loading = this.loadingCtrl.create({content:"Logando..."});
      loading.present();
      this.backand.signin(this.user.email, this.user.password).then(
        (data)=>{
          this.navCtrl.setRoot(TabsPage);
          loading.dismiss();
        },
        (error)=>{
          console.log(error)
          loading.dismiss();
          let alert = this.alertCtrl.create({message:error});
          alert.present();
        });
      }

      createAccount(){
        this.navCtrl.push(SignupPage);
      }

    }
