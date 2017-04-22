import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Registro } from './registro';

@NgModule({
  declarations: [
    Registro,
  ],
  imports: [
    IonicModule.forChild(Registro),
  ],
  exports: [
    Registro
  ]
})
export class RegistroModule {}
