
function calc(){
    var w = document.getElementById("width").value;
    var l = document.getElementById("len").value;
    var area = w * l;
    var perimeter = 2*(l)+2*(w);
    var result1 = `Area is : ${area} sq. mtr.` ; 
    var result2 =  `Perimeter is : ${perimeter} sq. mtr.` ; 
    document.getElementById("output1").innerHTML = result1; 
    document.getElementById("output2").innerHTML = result2;
}
  