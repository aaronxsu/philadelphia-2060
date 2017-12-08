const mobilityBaseColor = '#294489';

var conditionSelectedHeading = 'condition-heading-1';
var trendSelectedHeading = 'trend-heading-2';

var layers =  {
    lyrBsl: [],
    newBusLines: {},
    lyrMfl: [],
    lyrRail: {}
};

var initFullPage = function() {
    $('#climate-fullpage').fullpage({
        'lazyLoading': true,
        'css3': false
        // 'anchors':['landing', 'section-threats', 'section-vision', 'section-typologies', 'section-strategies',
        //     'vulnerability-analysis', 'section-focus-areas', 'section-focus-areasII', 'section-getting-started']
    });
}

var initMaterialBootstrap = function() {
    $('body').bootstrapMaterialDesign();
}

var setHeaderStyleById = function (id, background, font) {
    $('#' + id).css('background-color', background);
    $('#' + id + ' a').css('color', font);
}

var onInit = function() {
    initFullPage();
    initMaterialBootstrap();
    setHeaderStyleById(conditionSelectedHeading, mobilityBaseColor, 'white');
    setHeaderStyleById(trendSelectedHeading, mobilityBaseColor, 'white');
}

var setMap = function(id, center, zoom) {
    var map = L.map(id).setView(center, zoom);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png', {
      'maxZoom': 18,
      'attribution': '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
    }).addTo(map);
    return map;
}


var bindConditionEvents = function() {
    $('.card-header.threats.condition').on('click', function (e) {
        var id = this.id;
        if (id !== conditionSelectedHeading){
            setHeaderStyleById(conditionSelectedHeading, 'white', mobilityBaseColor);
            setHeaderStyleById(id, mobilityBaseColor, 'white');
            conditionSelectedHeading = id;

            if(conditionSelectedHeading === 'condition-heading-1') {
                $('#condition-car').show();
                $('#condition-transit').hide();
                $('#condition-funding').hide();
            } else if(conditionSelectedHeading === 'condition-heading-2') {
                $('#condition-car').hide();
                $('#condition-transit').show();
                $('#condition-funding').hide();
            } else {
                $('#condition-car').hide();
                $('#condition-transit').hide();
                $('#condition-funding').show();
            }
        }
  });
}

var bingTrendEvents = function() {
    $('.card-header.threats.trend').on('click', function (e) {
        var id = this.id;
        if (id !== trendSelectedHeading){
            setHeaderStyleById(trendSelectedHeading, 'white', mobilityBaseColor);
            setHeaderStyleById(id, mobilityBaseColor, 'white');
            trendSelectedHeading = id;

            if(trendSelectedHeading === 'trend-heading-1') {
                $('#trend-commute').show();
                $('#trend-avs').hide();
            } else {
                $('#trend-commute').hide();
                $('#trend-avs').show();
            }
        }
  });
}


var bindStrategyEvents = function() {
    $('#strategy-1').on('click', function(e) {
        var id = this.id;
        $('#strategy-modal-1').modal({show: true});
    });

    $('#strategy-2').on('click', function(e) {
        var id = this.id;
        $('#strategy-modal-2').modal({show: true});
    });

    $('#strategy-3').on('click', function(e) {
        var id = this.id;
        $('#strategy-modal-3').modal({show: true});
    });

    $('#strategy-4').on('click', function(e) {
        var id = this.id;
        $('#strategy-modal-4').modal({show: true});
    });

    $('#strategy-5').on('click', function(e) {
        var id = this.id;
        $('#strategy-modal-5').modal({show: true});
    });

    $('#strategy-6').on('click', function(e) {
        var id = this.id;
        $('#strategy-modal-6').modal({show: true});
    });

    $('#strategy-7').on('click', function(e) {
        var id = this.id;
        $('#strategy-modal-7').modal({show: true});
    });

    $('#strategy-8').on('click', function(e) {
        var id = this.id;
        $('#strategy-modal-8').modal({show: true});
    });

    $('#strategy-9').on('click', function(e) {
        var id = this.id;
        $('#strategy-modal-9').modal({show: true});
    });

    $('.strategy-modal-close').on('click', function(e){
        var id = this.id.slice(0, 16);
        $('#' + id).modal('hide');
    })
}

