 require([
        "esri/Map",
        "esri/layers/CSVLayer",
        "esri/views/MapView",
        "esri/config",
        "esri/core/urlUtils",
        "dojo/domReady!"
      ], function (
        Map,
        CSVLayer,
        MapView,
        esriConfig,
        urlUtils
      ) {
        var url = "https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%202/stl_crime_wgs_84.csv";
        esriConfig.request.corsEnabledServers.push("https://rawgit.com");

        const template = {
          title: "Earthquake Info",
          content: "Magnitude {mag} {type} hit {place} on {time}."
        };

        const csvLayer = new CSVLayer({
          url: url,
          copyright: "USGS Earthquakes",
          popupTemplate: template
        });

        var symbol = {
          type: "simple-marker",
          color: "red"
        };

        csvLayer.renderer = {
          type: "simple",
          symbol: symbol
        };

        var map = new Map({
          basemap: "gray",
          layers: [csvLayer]
        });

        var view = new MapView({
          center: [-90.199, 38.627],
          container: "viewDiv",
          zoom: 10,
          map: map
        });
      });
