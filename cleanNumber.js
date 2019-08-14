function cleanNumber(value) {
  value = value + "";
  return (value.indexOf('.') == -1 ? (value.charAt(0) == '-' ? '-' : '') + value.replace(/\D/g, '') : (value.charAt(0) == '-' ? '-' : '') + value.substr(0, value.indexOf('.')).replace(/\D/g, '') + "." + value.split('.')[1].replace(/\D/g, ''));
}