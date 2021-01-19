  function startGame(){
    var imagePosition = Array.from({length: 15}, (_, i) => i + 1).sort(() => Math.random() - 0.5);

    document.getElementById('row-1-col-1').textContent = imagePosition[0];
    document.getElementById('row-1-col-1').style.background = 'url('+imagePosition[0]+'.jpg)'; 

    document.getElementById('row-1-col-2').textContent = imagePosition[1];
    document.getElementById('row-1-col-2').style.background = 'url('+imagePosition[1]+'.jpg)'; 

    document.getElementById('row-1-col-3').textContent = imagePosition[2];
    document.getElementById('row-1-col-3').style.background = 'url('+imagePosition[2]+'.jpg)'; 

    document.getElementById('row-1-col-4').textContent = imagePosition[3];
    document.getElementById('row-1-col-4').style.background = 'url('+imagePosition[3]+'.jpg)'; 

    document.getElementById('row-2-col-1').textContent = imagePosition[4];
    document.getElementById('row-2-col-1').style.background = 'url('+imagePosition[4]+'.jpg)'; 

    document.getElementById('row-2-col-2').textContent = imagePosition[5];
    document.getElementById('row-2-col-2').style.background = 'url('+imagePosition[5]+'.jpg)'; 

    document.getElementById('row-2-col-3').textContent = imagePosition[6];
    document.getElementById('row-2-col-3').style.background = 'url('+imagePosition[6]+'.jpg)'; 

    document.getElementById('row-2-col-4').textContent = imagePosition[7];
    document.getElementById('row-2-col-4').style.background = 'url('+imagePosition[7]+'.jpg)'; 

    document.getElementById('row-3-col-1').textContent = imagePosition[8];
    document.getElementById('row-3-col-1').style.background = 'url('+imagePosition[8]+'.jpg)'; 

    document.getElementById('row-3-col-2').textContent = imagePosition[9];
    document.getElementById('row-3-col-2').style.background = 'url('+imagePosition[9]+'.jpg)'; 

    document.getElementById('row-3-col-3').textContent = imagePosition[10];
    document.getElementById('row-3-col-3').style.background = 'url('+imagePosition[10]+'.jpg)'; 

    document.getElementById('row-3-col-4').textContent = imagePosition[11];
    document.getElementById('row-3-col-4').style.background = 'url('+imagePosition[11]+'.jpg)'; 

    document.getElementById('row-4-col-1').textContent = imagePosition[12];
    document.getElementById('row-4-col-1').style.background = 'url('+imagePosition[12]+'.jpg)'; 

    document.getElementById('row-4-col-2').textContent = imagePosition[13];
    document.getElementById('row-4-col-2').style.background = 'url('+imagePosition[13]+'.jpg)'; 

    document.getElementById('row-4-col-3').textContent = imagePosition[14];
    document.getElementById('row-4-col-3').style.background = 'url('+imagePosition[14]+'.jpg)'; 
 
}
