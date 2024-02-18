import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isSubmitted: boolean = false;
  isError: boolean = false;
  pnrData: any;

  pnrForm = new FormGroup({
    pnrNum: new FormControl<any>('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)])
  })

  constructor(private commonService: CommonService) {}

  onSubmit() {
    if(this.pnrForm.invalid) {
      this.isError = true;
    } else {
      this.isSubmitted = true;
      const pnr = this.pnrForm.value.pnrNum;
      this.commonService.getPnrDetails(pnr).subscribe({
        next: response => {
          if(response) {
            this.pnrData = response?.data || {};
            this.isSubmitted = false;
          }
        },
        error: err => {
          console.error('Error: ', err);
        }
      })
    }

  }


}
