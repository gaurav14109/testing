import { Company } from './Company';
import {User} from './User'

//type should be added to a variable
export interface Mappable{
 location:{
     lat: number,
     lng: number
 },
 markerContent():string,
 color:string,
}
export class CustomMap{
    
    private googleMap : google.maps.Map;
    //No direct access by other
 
    constructor(){
        console.log('hii')
        this.googleMap = new google
        .maps
        .Map(document.getElementById("map"), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(mappable:Mappable):void {
       const marker =  new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener('click',()=>{
            const infoWindow = new google.maps.InfoWindow({
                content:'Hi There'
            })
            infoWindow.open(this.googleMap, marker)
        })
    }
    //just take interface and single method for marker. use User | Company only common property name works
}