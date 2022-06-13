import { SessionStorageStateService } from './../../shared/session-storage-state/session-storage-state.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BikeInput } from 'src/app/shared';

@Component({
  selector: 'app-bike-search-input',
  templateUrl: './bike-search-input.component.html',
  styleUrls: ['./bike-search-input.component.scss']
})
export class BikeSearchInputComponent implements OnInit  {
  @Output() cityNameEntered = new EventEmitter<{cityName: string}>();
  myForm!: FormGroup;
  inputData: BikeInput;

  constructor(private formBuilder: FormBuilder, private readonly sessionStorageStateService: SessionStorageStateService) { 
    this.inputData = this.sessionStorageStateService.getData();
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      city: ["", Validators.required]
    })
    
    if(this.inputData) {
      this.myForm.controls['city'].patchValue(this.inputData.cityName);
      this.onSubmit();
    }
  }

  onSubmit() {
    this.cityNameEntered.emit({cityName: this.myForm.controls["city"].value})
  }
}
