var cabaña_img,background_img,personaje_1,personaje_2,personaje_3,personaje_4;

var Button,Button_2,Button_3,Button_4,Button_5,Button_6,Button_7,Button_8,Button_9,Button_10,Button_11,Button_12,Button_13,Button_14,Button_15,Button_16,Button_17,Button_18,Button_19,Button_20,Button_21,Button_22,Button_23,Button_24,Button_25;

var button_1,button_2,button_3,button_4,button_5,button_6;

var dialogo_narrador1,dialogo_narrador2,dialogo_narrador3,dialogo_narrador4,dialogo_narrador5,dialogo_narrador6,dialogo_narrador7,dialogo_narrador8,dialogo_narrador9,dialogo_narrador10,dialogo_narrador11,dialogo_narrador12,dialogo_narrador13,dialogo_narrador14,dialogo_narrador15,dialogo_narrador16,dialogo_narrador17;

var dialogo_jake1,dialogo_jake2,dialogo_jake3,dialogo_jake4,dialogo_jake5;

var dialogo_esteicie1,dialogo_esteicie2;

var dialogo_jimena1;

var dialogo_samuel1,dialogo_samuel2;

var bandera = 0;

var sprite_1,sprite_2;

var barra_1;

function preload(){
cabaña_img = loadImage("./imagenes/Cabaña.jpg");
background_img = loadImage("./imagenes/background.jpg");
interior_img = loadImage("./imagenes/interior de la cabaña.jpg");
cuarto_img = loadImage("./imagenes/cuarto desordenado.jpg");
bosque_img = loadImage("./imagenes/bosque_02.jpg");

personaje_1 = loadImage("./imagenes/Jake.png");
personaje_2 = loadImage("./imagenes/Esteicie.png");
personaje_3 = loadImage("./imagenes/Jimena.png");
personaje_4 = loadImage("./imagenes/Samuel.png");

dialogo_narrador1 = loadImage("./narrador/Narrador(1).png");
dialogo_narrador2 = loadImage("./narrador/Narrador(2).png");
dialogo_narrador3 = loadImage("./narrador/Narrador(3).png");
dialogo_narrador4 = loadImage("./narrador/Narrador(4).png");
dialogo_narrador5 = loadImage("./narrador/Narrador(5).png");
dialogo_narrador6 = loadImage("./narrador/Narrador(6).png");
dialogo_narrador7 = loadImage("./narrador/Narrador(7).png");
dialogo_narrador8 = loadImage("./narrador/Narrador(8).png");
dialogo_narrador9 = loadImage("./narrador/Narrador(9).png");
dialogo_narrador10 = loadImage("./narrador/Narrador(10).png");
dialogo_narrador11 = loadImage("./narrador/Narrador(11).png");
dialogo_narrador12 = loadImage("./narrador/Narrador(12).png");
dialogo_narrador13 = loadImage("./narrador/Narrador(13).png");
dialogo_narrador14 = loadImage("./narrador/Narrador(14).png");
dialogo_narrador15 = loadImage("./narrador/Narrador(15).png");
dialogo_narrador16 = loadImage("./narrador/Narrador(16).png");
dialogo_narrador17 = loadImage("./narrador/Narrador(17).png");
final_principal = loadImage("./narrador/Final.png");

dialogo_jake1 = loadImage("./personajes/Jake(1).png");
dialogo_jake2 = loadImage("./personajes/Jake(2).png");
dialogo_jake3 = loadImage("./personajes/Jake(3).png");
dialogo_jake4 = loadImage("./personajes/Jake(4).png");
dialogo_jake5 = loadImage("./personajes/Jake(5).png");

dialogo_esteicie1 = loadImage("./personajes/Esteicie(1).png");
dialogo_esteicie2 = loadImage("./personajes/Esteicie(2).png");

dialogo_jimena1 = loadImage("./personajes/Jimena(1).png");

dialogo_samuel1 = loadImage("./personajes/Samuel(1).png");
dialogo_samuel2 = loadImage("./personajes/Samuel(2).png");
}

