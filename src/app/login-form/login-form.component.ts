import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  adminUser = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(2)
  ]],
    password: ['', [Validators.required, Validators.minLength(2)
    ]]
});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  runLogin() {

  }

}
