$(function () {
  $("#button").click(function (e) {
    e.preventDefault();

    const trackCode = $('#trackCode').val();
    const shippingCode = $('#shippingCode').val();

    if (shippingCode.length >= 1) {
      $('.error-1').show();
    } else {
      $('.error-1').hide();
    }

    if (trackCode.length === 0 && shippingCode.length === 0) {
      $('.error-2').show();
    } else {
      $('.error-2').hide();
    }

    if (trackCode.length > 1 && trackCode.match(/^MX\d{9}ZK$/) && shippingCode.length === 0) {
      $('.error-3').show();
    } else {
      $('.error-3').hide();
    }

    if (trackCode.length > 1 && !trackCode.match(/^MX\d{9}ZK$/)) {
      $('.error-4').show();
    } else {
      $('.error-4').hide();
    }
  });
});
