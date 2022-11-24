 import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
 import "leaflet/dist/leaflet.css";
 import L from "leaflet";

 var icon = L.icon({
   iconUrl: "https:img.icons8.com/plasticine/2x/marker.png",
   iconSize: [38, 45],
   iconAnchor: [19, 40],
   popupAnchor: [0, -30],
 });

 function Maps() {
   const position = [33.961072, 9.998322];

   return (
     <div className="App">
        
     { <MapContainer
         style={{ width: "40vw", height: "65vh" }}
         center={[33.948515, 10.036051]}
         zoom={13}
       >
         <TileLayer
           attribution=" "
           url="https:{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Marker position={position} icon={icon}>
           <Popup>
             
            
           </Popup>
         </Marker>
            </MapContainer> }
     </div>
   );
 }

 export default Maps;