function setup(){
  var isMobile=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    canW = displayWidth;
    canH = displayHeight;
    createCanvas(displayWidth+80,displayHeight);
  }
  else{
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth,windowHeight);
  }

  Button = createButton('continuar');
  Button.position(width/2,height-100);
  Button.scale = 5;
  Button.mousePressed(Escenarios);
   
  sprite_1 = createSprite(width,height);
  sprite_1.addImage("escenario_1",background_img);
  sprite_1.addImage("escenario_2",interior_img);
  sprite_1.addImage("cuarto",cuarto_img);
  sprite_1.addImage("bosque",bosque_img);
  sprite_1.visible = false;

  barra_1 = createSprite(width/2,height-160);
  barra_1.addImage("narrador",dialogo_narrador1);
  barra_1.addImage("narrador_2",dialogo_narrador2);
  barra_1.addImage("narrador_3",dialogo_narrador3);
  barra_1.addImage("narrador_4",dialogo_narrador4);
  barra_1.addImage("narrador_5",dialogo_narrador5);
  barra_1.addImage("narrador_6",dialogo_narrador6);
  barra_1.addImage("narrador_7",dialogo_narrador7);
  barra_1.addImage("narrador_8",dialogo_narrador8);
  barra_1.addImage("narrador_9",dialogo_narrador9);
  barra_1.addImage("narrador_10",dialogo_narrador10);
  barra_1.addImage("narrador_11",dialogo_narrador11);
  barra_1.addImage("narrador_12",dialogo_narrador12);
  barra_1.addImage("narrador_13",dialogo_narrador13);
  barra_1.addImage("narrador_14",dialogo_narrador14);
  barra_1.addImage("narrador_15",dialogo_narrador15);
  barra_1.addImage("narrador_16",dialogo_narrador16);
  barra_1.addImage("narrador_17",dialogo_narrador17);
  barra_1.addImage("final",final_principal);
  barra_1.addImage("jake_1",dialogo_jake1);
  barra_1.addImage("jake_2",dialogo_jake2);
  barra_1.addImage("jake_3",dialogo_jake3);
  barra_1.addImage("jake_4",dialogo_jake4);
  barra_1.addImage("jake_5",dialogo_jake5);
  barra_1.addImage("esteicie_1",dialogo_esteicie1);
  barra_1.addImage("esteicie_2",dialogo_esteicie2);
  barra_1.addImage("jimena",dialogo_jimena1);
  barra_1.addImage("samuel_1",dialogo_samuel1);
  barra_1.addImage("samuel_2",dialogo_samuel2);
  barra_1.visible= false;
  
  sprite_2 = createSprite(width-(width-500),height-300);
  sprite_2.addImage("Jake",personaje_1);
  sprite_2.addImage("Esteicie",personaje_2);
  sprite_2.addImage("Jimena",personaje_3);
  sprite_2.addImage("Samuel",personaje_4);
  sprite_2.visible = false;

}

function draw(){
background(189);
image(cabaña_img,0,0,width,height);

fill("#F0F0F0");
textSize(20);
text(`Tu y tus amigos rentaron una cabaña en el bosque, donde van a tomarse un descanso 
despues de estar jugando fueron todos a sus habitaciones para dormir, pero tu despertaste 
por un ruido`,width-(width-20),height-100);
//textAlign(CENTER, CENTER);
drawSprites();
}

function Escenarios() {
  console.log("hola");
  Button.hide();
 
  sprite_1.visible = true;
  sprite_1.changeImage("escenario_1");

  button_1 = createButton('Volver a dormir');
  button_1.position(width/2,height/2);
  button_1.mousePressed(opcion1);

  button_2 = createButton('Ir a investigar');
  button_2.position(width/2,height/2+30);

}

function opcion1(){
  console.log("opcion1");
  button_1.hide();
  button_2.hide();
  
  sprite_1.visible = true;
  sprite_1.changeImage("escenario_2");

  barra_1.visible = true;
  barra_1.changeImage("narrador");
  //barra_1.scale = 0.9;

  Button_2 = createButton('continuar');
  Button_2.position(width-(width-60),height-100);
  Button_2.mousePressed(cuarto);
}

