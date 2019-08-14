function cleanNumber(value) {
  value = value + "";
  if (value.indexOf('.') == -1) {
    return (value.charAt(0) == '-' ? '-' : '') + value.replace(/\D/g, '');
  } else {
    var sLeft = value.substr(0, value.indexOf('.'));
    var sRight = value.split('.')[1];
    return (value.charAt(0) == '-' ? '-' : '') + sLeft.replace(/\D/g, '') + "." + sRight.replace(/\D/g, '');
  }
}