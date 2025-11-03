function getAllValsCCSS() {
    var getAllVals1 = 'Business: ' + $('#businessselect_cst').val();
    var getAllVals2 = 'Platform: ' + $('#platformselect_cst').val();
    var getAllVals3 = 'Audience: ' + $('#audienceselect_cst').val();
    var getAllVals4 = 'Features: ' + $('#featuresselect_cst').val();
    var getAllVals5 = 'Integrations: ' + $('#integrationselect_cst').val();
    var getAllVals6 = 'Revenue: ' + $('#revenueselect_cst').val();
    var getAllVals7 = 'Security: ' + $('#securityselect_cst').val();

    var getAllVals8 = 'Money saved with Trango Tech: ' + $('#inlineFormInputGroupA').val();
    var getAllVals9 = 'Time saved with Trango Tech: ' + $('#inlineFormInputGroupB').val();
    var getAllVals10 = 'Project Timeline: ' + $('#inlineFormInputGroupC').val();

    $('#completeformdata').val(getAllVals1 + ' , ' + getAllVals2 + ' , ' + getAllVals3 + ' , ' + getAllVals4 +
        ' , ' + getAllVals5 +
        ' , ' + getAllVals6 + ' , ' + getAllVals7 + ' , ' + getAllVals8 + ' , ' + getAllVals9 + ' , ' +
        getAllVals10);
}

function sumValuesFirst(moneysaved, timesaved, projecttimeline) {

    $('#inlineFormInputGroupA').val(moneysaved);

    $('#inlineFormInputGroupB').val(timesaved);

    $('#inlineFormInputGroupC').val(projecttimeline);

}

function sumValues(moneysaved, timesaved, projecttimeline) {

    var moneysavedwithtrangotech = $('#inlineFormInputGroupA').val();
    var mswttnew = parseInt(moneysavedwithtrangotech) + parseInt(moneysaved);
    $('#inlineFormInputGroupA').val(mswttnew);

    var timesavedwithtrangotech = $('#inlineFormInputGroupB').val();
    var tswttnew = parseInt(timesavedwithtrangotech) + parseInt(timesaved);
    $('#inlineFormInputGroupB').val(tswttnew);

    var projecttimelinett = $('#inlineFormInputGroupC').val();
    var ptttnew = parseInt(projecttimelinett) + parseInt(projecttimeline);
    $('#inlineFormInputGroupC').val(ptttnew);

}

function subtractValues(moneysaved, timesaved, projecttimeline) {

    var moneysavedwithtrangotech = $('#inlineFormInputGroupA').val();
    var mswttnew = parseInt(moneysavedwithtrangotech) - parseInt(moneysaved);
    $('#inlineFormInputGroupA').val(mswttnew);

    var timesavedwithtrangotech = $('#inlineFormInputGroupB').val();
    var tswttnew = parseInt(timesavedwithtrangotech) - parseInt(timesaved);
    $('#inlineFormInputGroupB').val(tswttnew);

    var projecttimelinett = $('#inlineFormInputGroupC').val();
    var ptttnew = parseInt(projecttimelinett) - parseInt(projecttimeline);
    $('#inlineFormInputGroupC').val(ptttnew);

}

var selplatarr = [];
$(document).on('click', '.select_platform', function () {

    var id = $(this).val();
    var index = selplatarr.indexOf(id);

    if ($(this).is(':checked')) {
        selplatarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            selplatarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }

    $('#platformselect_cst').val(selplatarr);


});

var audselarr = [];
$(document).on('click', '.select_audience', function () {
    var id = $(this).val(); // this gives me null
    var index = audselarr.indexOf(id);

    if ($(this).is(':checked')) {
        audselarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            audselarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }

    $('#audienceselect_cst').val(audselarr);


});

var revselarr = [];
$(document).on('click', '.select_revenue', function () {
    var id = $(this).val(); // this gives me null
    var index = revselarr.indexOf(id);

    if ($(this).is(':checked')) {
        revselarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            revselarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#revenueselect_cst').val(revselarr);


});

$(document).on('click', '.select_security', function () {
    $('#securityselect_cst').val($(this).val());

    if ($(this).is(':checked')) {

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);

    } else {
        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }


});

var shopfeatarr = [];
$(document).on('click', '.shopfeat_select', function () {
    var id = $(this).val(); // this gives me null
    var index = shopfeatarr.indexOf(id);

    if ($(this).is(':checked')) {
        shopfeatarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            shopfeatarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);

    }
    $('#featuresselect_cst').val(shopfeatarr);


});

