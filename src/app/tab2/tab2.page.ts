import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  title = "Grocery";

  items = [

    {

      name: "Milk",
      quantity: 2
    },
    {

      name: "Bread",
      quantity: 4
    },
    {

      name: "Rice",
      quantity: 3
    },


  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {}

  

  removeItem(item, index) {
    console.log("Removing Items - ", item, index);
    this.toastCtrl.create({

      message: "Removing Item  - " + index,
      duration: 3000
    }).then(res => res.present());
    this.items.splice(index, 1);

    
  }

  addItem() {
    console.log("Adding Item");
    this.showPrompt();
   
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({ 

      
      message: "Please enter item...",
      inputs: [
         {

           name: 'name',
           placeholder: 'Name'
         },
         {
           name: 'quantity',
           placeholder: 'Quantity'
         }  
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: item => {
            console.log('Cancel clicked',);
          }
          
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]


    }).then(res => res.present());
    









  }

  














}