function cuarto(){
  console.log("cuarto");  
  //sprite_1.visible = true;
  Button_2.hide();
  sprite_1.changeImage("cuarto");
  barra_1.changeImage("narrador_2");
//hacer funciones 
  Button_3 = createButton('continuar');
  Button_3.position(width-(width-60),height-100);
  Button_3.mousePressed(() => {  
    Button_3.hide();                  
    sprite_1.changeImage("escenario_2");
    barra_1.changeImage("narrador_3");
    Button_4 = createButton('continuar');
    Button_4.position(width-(width-60),height-100);
    Button_4.mousePressed(cambio);
  });
}

function cambio(){
  console.log("cambio"); 
  //sprite_1.visible = true;
  Button_4.hide();
  barra_1.visible = true;
  sprite_1.changeImage("bosque");
  barra_1.changeImage("narrador_4");
  
  button_3 = createButton('Decirle a tus amigos');
  button_3.position(width/2,height/2);
  button_3.mousePressed(cambio2);
 
  button_4 = createButton('No decirles');
  button_4.position(width/2,height/2+30);
} 

function cambio2(){
  console.log("cambio2");  
  //sprite_1.visible = true;
  //barra_1.visible = true;
  button_3.hide();
  button_4.hide();
  sprite_1.changeImage("escenario_2");
  barra_1.changeImage("narrador_5");
  Button_5 = createButton('continuar');
  Button_5.position(width-(width-60),height-100);
  Button_5.mousePressed(chatJake);
}

function chatJake(){
  Button_5.hide();
  sprite_2.visible = true;
  sprite_2.changeImage("Jake");
  sprite_2.depth = barra_1.depth;
  barra_1.depth = barra_1.depth + 1; 
  barra_1.changeImage("jake_1")
  Button_6 = createButton('continuar');
  Button_6.position(width-(width-60),height-100);
  Button_6.mousePressed(() => {
    sprite_2.visible = false;
    Button_6.hide();
    barra_1.changeImage("narrador_6");
    Button_7 = createButton('continuar');
    Button_7.position(width-(width-60),height-100);
    Button_7.mousePressed(chatEsteicie);
  });
}

function chatEsteicie(){
  Button_7.hide();
  sprite_2.visible = true;
  sprite_2.changeImage("Esteicie");
  sprite_2.depth = barra_1.depth;
  barra_1.depth = barra_1.depth + 1; 
  barra_1.changeImage("esteicie_1");
  Button_8 = createButton('continuar');
  Button_8.position(width-(width-60),height-100);
  Button_8.mousePressed(() => {
    Button_8.hide();
    sprite_2.visible = true;
    sprite_2.changeImage("Jimena");
    sprite_2.depth = barra_1.depth;
    barra_1.depth = barra_1.depth + 1; 
    barra_1.changeImage("jimena");
    Button_9 = createButton('continuar');
    Button_9.position(width-(width-60),height-100);
    Button_9.mousePressed(chatNarrador);
  });
}

function chatNarrador(){
  Button_9.hide();
  sprite_2.visible = false;
  barra_1.changeImage("narrador_7");
  Button_10 = createButton('continuar');
  Button_10.position(width-(width-60),height-100);
  Button_10.mousePressed(() => {
    Button_10.hide();
    sprite_2.visible = true;
    sprite_2.changeImage("Esteicie");
    sprite_2.depth = barra_1.depth;
    barra_1.depth = barra_1.depth + 1; 
    barra_1.changeImage("esteicie_2");
    Button_11 = createButton('continuar');
    Button_11.position(width-(width-60),height-100);
    Button_11.mousePressed(chatJake_2); 
  });
}

function chatJake_2(){
  Button_11.hide();
  sprite_2.visible = true;
  sprite_2.changeImage("Jake");
  sprite_2.depth = barra_1.depth;
  barra_1.depth = barra_1.depth + 1; 
  barra_1.changeImage("jake_2");
  Button_12 = createButton('continuar');
  Button_12.position(width-(width-60),height-100);
  Button_12.mousePressed(() => {
    sprite_2.visible = false;
    Button_12.hide();
    sprite_1.changeImage("bosque");
    barra_1.changeImage("narrador_8");
    Button_13 = createButton('continuar');
    Button_13.position(width-(width-60),height-100);
    Button_13.mousePressed(chatJake_3);
    });
}

