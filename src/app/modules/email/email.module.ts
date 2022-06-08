import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SaveEmailComponent } from './components/save-email/save-email.component';
import { ShowEmailComponent } from './components/show-email/show-email.component';
import { MainEmailComponent } from './components/main-email/main-email.component';

@NgModule({
  declarations: [
    SaveEmailComponent,
    ShowEmailComponent,
    MainEmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainEmailComponent
  ]
})
export class EmailModule { }
