## PROYECTO: CIPHER CESAR
Cipher Cesar es un sistema que permite encriptar y desencriptar una palabra.
### Pseudocódigo
#### Encriptar:
-Creamos una variable que guarde el tipo de operación que realizará el usuario(encriptar, descriptar o salir)
- Creamos una variable que guarde la palabra ingresada por el usuario.
- Validamos que el dato sea de tipo string
- Creamos la función cipher, dentro creamos una variable array vacío donde posteriormente se guardará nuestra palabra encriptada.
- Creamos un for para recorrer cada letra de la palabra, esto nos permitirá obtener el código ASCII de cada uno.
- Calculamos el código encriptado ASCIIy lo guadamos en una variable. La fórmula es ((codAsciiFirst + 65)-33)%26 +65
- Obtenemos la letra del código encriptado y lo guardamos en el array vació que ya está creada.
- Cuando nuestro for haya recorrido todas las letras de la palabra, lo convertimos en un string.
#### Desencriptar:
- Para desencriptar, creamos una función llamada Decipher muy parecida al anterior.
- Para descriptar utilizamos la fórmula:
La fórmula es ((codAsciiFirst + 65)-33)%26 +65
- Obtenemos el código desencriptado ASCII y lo guardamos en un array creado al inicio de la función.
- Cuando obtuvimos todas las letras descencriptadas, las imprimimos como un string.
### Diagrama de Flujo
[DiagramaFlujo](https://cloud.smartdraw.com/editor.aspx?templateId=e013bd54-0467-465e-8953-b2ee7e134d9e#depoId=6508986&credID=-19987432)