function chatJake_3(){
  Button_13.hide();
  sprite_2.visible = true;
  sprite_2.changeImage("Jake");
  sprite_2.depth = barra_1.depth;
  barra_1.depth = barra_1.depth + 1; 
  //cambiar luego de crear el dialogo correcto que es "no, pero tenemos que ir a buscar a Samuel cierto"
  barra_1.changeImage("jake_5");
  Button_14 = createButton('continuar');
  Button_14.position(width-(width-60),height-100);
  Button_14.mousePressed(() => {
    barra_1.visible = true;
    sprite_2.visible = false;
    Button_14.hide(); 
    barra_1.changeImage("narrador_9");

    button_5 = createButton('Seguir y buscar mas huellas');
    button_5.position(width/2,height/2);
    button_5.mousePressed(climax);

    button_6 = createButton('Regresar a la cabaña');
    button_6.position(width/2,height/2+30);
  });
}

function climax(){ 
  button_5.hide();
  button_6.hide();
  barra_1.changeImage("narrador_10");
  Button_15 = createButton('continuar');
  Button_15.position(width-(width-60),height-100);
  Button_15.mousePressed(() => {
    sprite_2.visible = false;
    barra_1.changeImage("narrador_11");
    sprite_2.visible = true;
    sprite_2.changeImage("Jake");
    sprite_2.depth = barra_1.depth;
    barra_1.depth = barra_1.depth + 1; 
    barra_1.changeImage("jake_3");
    Button_16 = createButton('continuar');
    Button_16.position(width-(width-60),height-100);
    Button_16.mousePressed(rescateaSamuel);
  });
}

function rescateaSamuel(){
  barra_1.changeImage("narrador_12");
  Button_17 = createButton('continuar');
  Button_17.position(width-(width-60),height-100);
  Button_17.mousePressed(() => {
    barra_1.changeImage("narrador_13");
    Button_18 = createButton('continuar');
    Button_18.position(width-(width-60),height-100);
    Button_18.mousePressed(rescateaSamuel_2);
  });
} 

function rescateaSamuel_2(){
  sprite_2.visible = true;
  sprite_2.changeImage("Jake");
  sprite_2.depth = barra_1.depth;
  barra_1.depth = barra_1.depth + 1; 
  barra_1.changeImage("jake_4");
  Button_19 = createButton('continuar');
  Button_19.position(width-(width-60),height-100);
  Button_19.mousePressed(() =>{
    sprite_2.visible = false;
    barra_1.changeImage("narrador_14");
    Button_20 = createButton('continuar');
    Button_20.position(width-(width-60),height-100);
    Button_20.mousePressed(chatSamuel);
  });
}

function chatSamuel(){
  sprite_2.visible = true;
  sprite_2.changeImage("Samuel");
  sprite_2.depth = barra_1.depth;
  barra_1.depth = barra_1.depth + 1; 
  barra_1.changeImage("samuel_1");
  Button_21 = createButton('continuar');
  Button_21.position(width-(width-60),height-100);
  Button_21.mousePressed(() => {
    sprite_2.visible = false;
    barra_1.changeImage("narrador_15");
    Button_22 = createButton('continuar');
    Button_22.position(width-(width-60),height-100);
    Button_22.mousePressed(chatSamuel_2);
  });
}

function chatSamuel_2(){
  sprite_2.visible = true;
  sprite_2.changeImage("Samuel");
  sprite_2.depth = barra_1.depth;
  barra_1.depth = barra_1.depth + 1; 
  barra_1.changeImage("samuel_2");
  Button_23 = createButton('continuar');
  Button_23.position(width-(width-60),height-100);
  Button_23.mousePressed(() => {
    sprite_2.visible = false;
    Button_23.hide();
    barra_1.changeImage("narrador_16");
    Button_24 = createButton('continuar');
    Button_24.position(width-(width-60),height-100);
    Button_24.mousePressed(final);
  });
}

function final(){
  barra_1.changeImage("narrador_17");
  Button_25 = createButton('continuar');
  Button_25.position(width-(width-60),height-100);
  Button_25.mousePressed(() => {
    Button_25.hide();
    sprite_1.changeImage("escenario_1");
    barra_1.changeImage("final");
  });
  

}