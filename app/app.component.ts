import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  background="#000000";
  radius=50;

  //CODE
  myIcon="./direction/direction.component.svg";

 
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
 
 
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  mapReady(map){
   
    let position  = new google.maps.LatLng(51.573858, 7.8159);
    let position2  = new google.maps.LatLng(51.313858, 7.8159);
    this.createTestMarker(map,position);  
    this.createDirectionMarker(20,map,position2);
  }
  createDirectionMarker(angle, map, position){
            var docMarker = new google.maps.Marker({
                position: position,
                map: map,
                title: 'Direction Marker',
                optimized: false,
                icon: myIcon
            });
  }
  createTestMarker(map,position){
          var template = [
                '<?xml version="1.0"?>',
                    '<svg width="120mm" height="120mm" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">',
                        '<circle stroke="#222" fill="{{ color }}" cx="50" cy="50"  r="45"/>',
                    '</svg>'
                ].join('\n');
            var svg = template.replace('{{ color }}', '#FFFFFF');

            var docMarker = new google.maps.Marker({
                position: position,
                map: map,
                title: 'Dynamic SVG Marker',
                icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg), 
                scaledSize: new google.maps.Size(20, 20) },
                optimized: false
            });

  }
}
