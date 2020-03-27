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
                icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjwh%0D%0ALS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoK%0D%0APHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHht%0D%0AbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0%0D%0AcDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJo%0D%0AdHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIw%0D%0AMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5l%0D%0AdC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3Nj%0D%0AYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMTAuNTgzMzM3bW0iCiAgIGhl%0D%0AaWdodD0iMjEuMTY2NjY4bW0iCiAgIHZpZXdCb3g9IjAgMCAxMC41ODMzMzcgMjEuMTY2NjY4Igog%0D%0AICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4MzQiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIu%0D%0AMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSkiCiAgIHNvZGlwb2RpOmRvY25hbWU9Im1hcmtlci13aXRo%0D%0ALWRpcmVjdGlvbi5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM4MjgiIC8+CiAgPHNvZGlwb2Rp%0D%0AOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBi%0D%0Ab3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2Nh%0D%0AcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlu%0D%0Aa3NjYXBlOnpvb209IjIiCiAgICAgaW5rc2NhcGU6Y3g9Ijg3LjU3MDYwNSIKICAgICBpbmtzY2Fw%0D%0AZTpjeT0iODYuNzE3MTk4IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBp%0D%0AbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjMiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAg%0D%0AIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTg1MyIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0%0D%0APSIxMDI1IgogICAgIGlua3NjYXBlOndpbmRvdy14PSI2NyIKICAgICBpbmtzY2FwZTp3aW5kb3ct%0D%0AeT0iMjciCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEK%0D%0AICAgICBpZD0ibWV0YWRhdGE4MzEiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAg%0D%0AICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZv%0D%0Acm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1%0D%0Acmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6%0D%0AdGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxn%0D%0ACiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIzIgogICAgIGlu%0D%0Aa3NjYXBlOmxhYmVsPSJMYXllciAyIgogICAgIHN0eWxlPSJkaXNwbGF5OmlubGluZSIKICAgICB0%0D%0AcmFuc2Zvcm09InRyYW5zbGF0ZSgtNy4xNDU4NTIsLTAuNjI3MDgxNjMpIj4KICAgIDxwYXRoCiAg%0D%0AICAgICBzdHlsZT0iZGlzcGxheTppbmxpbmU7b3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9w%0D%0AYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4wODI2MzczNSIKICAgICAgIGQ9Ik0gMTIuNDM3NTE5LDAu%0D%0ANjI3MDgxNjMgQyA5LjUxNDk2MTIsMC42MjcwNzg0OSA3LjE0NTc3ODksMy4xMTk1Nzg0IDcuMTQ1%0D%0AODUyLDYuMTk0MTgzNyA3LjE0NzY3MDcsNi43MDc4NTIxIDcuMjE3MDU4Nyw3LjIxODc4NCA3LjM1%0D%0AMjA0MSw3LjcxMjQzNzIgTCA3LjMxOTQ4NDgsNy42MjQwNzAzIDcuNTY5MDgyLDguNzAyMDQwOCAx%0D%0AMi4zODUzNTYsMjEuNzkzNzQ4IDE3LjAyNzQxOSw4Ljk1NTc3MjIgYyAwLjQ1ODQxNywtMC44NDA1%0D%0ANzg1IDAuNzAwMzE0LC0xLjc5MjQ5MDcgMC43MDE3NjYsLTIuNzYxNTg4NSA3LjNlLTUsLTMuMDc0%0D%0ANjA0OSAtMi4zNjkxMDksLTUuNTY3MTA0NjMgLTUuMjkxNjY2LC01LjU2NzEwMjA3IHogbSAtMC4w%0D%0ANzU0NSwwLjk5OTQyMjE3IGMgMi4zNDY3MjcsLTIuMzgzZS00IDQuMjQ5MjY4LDIuMDI0Njk2MiA0%0D%0ALjI0OTM1Myw0LjUyMjcyMTQgLTguNmUtNSwyLjQ5ODAyNSAtMS45MDI2MjYsNC41MjI5NTg4IC00%0D%0ALjI0OTM1Myw0LjUyMjcyMDggQyAxMC4wMTU1NDYsMTAuNjcxODggOC4xMTMzMjA2LDguNjQ3MDM1%0D%0AMyA4LjExMzIzNDgsNi4xNDkyMjUyIDguMTEzMzIwMiwzLjY1MTQxNDkgMTAuMDE1NTQ2LDEuNjI2%0D%0ANTY5MyAxMi4zNjIwNzEsMS42MjY1MDM4IFoiCiAgICAgICBpZD0icGF0aDIwNjMtNiIKICAgICAg%0D%0AIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlw%0D%0AZXM9ImNjY2NjY2NjY2NjY2NjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJjb2xvcjojMDAw%0D%0AMDAwO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9y%0D%0AbWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOm1lZGl1bTtsaW5lLWhlaWdodDpub3Jt%0D%0AYWw7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtm%0D%0Ab250LXZhcmlhbnQtcG9zaXRpb246bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250%0D%0ALXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC12YXJpYW50LWFsdGVybmF0ZXM6bm9ybWFsO2Zv%0D%0AbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0%0D%0AO3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtZGVjb3JhdGlvbi1saW5lOm5vbmU7dGV4dC1kZWNv%0D%0AcmF0aW9uLXN0eWxlOnNvbGlkO3RleHQtZGVjb3JhdGlvbi1jb2xvcjojMDAwMDAwO2xldHRlci1z%0D%0AcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3Jp%0D%0AdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7dGV4dC1vcmllbnRhdGlvbjptaXhlZDtkb21p%0D%0AbmFudC1iYXNlbGluZTphdXRvO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0%0D%0AYXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtzaGFwZS1wYWRkaW5nOjA7Y2xpcC1ydWxlOm5vbnplcm87%0D%0AZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7b3BhY2l0%0D%0AeToxO2lzb2xhdGlvbjphdXRvO21peC1ibGVuZC1tb2RlOm5vcm1hbDtjb2xvci1pbnRlcnBvbGF0%0D%0AaW9uOnNSR0I7Y29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzOmxpbmVhclJHQjtzb2xpZC1jb2xv%0D%0AcjojMDAwMDAwO3NvbGlkLW9wYWNpdHk6MTt2ZWN0b3ItZWZmZWN0Om5vbmU7ZmlsbDojMDAwMDAw%0D%0AO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0%0D%0AaDowLjE3MTA5NjIycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7%0D%0Ac3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZz%0D%0AZXQ6MDtzdHJva2Utb3BhY2l0eToxO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmlu%0D%0AZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJh%0D%0AY2tncm91bmQ6YWNjdW11bGF0ZSIKICAgICAgIGQ9Im0gMTMuNzAwNTk3LDUuMDA0OTYyIC0wLjAw%0D%0AMTEsLTAuMTcwNDk1OSAtMi40ODEwODcsMC4wMTAxMDIgMC4wMDExLDAuMTcwNDk2MiBjIDAuOTM2%0D%0ANDM0LDMuOTYyMTUyIDEuNTE4MDkxLDMuOTc1MTY1MSAyLjQ4MTA4NywtMC4wMTAxMDMgeiIKICAg%0D%0AICAgIGlkPSJwYXRoODg0IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIK%0D%0AICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+CiAgPC9nPgo8L3N2Zz4="
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
