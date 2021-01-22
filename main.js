
//Tomas las imagenes de las piezas luego con el math.random las mueve de manera aleatorea en posiciones dif a las que tenía
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

boardPositions = {
    "row-1-col-1": {siblings: [ "row-1-col-2", "row-2-col-1"], final: "1.jpg" },
    "row-1-col-2": {siblings: [ "row-1-col-1", "row-1-col-3", "row-2-col-2"], final: "2.jpg" },
    "row-1-col-3": {siblings: [ "row-1-col-2", "row-1-col-4", "row-2-col-3"], final: "3.jpg" },
    "row-1-col-4": {siblings: [ "row-1-col-3", "row-2-col-4"], final: "4.jpg" },
    "row-2-col-1": {siblings: [ "row-1-col-1", "row-2-col-2", "row-3-col-1"], final: "5.jpg" },
    "row-2-col-2": {siblings: [ "row-1-col-2", "row-2-col-1", "row-2-col-3", "row-3-col-2"], final: "6.jpg" },
    "row-2-col-3": {siblings: [ "row-1-col-3", "row-2-col-2", "row-2-col-4", "row-3-col-3"], final: "7.jpg" },
    "row-2-col-4": {siblings: [ "row-1-col-4", "row-2-col-3", "row-3-col-4"], final: "8.jpg" },
    "row-3-col-1": {siblings: [ "row-2-col-1", "row-3-col-2", "row-4-col-1"], final: "9.jpg" },
    "row-3-col-2": {siblings: [ "row-2-col-2", "row-3-col-1", "row-3-col-3", "row-4-col-2"], final: "10.jpg" },
    "row-3-col-3": {siblings: [ "row-2-col-3", "row-3-col-2", "row-3-col-4", "row-4-col-3"], final: "11.jpg" },
    "row-3-col-4": {siblings: [ "row-2-col-4", "row-3-col-3", "row-4-col-4"], final: "12.jpg" },
    "row-4-col-1": {siblings: [ "row-3-col-1", "row-4-col-2"], final: "13.jpg" },
    "row-4-col-2": {siblings: [ "row-3-col-2", "row-4-col-1", "row-4-col-3"], final: "14.jpg" },
    "row-4-col-3": {siblings: [ "row-3-col-3", "row-4-col-2", "row-4-col-4"], final: "15.jpg" },
    "row-4-col-4": {siblings: [ "row-3-col-4", "row-4-col-3"], final: "16.jpg" }
}

var id_blank_space = "row-4-col-4";

//Mueve las fichas de un lado a otro
function shiftPuzzlepieces(el) {   
   if(is_blank_sibling(el.id, id_blank_space)){
       console.log(document.getElementById(el.id));
       console.log(document.getElementById(id_blank_space));
        let hold_image = document.getElementById(el.id).style.cssText;
        document.getElementById(el.id).style.cssText = document.getElementById(id_blank_space).style.cssText;
        document.getElementById(id_blank_space).style.cssText = hold_image;
        let hold_textContext= document.getElementById(el.id).textContent;
        document.getElementById(el.id).textContent = document.getElementById(id_blank_space).textContent;
        document.getElementById(id_blank_space).textContent = hold_textContext;
        id_blank_space = el.id;
   }
}

function is_blank_sibling(el_id, blank){
    return boardPositions[el_id]["siblings"].includes(blank);
}

