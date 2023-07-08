import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-adicionar-user',
  templateUrl: './adicionar-user.component.html',
  styleUrls: ['./adicionar-user.component.scss']
})
export class AdicionarUserComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
