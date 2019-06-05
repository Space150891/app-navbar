import { NgModule } from '@angular/core';
import { NavbarCreateComponent } from './navbar-create.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarCreateComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarCreateComponent]
})
export class NavbarCreateModule { }
