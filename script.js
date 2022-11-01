document.getElementById("button").addEventListener("click", foo); 
var k = 0; 
 
async function foo(){ 
        k++; 
 
        var data = await fetch(`https://api-thirukkural.vercel.app/api?num=${k}`); 
        // var data = await fetch(`https://api-thirukkural.vercel.app/api?num=${data1.number}`) 
 
        var data1 = await data.json(); 
 
        console.log(data1); 
 
        document.getElementById("content").innerHTML=`${data1.line1} <br> ${data1.line2}`; 
        document.getElementById("title").innerHTML=`${data1.chap_tam}`
 
}
