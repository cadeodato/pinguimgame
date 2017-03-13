/*    
        @licstart  The following is the entire license notice for this page.

        Copyright (C) 2015  Carlos J. Costa

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

        As additional permission under GNU GPL version 3 section 7, you
        may distribute non-source (e.g., minimized or compacted) forms of
        that code without the copy of the GNU GPL normally required by
        section 4, provided you include this license notice and a URL
        through which recipients can access the Corresponding Source.   


        @licend  The above is the entire license notice
        for the JavaScript code in this page.
*/

    var MaxHeight, MaxWidth, YPos, XPos, interval1, interval2, interval3, interval4, moveTo, Pontos, distancia, pontua1, pontua2, pontua3, pontua4, pontua5, pontua6, pontua7, pontua8, pontua9, pontua10, contaTesouro,totalTesouro, gameOver;

function init(){
	YPos = -500;
	XPos = -250;
	pontua1=false;
	pontua2=false;
	pontua3=false;
	pontua4=false;
	pontua5=false;
	pontua6=false;
	pontua7=false;
	pontua8=false;
	pontua9=false;
	pontua10=false;
	Pontos = 0;
	distancia = 0;
	contaTesouro =0;
	totalTesouro = 6;
	gameOver = false;
	toMove = document.getElementById("scroller");
    toMove.style.backgroundPosition = XPos + "px "+YPos + "px";
	document.getElementById("pontos").innerHTML="Pontos: "+ Pontos;
	document.getElementById("tesouros").innerHTML="Tesouros a descobrir: "+ totalTesouro;
};
function ganhaPonto(qtd){
	Pontos+=qtd;
	contaTesouro ++;
	totalTesouro --;
	document.getElementById("tesouros").innerHTML="Tesouros a descobrir: "+ totalTesouro;
	document.getElementById("pontos").innerHTML="Pontos: "+ Pontos;
	alert('Tesouro descoberto! +'+qtd+' pontos!');
	if (totalTesouro==0){
		gameOver=true;
	}
	if(gameOver) {
		alert('Game Over! Todos os tesouros foram descobertos! Pontos = '+Pontos+'!');
	}
};

function Pontua(){
	if(!pontua1){
		if ((YPos>=-615)&&(YPos<=-550)&&(XPos>=-470)&&(XPos<=-395)) {
		  ganhaPonto(10);
		  pontua1=true;
		}
	}
	if(!pontua2){
		if ((YPos>=-570)&&(YPos<=-500)&&(XPos>=-670)&&(XPos<=-600)) {
			ganhaPonto(20);
		    pontua2=true;
		}
	}
	if(!pontua3){
		if ((YPos>=-220)&&(YPos<=-150)&&(XPos>=-660)&&(XPos<=-535)) {
		   perdePonto(15);
		   pontua3=true;
		}
	}
	if(!pontua4){
	     
		if ((YPos>=-230)&&(YPos<=-140)&&(XPos>=-320)&&(XPos<=-250)) {
		   ganhaPonto(15);
		   pontua4=true;
		}
	}
	if(!pontua5){
		if ((YPos>=-200)&&(YPos<=-120)&&(XPos>=-120)&&(XPos<=0)) {
		  ganhaPonto(5);
		  pontua5=true;
		}
	}
	if(!pontua6){
		if ((YPos>=-50)&&(YPos<=0)&&(XPos>=-500)&&(XPos<=360)) {
		  ganhaPonto(5);
		  pontua6=true;
		}
	}
	if(!pontua7){
		if ((YPos>=-495)&&(YPos<=-400)&&(XPos>=-220)&&(XPos<=-130)) {
		   perdePonto(15);
		   pontua7=true;
		}
	}
	if ((YPos>=-340)&&(YPos<=-285)&&(XPos>=-205)&&(XPos<=-90)) {
	   if(!pontua8){
			 alert('Campo minado! Fuja!');
  			 pontua8=true;
		  }
		  campoMinado();
	}
	if(!pontua9){
		if ((YPos<=-275)&&(YPos>=-328)&&(XPos<=-342)&&(XPos>=-405)) {
		  ganhaPonto(10);
		  pontua9=true;
		}
	}
	if ((YPos>=-360)&&(YPos<=-300)&&(XPos>=-775)&&(XPos<=-670)) {
	   if(!pontua10){
			 alert('Cuidado com o pântano!');
  			 pontua10=true;
		  }
		  campoMinado();
	}
	
};
function perdePonto(qtd){
	Pontos-=qtd;
	if (Pontos < 0){
		gameOver = true;
		alert('Game over!');
	} else {
	   document.getElementById("pontos").innerHTML="Pontos: "+ Pontos;
	   alert('Armadilha! -'+qtd+' pontos!');
	}
};
function campoMinado(){
	Pontos--;
	if (Pontos < 0){
		gameOver = true;
		alert('Game over!');
	} else {
	   document.getElementById("pontos").innerHTML="Pontos: "+ Pontos;
	}
};

function move(){
	if (!gameOver){
	  if ((YPos >= 0)||(YPos <= -700)||(XPos >= 0)||(XPos <= -1000)) {
	    stop();
	  }
	  /*
	  if ((YPos<=-275)&&(YPos>=-328)&&(XPos<=-342)&&(XPos>=-405)) {
		toMove.style.background = "url('roma.jpg')"}; */
	  toMove = document.getElementById("scroller");
	  toMove.style.backgroundPosition = XPos + "px "+YPos + "px"; 
	  /* document.getElementById("pos").innerHTML=toMove.style.backgroundPosition; */
	  distancia ++;
	  document.getElementById("distancia").innerHTML="Distancia: "+ distancia;
	  Pontua();
	}
};
function moveBx() {
	var myclass = new Array('front-right','front-stand','front-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos--;        
	move();

};
function moveCm() {
	var myclass = new Array('back-right','back-stand','back-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos++;        
	move();
};
function moveDir() {
	var myclass = new Array('right-right','right-stand','right-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos--;        
	move();
};
function moveEsq() {
	var myclass = new Array('left-right','left-stand','left-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos++;        
	move();
};

function moveB() {
	stop(); 
	interval1 = setInterval(moveBx, 50);
};
function moveC() {
	stop();
	interval3 = setInterval(moveCm, 50);
};
function moveD() {
	stop();	
	interval2 = setInterval(moveDir, 50);
};
function moveE() {
	stop();
	interval4 = setInterval(moveEsq, 50);
};
function stop() {
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
};
window.onload =init;

function Key(e) {
    if (e.keyCode===37) moveE();
    if (e.keyCode===38) moveC();
    if (e.keyCode===39) moveD();
    if (e.keyCode===40) moveB();
}