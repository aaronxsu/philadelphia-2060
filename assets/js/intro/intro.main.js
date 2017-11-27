const introBaseColor = '#aaa';
var threatsSelectedHeading = 'threat-heading-1';

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
    setHeaderStyleById(threatsSelectedHeading, introBaseColor, 'white');
}

var bindThreatsEvents = function() {
    $('.card-header.threats.trend').on('click', function (e) {
        var id = this.id;
        if (id !== threatsSelectedHeading){
            setHeaderStyleById(threatsSelectedHeading, 'white', introBaseColor);
            setHeaderStyleById(id, introBaseColor, 'white');
            threatsSelectedHeading = id;

            if(threatsSelectedHeading === 'threat-heading-1') {
                $('#trend-race').show();
                $('#trend-poverty').hide();
                $('#trend-infras').hide();
                $('#trend-vacancy').hide();
            } else if(threatsSelectedHeading === 'threat-heading-2'){
                $('#trend-race').hide();
                $('#trend-poverty').show();
                $('#trend-infras').hide();
                $('#trend-vacancy').hide();
            } else if(threatsSelectedHeading === 'threat-heading-3'){
                $('#trend-race').hide();
                $('#trend-poverty').hide();
                $('#trend-infras').show();
                $('#trend-vacancy').hide();
            } else{
                $('#trend-race').hide();
                $('#trend-poverty').hide();
                $('#trend-infras').hide();
                $('#trend-vacancy').show();
            }
        }
  });
}

$(document).ready(function() {

    onInit();

    bindThreatsEvents();
    // bindStrategyEvents();
    // addLocators(init);
});
