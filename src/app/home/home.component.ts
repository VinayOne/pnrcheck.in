import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CommonService } from '../shared/common.service';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isSubmitted: boolean = false;
  isError: boolean = false;
  pnrData: any;
  visitorIP: any;
  currentDate = new Date();

  pnrForm = new FormGroup({
    pnrNum: new FormControl<any>('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)])
  })

  constructor(private commonService: CommonService, private gtmService: GoogleTagManagerService) {}

  ngOnInit(): void {
    this.getIp();
  }

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
            this.captureTraffic();           
          }
        },
        error: err => {
          console.error('Error: ', err);
        }
      })
    }
  }

sendCustomEvent() {
    const gtmTag = {
      event: 'pnr-search',
      data: {
        pnr: this.pnrData?.Pnr || 'invalid pnr',
        ip: this.visitorIP.ip
      }
  };
  this.gtmService.pushTag(gtmTag);
}

getIp() {
  this.commonService.getIPAddress().subscribe({
    next: response => {
      if(response) this.visitorIP = response;
    },
    error: err => {
      console.log('Error: ', err)
    }
  })
}

captureTraffic() {
  const userData = {
    ip: this.visitorIP.ip,
    pnr: this.pnrData?.Pnr || 'invalid pnr'
  }
  this.commonService.captureTraffic(userData).subscribe({
    next: response => {
      if(response) console.log('traffic captured');
    },
    error: err => {
      console.log('Error: ', err);
    }
  })
}


}
