	var	t=0; 
  var v=3;
		
		function res1() {
			t=t+100;
		}
			function res2() {
		v=v-1;
        console.log(v);
    if (v==0) {
      window.location.href="lose.html";
    }
		}
			function res3() {
			v=v-1;
         if (v==0) {
      window.location.href="lose.html";
    } 
		}
			function res4() {
     v=v-1;	
         if (v==0) {
      window.location.href="lose.html";
    }
		}

  

var cp1=0;
var cp2=0;
var cp3=0;
var cp4=0;
var cp5=0;
var cp6=0;
var cp7=0;
var cp8=0;
var cp9=0;

 {}

		function aleatorio() {
       
  var a = Math.round(Math.random()*8);




  if (a==0) {

    if (cp1==0) {
  		document.getElementById('cua2').innerHTML="A que personas se las conoce como cariocas";
       cp1=1;
document.getElementById("b1").innerHTML="Provenientes de Rio de janeiro;"
document.getElementById("b2").innerHTML="Provenientes de Caracas;"
document.getElementById("b3").innerHTML="Provenientes de Canada;"
document.getElementById("b4").innerHTML="Provenientes de Caceres;"

  	}  }
   if (a==1) {

  if (cp2==0) {
  		document.getElementById('cua2').innerHTML="¿Cual es tercer planeta del sistema solar?(desde el sol)";
  		cp2=1;
 document.getElementById("b1").innerHTML="La tierra"
document.getElementById("b2").innerHTML="Marte"
document.getElementById("b3").innerHTML="Jupiter"
document.getElementById("b4").innerHTML="Saturno"
  	}
  }
   if (a==2) {

  if (cp3==0) {
  		document.getElementById('cua2').innerHTML="¿Que tipo de animal es la ballena?";		
cp3=1;
document.getElementById("b1").innerHTML="Mamifero"
document.getElementById("b2").innerHTML="Pez"
document.getElementById("b3").innerHTML="Reptil"
document.getElementById("b4").innerHTML="Ave"
  	}
  	
  }
   if (a==3) {

  if (cp4==0) {
  		document.getElementById('cua2').innerHTML="¿Cuantos años tiene un lustro?";
  		
cp4=1;
document.getElementById("b1").innerHTML="5;"
document.getElementById("b2").innerHTML="10"
document.getElementById("b3").innerHTML="11"
document.getElementById("b4").innerHTML="50"
  	}
  } 
  if (a==4) {

  if (cp5==0) {
  		document.getElementById('cua2').innerHTML="Que rama de la Biologia se encarga del estudio de los animales";
  		cp5=1;
document.getElementById("b1").innerHTML="Zoologia"
document.getElementById("b2").innerHTML="Morfologia"
document.getElementById("b3").innerHTML="Astrologia"
document.getElementById("b4").innerHTML="Taxonomia"
  	}
  }
   if (a==5) {

  if (cp6==0) {
  		document.getElementById('cua2').innerHTML="¿Cual es la capital de Turquia?";
  		cp6=1;
document.getElementById("b1").innerHTML="Ankara"
document.getElementById("b2").innerHTML="Antalya"
document.getElementById("b3").innerHTML="Estambul"
document.getElementById("b4").innerHTML="Bursa"
  	}
  }
   if (a==6) {

  if (cp7==0) {
  		document.getElementById('cua2').innerHTML="¿Cual es la capital de Venezuela?";
  		cp7=1;
      document.getElementById("b1").innerHTML="Caracas"
document.getElementById("b2").innerHTML="Miraflores"
document.getElementById("b3").innerHTML="Maracay"
document.getElementById("b4").innerHTML="Valencia"
  	}
  }
   if (a==7) {

  if (cp8==0) {
  		document.getElementById('cua2').innerHTML="¿cuando se termino la segunda guerra mundial?";
  		
 	cp8=1;
  document.getElementById("b1").innerHTML="1945"
document.getElementById("b2").innerHTML="1845"
document.getElementById("b3").innerHTML="1855"
document.getElementById("b4").innerHTML="1940"
  	}
 
  }
   if (a==8) {

  if (cp9==0) {
      document.getElementById('cua2').innerHTML="¿cual es la capital del mundo?";
      
  cp9=1;
  document.getElementById("b1").innerHTML="New york"
document.getElementById("b2").innerHTML="Medellin"
document.getElementById("b3").innerHTML="Tokio"
document.getElementById("b4").innerHTML="Paris"
    }
 
  }
    var cpt=cp1+cp3+cp8+cp7+cp6+cp5+cp2+cp4+cp9;
 

  
  if (cpt==9) {

    document.getElementById('cua2').innerHTML="tus puntos son   " + t;
    document.getElementById('b1').style.display = 'none';
    document.getElementById('b2').style.display = 'none';
    document.getElementById('b3').style.display = 'none';
    document.getElementById('b4').style.display = 'none';
}
}