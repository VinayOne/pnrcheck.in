import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CommonService } from '../shared/common.service';
import { NavigationEnd, Router } from '@angular/router';
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

  pnrForm = new FormGroup({
    pnrNum: new FormControl<any>('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)])
  })

  constructor(private commonService: CommonService, private router: Router, private gtmService: GoogleTagManagerService) {}

  ngOnInit(): void {
    this.sendGtmEvents();
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
            this.sendCustomEvent();           
          }
        },
        error: err => {
          console.error('Error: ', err);
        }
      })
    }
  }

  sendGtmEvents() {
    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
          const gtmTag = {
              event: 'page',
              pageName: item.url
          };
          this.gtmService.pushTag(gtmTag);
      }
  });
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


}
