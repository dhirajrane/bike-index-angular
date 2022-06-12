import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bike-search-input',
  templateUrl: './bike-search-input.component.html',
  styleUrls: ['./bike-search-input.component.scss']
})
export class BikeSearchInputComponent implements OnInit  {
  @Output() cityNameEntered = new EventEmitter<{cityName: string}>();
  myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      city: ["", Validators.required]
    })
  }

  onSubmit() {
    this.cityNameEntered.emit({cityName: this.myForm.controls["city"].value})
  }
}
