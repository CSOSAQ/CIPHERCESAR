//creamos una variable que guarde el tipo de operación que va realizar el usuario 1. cifarr, 2. descifrar
var typeoper = prompt("Que operación desea realizar \n 1. Cifrar \n 2. Descifrar \n 3. Salir")

if (typeoper == 1){// Ingresando a la operación cifrar
    //creamos una variable que guarde el texto que ingresará el usuario
    var str= prompt("Ingrese el texto a encripar")
// antes de ingresar a la función creamos una condición que solo permita string
   var typestr=parseInt(str);
    if(Number.isInteger(typestr) != true){
        //si es string ingresará a la función al cual llamaremos cipher
        function cipher(str){
            //creamos un array para guardar cada letra encriptada
            var newarr=[];
         //creamos un for que recorra cada letra del texto
         for(i=0; i< str.length;i++){
             //aseguramos que el texto esté en mayúscula
             var phrase =str.toUpperCase();
            //obtenemos el número ASCII de cada letra
            var codAscii= phrase.charCodeAt(i);
            // calculamos el código Ascii de la letra
            var letterCipher= ((codAscii -65) + 33)%26 +65;
            //obtenemos la letra del codigo encriptado
            var getLetter = String.fromCharCode(letterCipher);
    
            newarr.push(getLetter);
            //creamos una variable que guarde la phase encriptada
            var phraseCipher = newarr.join("");

         }
         // Imprimimos el texto encriptado
            alert(phraseCipher);
        }
        cipher(str);
    }
else{
    alert("Debe ingresar un texto")
}
}
else if( typeoper == 2){
    var str= prompt("Ingrese el texto a desencriptar") // obtenemos el texto a desencriptar
    var typestr=parseInt(str);
    if(Number.isInteger(typestr) != true){
        //si es string ingresará a la función al cual llamaremos decipher
        function decipher(str){
            //creamos un array para guardar cada letra desencriptada
            var newarr=[];
         //creamos un for que recorra cada letra del texto
         for(i=0; i< str.length;i++){
             //aseguramos que el texto esté en mayúscula
             var phrase =str.toUpperCase();
            //obtenemos el número ASCII de cada letra
            var codAscii= phrase.charCodeAt(i);
            // calculamos el código Ascii de la letra
            var letterDecipher= ((codAscii +65) - 33)%26 +65;
            //obtenemos la letra del codigo desencriptado
            var getLetter = String.fromCharCode(letterDecipher);
    
            newarr.push(getLetter);
            //creamos una variable que guarde la phase desencriptada
            var phraseDecipher = newarr.join("");

         }
         // Imprimimos el texto desencriptado
            alert(phraseDecipher);
        }
        decipher(str);
    }

}

else if (typeoper == 3){ // si el usuario ingresa 3  para salir, imprimirenmos "Gracias por su visita"
alert("Gracias por su visita");
}
else{ // si el usuario no ingresa un dato se imprimirá "Debe ingresar un texto"
    alert("Debe ingresar un número de operación")
    
}