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
    // LISTING #1 -------------------------------------------
    {
      address1: '1000 Somewhere Dr.',
      address2: 'Suite 420',
      bath: 100,
      bed: 100,
      broker: 'Big Dawg Realty Broker',
      city: 'Dallas',
      imgBroker: [
        {
          imgBrokerId: 0,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/1269221619/88ab3e5ba67115f2bc21dbc9082db210o-c0s.jpg'
        }
      ],
      imgHome: [
        {
          imgHomeId: 0,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/44ba5e8fcd0439cbe78b772b6ed1d482l-m1257779790od-w480_h360.jpg'
        },
        {
          imgHomeId: 1,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/44ba5e8fcd0439cbe78b772b6ed1d482l-m1257779790od-w480_h360.jpg'
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
    },

    // LISTING #2 -------------------------------------------
    {
      address1: '7985 Thistletree Ln',
      address2: '',
      bath: 2.5,
      bed: 4,
      broker: 'Fat Cat Realty',
      city: 'Frisco',
      imgBroker: [
        {
          imgBrokerId: 0,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/1269221619/88ab3e5ba67115f2bc21dbc9082db210o-c0s.jpg'
        }
      ],
      imgHome: [
        {
          imgHomeId: 0,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/d15d9e27e1fac7c2f85810f41e8cae06l-m3511790724od-w480_h360.jpg'
        },
        {
          imgHomeId: 1,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/44ba5e8fcd0439cbe78b772b6ed1d482l-m1257779790od-w480_h360.jpg'
        }
      ],
      likes: 1,
      listingId: 1,
      new: true,
      openHouseDate: 'MM/DD',
      price: 495000,
      sqft: 3069,
      sqftlot: 0.29,
      state: [
        {
          abbrv: 'TX',
          full: 'Texas'
        }
      ],
      status: ['For Sale'],
      url: 'www.domain.com',
      zip: 75033
    },

    // LISTING #3 -------------------------------------------
    {
      address1: '4136 Los Altos Dr',
      address2: '',
      bath: 3,
      bed: 4,
      broker: 'Supreme Broker',
      city: 'Plano',
      imgBroker: [
        {
          imgBrokerId: 0,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/1269221619/88ab3e5ba67115f2bc21dbc9082db210o-c0s.jpg'
        }
      ],
      imgHome: [
        {
          imgHomeId: 0,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/a252277401d0237fd64b64f3ed330705l-m3438727031od-w480_h360.jpg'
        },
        {
          imgHomeId: 1,
          imgName: 'Name of the image goes here.',
          imgDescription: 'Description of the image goes here.',
          url:
            'https://ap.rdcpix.com/44ba5e8fcd0439cbe78b772b6ed1d482l-m1257779790od-w480_h360.jpg'
        }
      ],
      likes: 1,
      listingId: 0,
      new: true,
      openHouseDate: 'MM/DD',
      price: 499000,
      sqft: 3095,
      sqftlot: 0.26,
      state: [
        {
          abbrv: 'TX',
          full: 'Texas'
        }
      ],
      status: ['For Sale'],
      url: 'www.domain.com',
      zip: 75024
    }
  ];
}

/*
-------------------------------------------------
Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com 

*/
