
window .onload = function() {
    App .init();
}

var App = {
    phrase: null,
    invPhrase: null,
    init: function() {
        this .phrase = prompt( 'Escribe una frase' );
        App .invertir();
        
        //console .log( this .phrase, this .invPhrase );
        console .log( App .message() );
    },
    invertir: function() {
        this .invPhrase = this .phrase .split( '' ) .reverse() .join( '' );
    },
    message: function() {
        return this .invPhrase == this .phrase ? 'Es palindromo' : 'No es palindromo';
    }
}