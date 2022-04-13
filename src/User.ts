import faker from 'faker';
import {Mappable} from './CustomMap'

//this means class User should have all properties of interface
export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color:string='red'
    constructor() {
        this.name = faker
            .name
            .firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    markerContent(): string {

        return `Hi I Was ${this.name}`

    }
}
