const publicSpaceBaseColor = '#ED793C';

var trendSelectedHeading = 'trend-heading-1';

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
    setHeaderStyleById(trendSelectedHeading, publicSpaceBaseColor, 'white');
}

var bingTrendEvents = function() {
    $('.card-header.threats.trend').on('click', function (e) {
        var id = this.id;
        if (id !== trendSelectedHeading){
            setHeaderStyleById(trendSelectedHeading, 'white', publicSpaceBaseColor);
            setHeaderStyleById(id, publicSpaceBaseColor, 'white');
            trendSelectedHeading = id;

            if(trendSelectedHeading === 'trend-heading-1') {
                $('#trend-equity').show();
                $('#trend-mutliuse').hide();
                $('#trend-engagement').hide();
                $('#trend-reclaim').hide();
            } else if(trendSelectedHeading === 'trend-heading-2'){
                $('#trend-equity').hide();
                $('#trend-mutliuse').show();
                $('#trend-engagement').hide();
                $('#trend-reclaim').hide();
            } else if(trendSelectedHeading === 'trend-heading-3'){
                $('#trend-equity').hide();
                $('#trend-mutliuse').hide();
                $('#trend-engagement').show();
                $('#trend-reclaim').hide();
            } else{
                $('#trend-equity').hide();
                $('#trend-mutliuse').hide();
                $('#trend-engagement').hide();
                $('#trend-reclaim').show();
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

$(document).ready(function() {

    // var init =
    onInit();

    bingTrendEvents();
    bindStrategyEvents();
    // addLocators(init);
});
