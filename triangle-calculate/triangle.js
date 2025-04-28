





//get triangle base value
function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log( base)
 
 
 
 // get hight value
 const triangleHightInput =document.getElementById('triangle-hight');
 const triangleHightText = triangleHightInput.value;
 const hight =parseFloat(triangleHightText)
 console.log(hight);
 
 
 // calculate triangle area
 const area = 0.5 * base * hight;
 console.log('area of the triangle is', area)
 
 
 
 // display triangle-area
 const triangleAreaSpan = document.getElementById('triangle-area');
 triangleAreaSpan.innerText = area;
 } 
 
 