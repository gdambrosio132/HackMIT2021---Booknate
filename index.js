function initMap() {
  // The location of several places that need attention
  const uluru = { lat: -25.344, lng: 131.036 };
  const milagro = { lat: -2.127, lng: -79.5992 };
  const bongor = { lat: 10.280, lng: 15.372 };
  const Chhattisgarh = { lat: 21.295, lng: 81.828 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: { lat: 0, lng: 0 }
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });


  const marker2 = new google.maps.Marker({
    position: milagro,
    map: map,
  });


  const marker3 = new google.maps.Marker({
    position: bongor,
    map: map,
  });

  const marker4 = new google.maps.Marker({
    position: Chhattisgarh,
    map: map,
  });
  //Code if we were to implement this automatically with queried values
  /*
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  var markers = locations.map(function(location, i){
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, 
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  */

  //ContentString -> html text prompt look
  const contentString = 
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

  const contentString2 = 
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Milagro</h1>' +
    '<div id="bodyContent">' +
    "<p><b>San Francisco de Milagro</b>, also referred to as <b>Milagro</b>, is a city " +
    "located in Guayas, Ecuador. It is the seat of Milagro Canton. Milagro is the  " +
    "second largest city in the province of Guayas. As of the census of 2007, there were 180,103 people residing within the canton limits. " + 
    "Denisse Robles, mayor (2014), pledged to get a city railway station and to improve the coverage of Milagro's drinking water. " + 
    "She was elected the mayor of Milagro in 2014 with 38% of the vote, finishing ahead of the incumbent mayor Francisco Asan. " + 
    "Robles assumed office in May 2014, becoming the first female mayor of the city, and the youngest mayor in the country.</p>" +
    '<p>Attribution: Milagro, <a href="https://en.wikipedia.org/wiki/Milagro,_Ecuador">' +
    "https://en.wikipedia.org/wiki/Milagro,_Ecuador</a> " +
    "(last visited September 18, 2021).</p>" +
    "</div>" +
    "</div>";

  const contentString3 = 
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Bongor</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Bongor</b>, is a city in Chad, the capital of the region of Mayo-Kebbi Est." +
    "It is located on the eastern bank of the Logone River.  " +
    "During the rainy season (May–September), the Logone is navigable between Bongor and N'Djamena, Chad's capital. The population is 29,268 (2008). " + 
    "Bongor has a lively central market square, an airport, a post office, a hospital, and the administrative offices for the Mayo-Kebbi Prefecture.  " + 
    "Cotton and rice are the primary cash crops of the region. There is a hotel on the bank of the Logone." + 
    "The principal market day is Monday and people come from the entire region for the weekly market. " + 
    "Bongor was a part of German Cameroon until the 1911 German-French Treaty. " + 
    "In 1904, a military station was founded near Bongor by German colonial officer Herbert Kund, constituting the beginning of the city's modern history. " + 
    "The primary indigenous tribal group are the Masa people. The city has been an important centre of secondary education since colonial times. " + 
    "The Lycée Jacques Modeina is located in the city and many of the future leaders of the nations that became independent after the dissolution of the colony of French Equatorial Africa attended the Lycée.</p>" +
    '<p>Attribution: Bongor, <a href="https://en.wikipedia.org/wiki/Bongor">' +
    "https://en.wikipedia.org/wiki/Bongor</a> " +
    "(last visited September 18, 2021).</p>" +
    "</div>" +
    "</div>";

  const contentString4 = 
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Chhattisgarh</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Chhattisgarh</b>, is a state located in the region of Central India. Formerly part of Madhya Pradesh, it was granted statehood on November 1, 2000." +
    "It is the 9th-largest state in India, with an area of 135,192 km2 (52,198 sq mi). As of 2021, it has a population of roughly 30 million (3 crores), making it the 17th most populated state in the country." +
    "The state was formed by the partition of ten Chhattisgarhi and six Gondi-speaking districts in the southeast of Madhya Pradesh. " + 
    "Its capital city is Raipur. It borders 7 states – Uttar Pradesh to the north, Madhya Pradesh to the northwest, Maharashtra to the southwest, Jharkhand to the northeast, Odisha to the east, and Telangana and Andhra to the south. " + 
    "Currently, it comprises 32 districts. Chhattisgarh is one of the fastest-developing states in India." + 
    "Its Gross State Domestic Product (GSDP) is ₹3.63 lakh crore (US$51 billion), with a per capita GSDP of ₹102,762 (US$1,400). " + 
    "A resource-rich state, Chhattisgarh provides electricity, coal, and steel to the rest of the nation. </p>" +
    '<p>Attribution: Chhattisgarh, <a href="https://en.wikipedia.org/wiki/Chhattisgarh">' +
    "https://en.wikipedia.org/wiki/Chhattisgarh</a> " +
    "(last visited September 18, 2021).</p>" +
    "</div>" +
    "</div>";

  //InfoWindow -> contains variable to prompted click text
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  //InfoWindow -> contains variable to prompted click text
  const infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
  });

  //InfoWindow -> contains variable to prompted click text
  const infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
  });

  //InfoWindow -> contains variable to prompted click text
  const infowindow4 = new google.maps.InfoWindow({
    content: contentString4,
  });


  //OnClickListener to pop-up info
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });

  //OnClickListener to pop-up info
  marker2.addListener("click", () => {
    infowindow2.open({
      anchor: marker2,
      map,
      shouldFocus: false,
    });
  });

  //OnClickListener to pop-up info
  marker3.addListener("click", () => {
    infowindow3.open({
      anchor: marker3,
      map,
      shouldFocus: false,
    });
  });

  //OnClickListener to pop-up info
  marker4.addListener("click", () => {
    infowindow4.open({
      anchor: marker4,
      map,
      shouldFocus: false,
    });
  });
}

function addMarker(position) {
  const marker3 = new google.maps.Marker({
    position,
    map,
  });
}

/*
var locations = [
    { lat: 41.8781, lng: -81.6298 },
    { lat: 41.2781, lng: -82.6298 },
    { lat: 41.3781, lng: -83.6298 },
    { lat: 41.8781, lng: -84.6298 },
]

var locations = [
    { lat: -25.344, lng: 131.036 },
    { lat: -23.344, lng: 133.036 },
    { lat: -21.344, lng: 134.036 },
    { lat: -19.344, lng: 135.036 },
]*/