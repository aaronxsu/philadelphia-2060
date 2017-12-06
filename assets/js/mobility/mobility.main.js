const mobilityBaseColor = '#294489';

var conditionSelectedHeading = 'condition-heading-1';
var trendSelectedHeading = 'trend-heading-2';

var layers =  {
    lyrBsl: [],
    newBusLines: {}
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

var setTransitMap = function(map) {
    map.invalidateSize();

    layers.lyrBsl = _.map(bsl.features, function(f){
        return L.circleMarker([f.geometry.coordinates[1],f.geometry.coordinates[0]], {
            fillColor: '#ffa500',
            fillOpacity: 0.9,
            stroke: false,
            radius: 5
        });
    });

    layers.newBusLines = L.geoJSON(newBusLines, {'style': function(f) {
        var color = f.properties.Capacity == 1 ? '#121f3e' :
                    f.properties.Capacity == 2 ? '#3c62c5' : '#b5c3e9';
        return {
          color: color,
          weight: 4
        }
    }});

    console.log(newBusLines);

}


$(document).ready(function() {

    // var init =
    onInit();
    $('#strategy-modal-2').modal({show: true});

    bindConditionEvents();
    // bingTrendEvents();

    var transitMap = setMap('strategy-transit-map', [39.986273, -75.156225], 12);


    $('#strategy-modal-2').on('shown.bs.modal', function () {
        setTransitMap(transitMap);
    })

    bindStrategyEvents();
    // addLocators(init);
});
