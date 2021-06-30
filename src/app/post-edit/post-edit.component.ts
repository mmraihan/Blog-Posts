import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({

      title: new FormControl(null, [Validators.required,Validators.maxLength(15)]),
      description: new FormControl(null),
      imagePath: new FormControl(null),
    });
  }
onSubmit(){
  console.log("Working");
  console.log(this.form);
}
}
