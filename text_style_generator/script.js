$(function(){
    let rangeFront          = $('.front');
    let offsetOX            = $('.ox');
    let offsetOY            = $('.oy');
    let rangeBlur           = $('.blur');
    let rangeTrans          = $('.transparency');
    let changeColorShdw     = $('.block_color_shdw > input[type="color"]');
    let changeColorText     = $('.block_color_text > input[type="color"]');

    let positionText        = $('#position');

    let buttonCopy          = $('input[type="button"]');

    let value_color_shdw    = changeColorShdw.val();
    let value_color_text    = changeColorText.val();

    let value_front         = $('.h_front > b').text(rangeFront.val());
    let value_ox            = $('.h_ox > b').text(offsetOX.val());    
    let value_oy            = $('.h_oy > b').text(offsetOY.val());
    let value_blur          = $('.h_blur > b').text(rangeBlur.val());
    let value_trans         = $('.h_trans > b').text(rangeTrans.val());

    let resultCssCode       = $('.code_css');
    let shadowResult        = $('.shadow_result');

    changeResult();    

    buttonCopy.on('click', function(){
        let temp = $('<input>');
        $('body').append(temp);
        temp.val(resultCssCode.text()).select();
        document.execCommand('copy');
        temp.remove();
    });

    offsetOX.on('input', function(){
        value_ox.text(offsetOX.val());
        changeResult();
    });

    offsetOY.on('input', function(){
        value_oy.text(offsetOY.val());
       changeResult();
    });

    rangeFront.on('input', function(){
        value_front.text(rangeFront.val());
        changeResult();
    });

    rangeBlur.on('input', function(){
        value_blur.text(rangeBlur.val());
        changeResult();
    });

    rangeTrans.on('input', function(){
        value_trans.text(rangeTrans.val());
        changeResult();
    });
    
    changeColorShdw.on('input', function(){
        value_color_shdw = changeColorShdw.val();
        changeResult();
    });

    changeColorText.on('input', function(){
        value_color_text = changeColorText.val();
        changeResult();
    });

    positionText.on('change', function(){
        changeResult();
    });

    function changeResult(){
        shadowResult = $('.shadow_result').css({'text-shadow' : `${offsetOX.val()}px ${offsetOY.val()}px ${rangeBlur.val()}px ${value_color_shdw}`,
                         'font-size' : `${rangeFront.val()}px`,
                         'text-align' : `${positionText.val()}`,
                         'color' : `rgb(${getColorText()},${rangeTrans.val()})`});
        printResult();
    }  

    function printResult(){
        resultCssCode.text(`text-shadow: ${shadowResult.css('text-shadow')}; font-size: ${shadowResult.css('font-size')}; text-align: ${shadowResult.css('text-align')}; color: ${shadowResult.css('color')};`);
    }

    function getColorText(){
        return value_color_text.match(/[^#]./g).map(item => parseInt(item, 16));
    }

});
