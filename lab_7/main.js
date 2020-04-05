var mymap = L.map('mapid').setView([38.989, -76.937], 9);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2t5ZmExMTIiLCJhIjoiY2s4anIxZmw0MGp5ajNnbXZidXhidzc0OSJ9.aPNvRTlLe_-VeN6C_D5a2w'
}).addTo(mymap);

var marker = L.marker([38.986, -76.945]).addTo(mymap);

var popup = L.popup({
    
})
    .setLatLng([38.986, -76.945])
    .setContent("McKeldin Library")
    .openOn(mymap);

const url ='https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

fetch(url).then(function(result) {
        return result.json();
    }).then(function(json) {
        let arr = [];
        let x = 0;
        let y = 0;

        for(let i = 0; i < 3; i++){
            arr.push(json[x]["geocoded_column_1"]['coordinates'])
            x = x+1;
        }
        
        for(let i = 0; i < 3; i++){
            let mark = L.marker([arr[y][1], arr[y][0]]).addTo(mymap);
            y = y+1;
        }
    });