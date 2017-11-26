const climateBaseColor = '#8EB67C';
const climate2ftColor = '#294489';
const climate4ftColor = '#ED793C';
const climate6ftColor = '#B570A7';
const climateSurgeColor = '#527c94';

var threatsSelectedHeading = 'threats-heading-1';
var plottedThreatLayerIds = ['switch-threats-2ft'];
var mapId = 'threats-map';
var locators = [[40.014455, -75.140368], [39.889247, -75.195473]];

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

var setThreatsMap = function(id, center, zoom) {
    var threatsMap = L.map(id).setView(center, zoom);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png', {
      'maxZoom': 18,
      'attribution': '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
    }).addTo(threatsMap);
    return threatsMap;
}

var setLocatorMap = function(id, center, zoom) {
    var locatorMap = L.map(id).setView(center, zoom);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png', {
      'maxZoom': 18,
      'attribution': '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
    }).addTo(locatorMap);
    return locatorMap;
}

var setStormLayerStyle = function(fillColor) {
    return {
        fillColor: fillColor,
        fillOpacity: 0.5,
        stroke: false
    }
}

var setLocatorMarkerStyle = function(color) {
    return {
      radius: 1500,
      stroke: false,
      fillOpacity: 1,
      fillColor: color
    }
}

var onInit = function() {
    initFullPage();
    initMaterialBootstrap();
    setHeaderStyleById(threatsSelectedHeading, climateBaseColor, 'white');

    return {
        'map': setThreatsMap(mapId, [39.9526, -75.1652], 11),
        'lyr2ft': L.geoJSON(climate2ft, {style: setStormLayerStyle(climate2ftColor)}),
        'lyr4ft': L.geoJSON(climate4ft, {style: setStormLayerStyle(climate4ftColor)}),
        'lyr6ft': L.geoJSON(climate6ft, {style: setStormLayerStyle(climate6ftColor)}),
        'lyrSurge': L.geoJSON(climateSurge, {style: setStormLayerStyle(climateSurgeColor)}),
        'lyrLocators': locators.map(function(locator){return L.circle(locator, setLocatorMarkerStyle(climateBaseColor));})
    };
}

var bindThreatsEvents= function(init) {
    var map = init.map;

    map.scrollWheelZoom.disable();

    var threatLyrs = {
        'switch-threats-2ft': init.lyr2ft,
        'switch-threats-4ft': init.lyr4ft,
        'switch-threats-6ft': init.lyr6ft,
        'switch-threats-surge': init.lyrSurge
    }

    threatLyrs['switch-threats-2ft'].addTo(map);

    $('.card-header.threats').on('click', function (e) {
        var id = this.id;
        if (id !== threatsSelectedHeading){
            setHeaderStyleById(threatsSelectedHeading, 'white', climateBaseColor);
            setHeaderStyleById(id, climateBaseColor, 'white');
            threatsSelectedHeading = id;

            if(threatsSelectedHeading !== 'threats-heading-1') {
                if(threatsSelectedHeading === 'threats-heading-2') {
                    $('#threats-line-chart').show();
                    $('#threats-photo').hide();
                } else {
                    $('#threats-line-chart').hide();
                    $('#threats-photo').show();
                }
            } else {
                $('#threats-line-chart').hide();
                $('#threats-photo').hide();
            }
        }
    });

    $('.switch-threats').on('click', function(e) {
        var id = this.id;

        if(plottedThreatLayerIds.includes(id)) {
            map.removeLayer(threatLyrs[id]);
            plottedThreatLayerIds = plottedThreatLayerIds.filter(function(ele){
                return ele !== id;
            });
        } else {
            threatLyrs[id].addTo(map);
            plottedThreatLayerIds.push(id);
        }
    })
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

    $('.strategy-modal-close').on('click', function(e){
        var id = this.id.slice(0, 16);
        $('#' + id).modal('hide');
    })
}

var addLocators = function(init){
    var layers = init.lyrLocators;

    layers.forEach(function(ele, idx) {
        if (idx === 0) {
            var map1 = setLocatorMap('focus-locator-map-1', [39.9526, -75.1652], 10);
            var map2 = setLocatorMap('focus-locator-map-2', [39.9526, -75.1652], 10);
            ele.addTo(map1);
            ele.addTo(map2);
        } else if (idx === 1) {
            var map3 = setLocatorMap('focus-locator-map-3', [39.9526, -75.1652], 10);
            var map4 = setLocatorMap('focus-locator-map-4', [39.9526, -75.1652], 10);
            var map5 = setLocatorMap('focus-locator-map-5', [39.9526, -75.1652], 10);
            ele.addTo(map3);
            ele.addTo(map4);
            ele.addTo(map5);
        }
    })
}

$(document).ready(function() {

    var init = onInit();

    bindThreatsEvents(init);
    $('#myModal').modal({show: true});
    bindStrategyEvents();
    addLocators(init);
});
