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
      address1: '1000 Somewhere Dr.',
      address2: 'Suite 420',
      bath: 100,
      bed: 100,
      broker: '99 broker name goes here',
      city: 'Dallas',
      imgBroker: [
        {
          url: 'www.domain.com'
        }
      ],
      imgHome: [
        {
          imgHomeId: 0,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/1269221619/88ab3e5ba67115f2bc21dbc9082db210o-c0s.jpg'
        },
        {
          imgHomeId: 1,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/1269221619/88ab3e5ba67115f2bc21dbc9082db210o-c0s.jpg'
        }
      ],
      likes: 1,
      listingId: 0,
      new: true,
      openHouseDate: 'MM/DD',
      price: 1000000,
      sqft: 10000,
      sqftlot: 10000,
      state: [
        {
          abbrv: 'TX',
          full: 'Texas'
        }
      ],
      status: ['For Sale'],
      url: 'www.domain.com',
      zip: 70000
    }
  ];
}

/*
-------------------------------------------------
Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com 

*/
