/*
APPLICATION NAME GOES HERE
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // SAMPLE LISTING
  public sampleListings = [
    {
      listingId: 0,
      broker: 'broker name goes here',
      new: false,
      openHouseDate: 'MM/DD',
      status: ['For Sale'],
      imgHome: [
        {
          url: 'www.domain.com'
        }
      ],
      imgBroker: [
        {
          url: 'www.domain.com'
        }
      ],
      price: 1000000,
      bed: 100,
      bath: 100,
      sqft: 10000,
      sqftlot: 10000,
      likes: 1,
      url: 'www.domain.com',
      address1: '1000 Somewhere Dr.',
      address2: 'Suite 420',
      city: 'Dallas',
      state: [
        {
          abbrv: 'TX',
          full: 'Texas'
        }
      ]
    }
  ];
}

/*
-------------------------------------------------
Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com 

*/
