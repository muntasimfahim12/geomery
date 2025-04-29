function calculateEllipseArea() {

const major = getInputValueById('ellipse-major');
const minor = getInputValueById('ellipse-minor');

const area = 3.14 * major * minor;
setInnerTextById('ellipse-area', area);


}