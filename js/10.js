// Explicación simple
var frase = prompt( 'Escribe una frase' ),
    invFrase = frase .split('') .reverse() .join('');

console .log( frase, invFrase );

if( invFrase == frase ) {
    console.log( 'Es palindromo' );
}
else {
    console.log( 'No es palindromo' );
}


