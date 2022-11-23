function initMap() {
  
  const voodoo = { lat: 43.444985571249033, lng: -80.51508380517622 }; 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: voodoo,
    styles: [
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
      },
    ]
  });
  

  const svgMarker = {
    path: "M16 0.875C11.8078 0.879946 7.78867 2.54749 4.82432 5.51184C1.85997 8.47618 0.192432 12.4953 0.187486 16.6875C0.182465 20.1134 1.30152 23.4463 3.37299 26.175C3.37299 26.175 3.80424 26.7428 3.87467 26.8248L16 41.125L28.131 26.8176C28.1943 26.7414 28.627 26.175 28.627 26.175L28.6284 26.1707C30.6989 23.4432 31.8174 20.1118 31.8125 16.6875C31.8075 12.4953 30.14 8.47618 27.1756 5.51184C24.2113 2.54749 20.1922 0.879946 16 0.875ZM16 22.4375C14.8627 22.4375 13.751 22.1003 12.8055 21.4685C11.8599 20.8366 11.1229 19.9386 10.6877 18.8879C10.2525 17.8373 10.1386 16.6811 10.3605 15.5657C10.5823 14.4503 11.13 13.4258 11.9341 12.6216C12.7383 11.8175 13.7628 11.2698 14.8782 11.048C15.9936 10.8261 17.1497 10.94 18.2004 11.3752C19.2511 11.8104 20.1491 12.5474 20.7809 13.493C21.4128 14.4386 21.75 15.5503 21.75 16.6875C21.7481 18.2119 21.1417 19.6733 20.0637 20.7513C18.9858 21.8292 17.5244 22.4356 16 22.4375Z",
    fillColor: "#1A1A1A",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 1,
    anchor: new google.maps.Point(15, 30),
  };

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: svgMarker,
    map: map,
  });

  const contentString =
    '<div id="iw-container">' +
    '<h5 class="iw-title">Voodoo</h5>' +
    '<div class="iw-content">' +
    '<p>137 Glasgow St., Unit 115</p>' +
    '<p>Kitchener, ON N2G 4X8</p>' +
    '<p>Ukraine</p>' +
    '<p class="iw-social iw-social--phone">1-800-480-9597</p>' +
    '<p class="iw-social iw-social--mail">info@voodoo.com</p>' +
    '</div>' +
    '</div>';


  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });

  google.maps.event.addListener(map, 'click', function () {
    infowindow.close();
  });
}

window.initMap = initMap;



var x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {

      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);