var getColor = function(level) {
    return level === 'Tier 1' ? '#121f3e' :
                level === 'Tier 2' ? '#3c62c5' : '#b5c3e9';
}

var setTransitMap = function(map) {
    map.invalidateSize();

    layers.newBusLines = L.geoJSON(newBusLines, {
        style: function(f) {
            var color = f.properties.Capacity == 1 ? '#121f3e' :
                        f.properties.Capacity == 2 ? '#3c62c5' : '#b5c3e9';
            return {
              color: color,
              weight: 6
            };
        },
        onEachFeature: function(f, l) {
            l.bindPopup(f.properties.Name ? f.properties.Name : 'NA');
        }
    }).addTo(map);

    // layers.lyrRail = L.geoJSON(septaRail, {
    //     style: function(f) {
    //         var names = ["Market-Frankford Lin", "PATCO", "Broad Street Line", "Airport", "RR Market East", "RR 30th Street", "Trolley"];
    //         var color = f.properties['OPERATOR'] == 'Market-Frankford Lin' ? '#121f3e' :
    //                     f.properties['OPERATOR'] == 'PATCO' ? '#121f3e' :
    //                     f.properties['OPERATOR'] == 'Broad Street Line' ? '#121f3e' :
    //                     f.properties['OPERATOR'] == 'Airport' ? '#121f3e' :
    //                     f.properties['OPERATOR'] == 'RR Market East' ? '#121f3e' :
    //                     f.properties['OPERATOR'] == 'RR 30th Street' ? '#121f3e' :
    //                     f.properties['OPERATOR'] == 'Trolley' ? '#121f3e' : '#121f3e'
    //         return {
    //           color: color,
    //           weight: 4
    //         };
    //     },
    //     onEachFeature: function(f, l) {
    //         l.bindPopup(f.properties['OPERATOR'] ? f.properties['OPERATOR'] : 'NA');
    //     }
    // }).addTo(map);

    // layers.lyrMfl = _.map(mfl.features, function(f){
    //     return L.circleMarker([f.geometry.coordinates[1],f.geometry.coordinates[0]], {
    //         fillColor: '#00008b',
    //         fillOpacity: 0.9,
    //         color: '#ffffff',
    //         radius: 5,
    //         weight: 1
    //     }).bindPopup(f.properties['STATION'] ? f.properties['STATION'] : 'NA').addTo(map);
    // });


    // layers.lyrBsl = _.map(bsl.features, function(f){
    //     return L.circleMarker([f.geometry.coordinates[1],f.geometry.coordinates[0]], {
    //         fillColor: '#ffa500',
    //         fillOpacity: 0.9,
    //         color: '#ffffff',
    //         radius: 5,
    //         weight: 1
    //     }).bindPopup(f.properties['Station']? f.properties['Station'] : 'NA').addTo(map);
    // });

}


$(document).ready(function() {

    // var init =
    onInit();

    bindConditionEvents();
    // bingTrendEvents();

    var transitMap = setMap('strategy-transit-map', [39.986273, -75.156225], 12);

    var legend = L.control({position: 'bottomleft'});

    legend.onAdd = function (transitMap) {
        var div = L.DomUtil.create('div', 'info legend'),
            grades = ['Tier 1', 'Tier 2', 'Tier 3'],
            labels = [];

        for (var i = 0; i < grades.length; i++) {
            div.innerHTML += '<i style="background:' + getColor(grades[i]) + '"></i> ' + grades[i] + (grades[i + 1] ? '<br>' : '');
        }
        return div;
    };

    legend.addTo(transitMap);


    $('#strategy-modal-2').on('shown.bs.modal', function () {
        setTransitMap(transitMap);
    })

    bindStrategyEvents();
    // addLocators(init);
});