var finfeatarr = [];
$(document).on('click', '.finfeat_select', function () {
    var id = $(this).val(); // this gives me null
    var index = finfeatarr.indexOf(id);

    if ($(this).is(':checked')) {
        finfeatarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            finfeatarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#featuresselect_cst').val(finfeatarr);


});

var heafeatarr = [];
$(document).on('click', '.heafear_select', function () {
    var id = $(this).val(); // this gives me null
    var index = heafeatarr.indexOf(id);

    if ($(this).is(':checked')) {
        heafeatarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            heafeatarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#featuresselect_cst').val(heafeatarr);


});

var evefeatarr = [];
$(document).on('click', '.evefeat_select', function () {
    var id = $(this).val(); // this gives me null
    var index = evefeatarr.indexOf(id);

    if ($(this).is(':checked')) {
        evefeatarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            evefeatarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#featuresselect_cst').val(evefeatarr);


});

var smfeatarr = [];
$(document).on('click', '.smfeat_select', function () {
    var id = $(this).val(); // this gives me null
    var index = smfeatarr.indexOf(id);

    if ($(this).is(':checked')) {
        smfeatarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            smfeatarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#featuresselect_cst').val(smfeatarr);


});

var reafeatarr = [];
$(document).on('click', '.reafeat_select', function () {
    var id = $(this).val(); // this gives me null
    var index = reafeatarr.indexOf(id);

    if ($(this).is(':checked')) {
        reafeatarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            reafeatarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#featuresselect_cst').val(reafeatarr);


});

var odsfeatarr = [];
$(document).on('click', '.odsfeat_select', function () {
    var id = $(this).val(); // this gives me null
    var index = odsfeatarr.indexOf(id);

    if ($(this).is(':checked')) {
        odsfeatarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            odsfeatarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#featuresselect_cst').val(odsfeatarr);


});

var fdfeatarr = [];
$(document).on('click', '.fdfeat_select', function () {
    var id = $(this).val(); // this gives me null
    var index = fdfeatarr.indexOf(id);

    if ($(this).is(':checked')) {
        fdfeatarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            fdfeatarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#featuresselect_cst').val(fdfeatarr);


});

var gamefeatarr = [];
$(document).on('click', '.gamefeat_select', function () {
    var id = $(this).val(); // this gives me null
    var index = gamefeatarr.indexOf(id);

    if ($(this).is(':checked')) {
        gamefeatarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            gamefeatarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#featuresselect_cst').val(gamefeatarr);


});

var othfeatarr = [];
$(document).on('click', '.othfeat_select', function () {
    var id = $(this).val(); // this gives me null
    var index = othfeatarr.indexOf(id);

    if ($(this).is(':checked')) {
        othfeatarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            othfeatarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#featuresselect_cst').val(othfeatarr);
});

var shopintarr = [];
$(document).on('click', '.shopint_select', function () {
    var id = $(this).val(); // this gives me null
    var index = shopintarr.indexOf(id);

    if ($(this).is(':checked')) {
        shopintarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            shopintarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#integrationselect_cst').val(shopintarr);
});

var finintarr = [];
$(document).on('click', '.finint_select', function () {
    var id = $(this).val(); // this gives me null
    var index = finintarr.indexOf(id);

    if ($(this).is(':checked')) {
        finintarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            finintarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#integrationselect_cst').val(finintarr);
});

var heaintarr = [];
$(document).on('click', '.heaint_select', function () {
    var id = $(this).val(); // this gives me null
    var index = heaintarr.indexOf(id);

    if ($(this).is(':checked')) {
        heaintarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            heaintarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#integrationselect_cst').val(heaintarr);


});

var eveintarr = [];
$(document).on('click', '.eveint_select', function () {
    var id = $(this).val(); // this gives me null
    var index = eveintarr.indexOf(id);

    if ($(this).is(':checked')) {
        eveintarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            eveintarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#integrationselect_cst').val(eveintarr);
});

var smintarr = [];
$(document).on('click', '.smint_select', function () {
    var id = $(this).val(); // this gives me null
    var index = smintarr.indexOf(id);

    if ($(this).is(':checked')) {
        smintarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            smintarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#integrationselect_cst').val(smintarr);

});

var reaintarr = [];
$(document).on('click', '.reaint_select', function () {
    var id = $(this).val(); // this gives me null
    var index = reaintarr.indexOf(id);

    if ($(this).is(':checked')) {
        reaintarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            reaintarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#featuresselect_cst').val(reaintarr);


});

var odsintarr = [];
$(document).on('click', '.odsint_select', function () {
    var id = $(this).val(); // this gives me null
    var index = odsintarr.indexOf(id);

    if ($(this).is(':checked')) {
        odsintarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            odsintarr.splice(index, 1);
        }
        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#integrationselect_cst').val(odsintarr);

});

var fdintarr = [];
$(document).on('click', '.fdint_select', function () {
    var id = $(this).val(); // this gives me null
    var index = fdintarr.indexOf(id);

    if ($(this).is(':checked')) {
        fdintarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            fdintarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#integrationselect_cst').val(fdintarr);


});

var gameintarr = [];
$(document).on('click', '.gameint_select', function () {
    var id = $(this).val(); // this gives me null
    var index = gameintarr.indexOf(id);

    if ($(this).is(':checked')) {
        gameintarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            gameintarr.splice(index, 1);
        }
        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#integrationselect_cst').val(gameintarr);
});

var othintarr = [];
$(document).on('click', '.othint_select', function () {
    var id = $(this).val(); // this gives me null
    var index = othintarr.indexOf(id);

    if ($(this).is(':checked')) {
        othintarr.push(id);

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        sumValues(thismoneyval, thistimeval, thisprojecttimlineval);
    } else {
        if (index > -1) {
            othintarr.splice(index, 1);
        }

        var thismoneyval = parseInt($(this).attr('data-money'));
        var thistimeval = parseInt($(this).attr('data-timesaved'));
        var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
        subtractValues(thismoneyval, thistimeval, thisprojecttimlineval);
    }
    $('#integrationselect_cst').val(othintarr);

});


$(document).on('click', '.business_selection', function () {
    $('#businessselect_cst').val($(this).val());

    var thismoneyval = parseInt($(this).attr('data-money'));
    var thistimeval = parseInt($(this).attr('data-timesaved'));
    var thisprojecttimlineval = parseInt($(this).attr('data-projecttimeline'));
    sumValuesFirst(thismoneyval, thistimeval, thisprojecttimlineval);

    $(".select_platform").prop('checked', false);;
    $(".select_platform").prop('checked', false);;
    $(".select_audience").prop('checked', false);;
    $(".select_revenue").prop('checked', false);
    $(".select_security").prop('checked', false);
    $(".shopfeat_select").prop('checked', false);
    $(".finfeat_select").prop('checked', false);
    $(".heafear_select").prop('checked', false);
    $(".evefeat_select").prop('checked', false);
    $(".smfeat_select").prop('checked', false);
    $(".reafeat_select").prop('checked', false);
    $(".odsfeat_select").prop('checked', false);
    $(".fdfeat_select").prop('checked', false);
    $(".gamefeat_select").prop('checked', false);
    $(".othfeat_select").prop('checked', false);
    $(".shopint_select").prop('checked', false);
    $(".finint_select").prop('checked', false);
    $(".heaint_select").prop('checked', false);
    $(".eveint_select").prop('checked', false);
    $(".smint_select").prop('checked', false);
    $(".reaint_select").prop('checked', false);
    $(".odsint_select").prop('checked', false);
    $(".fdint_select").prop('checked', false);
    $(".gameint_select").prop('checked', false);
    $(".othint_select").prop('checked', false);


    if ($(this).is(':checked')) {

        if ($(this).val() == 'Shopping') {
            $("#shopping-features").removeClass("d-none");

            $("#finance-features").addClass("d-none");
            $("#health-features").addClass("d-none");
            $("#events-features").addClass("d-none");
            $("#socialmedia-features").addClass("d-none");
            $("#realestate-features").addClass("d-none");
            $("#ondemandservices-features").addClass("d-none");
            $("#fooddelivery-features").addClass("d-none");
            $("#game-features").addClass("d-none");
            $("#other-features").addClass("d-none");

            $("#shopping-integrations").removeClass("d-none");

            $("#finance-integrations").addClass("d-none");
            $("#health-integrations").addClass("d-none");
            $("#events-integrations").addClass("d-none");
            $("#socialmedia-integrations").addClass("d-none");
            $("#realestate-integrations").addClass("d-none");
            $("#ondemandservices-integrations").addClass("d-none");
            $("#fooddelivery-integrations").addClass("d-none");
            $("#game-integrations").addClass("d-none");
            $("#other-integrations").addClass("d-none");

        }
        
        else if ($(this).val() == 'Finance') {
            $("#finance-features").removeClass("d-none");

            $("#shopping-features").addClass("d-none");
            $("#health-features").addClass("d-none");
            $("#events-features").addClass("d-none");
            $("#socialmedia-features").addClass("d-none");
            $("#realestate-features").addClass("d-none");
            $("#ondemandservices-features").addClass("d-none");
            $("#fooddelivery-features").addClass("d-none");
            $("#game-features").addClass("d-none");
            $("#other-features").addClass("d-none");

            $("#finance-integrations").removeClass("d-none");

            $("#shopping-integrations").addClass("d-none");
            $("#health-integrations").addClass("d-none");
            $("#events-integrations").addClass("d-none");
            $("#socialmedia-integrations").addClass("d-none");
            $("#realestate-integrations").addClass("d-none");
            $("#ondemandservices-integrations").addClass("d-none");
            $("#fooddelivery-integrations").addClass("d-none");
            $("#game-integrations").addClass("d-none");
            $("#other-integrations").addClass("d-none");
        }
        
        else if ($(this).val() == 'Health') {
            $("#health-features").removeClass("d-none");

            $("#shopping-features").addClass("d-none");
            $("#finance-features").addClass("d-none");
            $("#events-features").addClass("d-none");
            $("#socialmedia-features").addClass("d-none");
            $("#realestate-features").addClass("d-none");
            $("#ondemandservices-features").addClass("d-none");
            $("#fooddelivery-features").addClass("d-none");
            $("#game-features").addClass("d-none");
            $("#other-features").addClass("d-none");

            $("#health-integrations").removeClass("d-none");

            $("#shopping-integrations").addClass("d-none");
            $("#finance-integrations").addClass("d-none");
            $("#events-integrations").addClass("d-none");
            $("#socialmedia-integrations").addClass("d-none");
            $("#realestate-integrations").addClass("d-none");
            $("#ondemandservices-integrations").addClass("d-none");
            $("#fooddelivery-integrations").addClass("d-none");
            $("#game-integrations").addClass("d-none");
            $("#other-integrations").addClass("d-none");
        }
        
        else if ($(this).val() == 'Events') {
            $("#events-features").removeClass("d-none");

            $("#shopping-features").addClass("d-none");
            $("#finance-features").addClass("d-none");
            $("#health-features").addClass("d-none");
            $("#socialmedia-features").addClass("d-none");
            $("#realestate-features").addClass("d-none");
            $("#ondemandservices-features").addClass("d-none");
            $("#fooddelivery-features").addClass("d-none");
            $("#game-features").addClass("d-none");
            $("#other-features").addClass("d-none");

            $("#events-integrations").removeClass("d-none");

            $("#shopping-integrations").addClass("d-none");
            $("#finance-integrations").addClass("d-none");
            $("#health-integrations").addClass("d-none");
            $("#socialmedia-integrations").addClass("d-none");
            $("#realestate-integrations").addClass("d-none");
            $("#ondemandservices-integrations").addClass("d-none");
            $("#fooddelivery-integrations").addClass("d-none");
            $("#game-integrations").addClass("d-none");
            $("#other-integrations").addClass("d-none");
        }
        
        else if ($(this).val() == 'Social Media') {
            $("#socialmedia-features").removeClass("d-none");

            $("#shopping-features").addClass("d-none");
            $("#finance-features").addClass("d-none");
            $("#health-features").addClass("d-none");
            $("#events-features").addClass("d-none");
            $("#realestate-features").addClass("d-none");
            $("#ondemandservices-features").addClass("d-none");
            $("#fooddelivery-features").addClass("d-none");
            $("#game-features").addClass("d-none");
            $("#other-features").addClass("d-none");

            $("#socialmedia-integrations").removeClass("d-none");

            $("#shopping-integrations").addClass("d-none");
            $("#finance-integrations").addClass("d-none");
            $("#health-integrations").addClass("d-none");
            $("#events-integrations").addClass("d-none");
            $("#realestate-integrations").addClass("d-none");
            $("#ondemandservices-integrations").addClass("d-none");
            $("#fooddelivery-integrations").addClass("d-none");
            $("#game-integrations").addClass("d-none");
            $("#other-integrations").addClass("d-none");
        }
        
        else if ($(this).val() == 'Real Estate') {
            $("#realestate-features").removeClass("d-none");

            $("#shopping-features").addClass("d-none");
            $("#finance-features").addClass("d-none");
            $("#health-features").addClass("d-none");
            $("#events-features").addClass("d-none");
            $("#socialmedia-features").addClass("d-none");
            $("#ondemandservices-features").addClass("d-none");
            $("#fooddelivery-features").addClass("d-none");
            $("#game-features").addClass("d-none");
            $("#other-features").addClass("d-none");

            $("#realestate-integrations").removeClass("d-none");

            $("#shopping-integrations").addClass("d-none");
            $("#finance-integrations").addClass("d-none");
            $("#health-integrations").addClass("d-none");
            $("#events-integrations").addClass("d-none");
            $("#socialmedia-integrations").addClass("d-none");
            $("#ondemandservices-integrations").addClass("d-none");
            $("#fooddelivery-integrations").addClass("d-none");
            $("#game-integrations").addClass("d-none");
            $("#other-integrations").addClass("d-none");
        }
        
        else if ($(this).val() == 'On Demand Services') {
            $("#ondemandservices-features").removeClass("d-none");

            $("#shopping-features").addClass("d-none");
            $("#finance-features").addClass("d-none");
            $("#health-features").addClass("d-none");
            $("#events-features").addClass("d-none");
            $("#socialmedia-features").addClass("d-none");
            $("#realestate-features").addClass("d-none");
            $("#fooddelivery-features").addClass("d-none");
            $("#game-features").addClass("d-none");
            $("#other-features").addClass("d-none");

            $("#ondemandservices-integrations").removeClass("d-none");

            $("#shopping-integrations").addClass("d-none");
            $("#finance-integrations").addClass("d-none");
            $("#health-integrations").addClass("d-none");
            $("#events-integrations").addClass("d-none");
            $("#socialmedia-integrations").addClass("d-none");
            $("#realestate-integrations").addClass("d-none");
            $("#fooddelivery-integrations").addClass("d-none");
            $("#game-integrations").addClass("d-none");
            $("#other-integrations").addClass("d-none");
        }
        
        else if ($(this).val() == 'Food Delivery') {
            $("#fooddelivery-features").removeClass("d-none");

            $("#shopping-features").addClass("d-none");
            $("#finance-features").addClass("d-none");
            $("#health-features").addClass("d-none");
            $("#events-features").addClass("d-none");
            $("#socialmedia-features").addClass("d-none");
            $("#realestate-features").addClass("d-none");
            $("#ondemandservices-features").addClass("d-none");
            $("#game-features").addClass("d-none");
            $("#other-features").addClass("d-none");

            $("#fooddelivery-integrations").removeClass("d-none");

            $("#shopping-integrations").addClass("d-none");
            $("#finance-integrations").addClass("d-none");
            $("#health-integrations").addClass("d-none");
            $("#events-integrations").addClass("d-none");
            $("#socialmedia-integrations").addClass("d-none");
            $("#realestate-integrations").addClass("d-none");
            $("#ondemandservices-integrations").addClass("d-none");
            $("#game-integrations").addClass("d-none");
            $("#other-integrations").addClass("d-none");
        }
        
        else if ($(this).val() == 'Game') {
            $("#game-features").removeClass("d-none");

            $("#shopping-features").addClass("d-none");
            $("#finance-features").addClass("d-none");
            $("#health-features").addClass("d-none");
            $("#events-features").addClass("d-none");
            $("#socialmedia-features").addClass("d-none");
            $("#realestate-features").addClass("d-none");
            $("#ondemandservices-features").addClass("d-none");
            $("#fooddelivery-features").addClass("d-none");
            $("#other-features").addClass("d-none");

            $("#game-integrations").removeClass("d-none");

            $("#shopping-integrations").addClass("d-none");
            $("#finance-integrations").addClass("d-none");
            $("#health-integrations").addClass("d-none");
            $("#events-integrations").addClass("d-none");
            $("#socialmedia-integrations").addClass("d-none");
            $("#realestate-integrations").addClass("d-none");
            $("#ondemandservices-integrations").addClass("d-none");
            $("#fooddelivery-integrations").addClass("d-none");
            $("#other-integrations").addClass("d-none");
        }
        
        else if ($(this).val() == 'Other') {
            $("#other-features").removeClass("d-none");

            $("#shopping-features").addClass("d-none");
            $("#finance-features").addClass("d-none");
            $("#health-features").addClass("d-none");
            $("#events-features").addClass("d-none");
            $("#socialmedia-features").addClass("d-none");
            $("#realestate-features").addClass("d-none");
            $("#ondemandservices-features").addClass("d-none");
            $("#fooddelivery-features").addClass("d-none");
            $("#game-features").addClass("d-none");

            $("#other-integrations").removeClass("d-none");

            $("#shopping-integrations").addClass("d-none");
            $("#finance-integrations").addClass("d-none");
            $("#health-integrations").addClass("d-none");
            $("#events-integrations").addClass("d-none");
            $("#socialmedia-integrations").addClass("d-none");
            $("#realestate-integrations").addClass("d-none");
            $("#ondemandservices-integrations").addClass("d-none");
            $("#fooddelivery-integrations").addClass("d-none");
            $("#game-integrations").addClass("d-none");
        }
    }
});

// var form = $("#example-advanced-form").show();
// form.steps({
//     headerTag: "h3",
//     bodyTag: "fieldset",
//     transitionEffect: "slideLeft",
//     onStepChanging: function (event, currentIndex, newIndex) {
//         if (currentIndex > newIndex) {
//             return true;
//         }
//         // Needed in some cases if the user went back (clean up)
//         if (currentIndex < newIndex) {
//             // To remove error styles
//             form.find(".body:eq(" + newIndex + ") label.error").remove();
//             form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
//         }
//         form.validate().settings.ignore = ":disabled,:hidden";
//         return form.valid();
//     },
//     onFinishing: function (event, currentIndex) {
//         form.validate().settings.ignore = ":disabled";
//         return form.valid();
//     }
// });

var form = $("#example-advanced-form");
form.validate({
    errorPlacement: function errorPlacement(error, element) { 
        element.before(error); 
    }
});

function collectSelectedInputs() {
    let selectedInputs = {
        business: $('#businessselect_cst').val(),
        platform: $('#platformselect_cst').val(),
        audience: $('#audienceselect_cst').val(),
        features: $('#featuresselect_cst').val(),
        integrations: $('#integrationselect_cst').val(),
        revenue: $('#revenueselect_cst').val(),
        security: $('#securityselect_cst').val(),
        money_saved: $('#inlineFormInputGroupA').val(),
        time_saved: $('#inlineFormInputGroupB').val(),
        project_timeline: $('#inlineFormInputGroupC').val()
    };
    
    // Create hidden input if it doesn't exist
    if ($('#selected_inputs_data').length === 0) {
        $('<input>').attr({
            type: 'hidden',
            id: 'selected_inputs_data',
            name: 'selected_inputs_data'
        }).appendTo('form');
    }
    
    // Update the hidden input value
    $('#selected_inputs_data').val(JSON.stringify(selectedInputs));
    
    return selectedInputs;
}

// Update the hidden input whenever any selection changes
$(document).on('change', '.select_platform, .select_audience, .select_revenue, .select_security, .shopfeat_select, .finfeat_select, .heafear_select, .evefeat_select, .smfeat_select, .reafeat_select, .odsfeat_select, .fdfeat_select, .gamefeat_select, .othfeat_select, .shopint_select, .finint_select, .heaint_select, .eveint_select, .smint_select, .reaint_select, .odsint_select, .fdint_select, .gameint_select, .othint_select, .business_selection', function() {
    collectSelectedInputs();
});

form.children("div").steps({
    headerTag: "h3",
    bodyTag: "fieldset",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex)
    {
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onFinishing: function (event, currentIndex)
    {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    },
    onFinished: function (event, currentIndex)
    {
        // Collect all form values
        getAllValsCCSS();
        
        // Get selected inputs and update hidden field
        collectSelectedInputs();
        
        // Show submission modal
        const submissionModal = new bootstrap.Modal(document.getElementById('submissionModal'));
        submissionModal.show();
    }
});

$(document).ready(function () {
    $('fieldset').each(function () {
        var labelCount = $(this).find('label').length;
        if (labelCount > 6) {
            $(this).addClass('more-than-6-labels');
        }
    });
});