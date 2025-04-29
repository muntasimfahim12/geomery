function calculateRectangleArea(){
    //get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length  = parseFloat(lengthText);
    console.log(lengthText);



    // // get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width)


    //calculate rectangle area

    const area = length * width;
    console.log('area of the rectangle', area);

    //display rectangle-area
    const RectangleAreaSpan = document.getElementById('rectangle-area');
    RectangleAreaSpan.innerText = area;
}