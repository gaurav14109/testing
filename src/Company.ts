import faker from 'faker';
import {Mappable} from './CustomMap'
export class Company implements Mappable{ //optional
  companyName: string;
  catchPhrase: string;
  location:{
      lat: number;
      lng: number;
  }
  color:string='black'
  constructor() {
    console.log('Hii')

    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
        lat:parseFloat(faker.address.latitude()),
        lng:parseFloat(faker.address.longitude())
    }
  }
  markerContent(): string {

    return `<div> <h2>Company is ${this.companyName}</h2></div>`

}
}
