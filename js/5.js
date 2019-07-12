window .onload = function() {
    App .init();
}

var App = {
    originalPhrase: '',
    reversePhrase: '',
    init : function () {
        this .originalPhrase = prompt( 'Escribe una frase' );

        this .reversePhrase = App .reverse( this .originalPhrase );
        this .infoPhrase = App .analicePhrase( this .originalPhrase );

        App .showData();
    
    },
    reverse: function( phrase ) {
        return phrase .split('') .reverse() .join('');
    },
    analicePhrase( phrase ) {
        let spaces = 0,
            letters = 0;

        for( let i = phrase .length - 1; i >= 0; i-- ) {
            //console .log( phrase[ i ] );
            if( phrase[ i ] != ' ' ) { 
                letters++;
            }
            else {
                spaces++;
            }
        }

        return [ letters, spaces ]
    },
    showData: function() {
        console .log( this .reversePhrase );
        console .log( this .infoPhrase );
        document .getElementById( 'data' ) .innerHTML = `
            <p><b>Original:</b> ${ this .originalPhrase }</p>
            <p><b>Al revés:</b> ${ this .reversePhrase }</p>
            <p><b> - Letras:</b> ${ this .infoPhrase[ 0 ] }</p>
            <p><b> - Espacios:</b> ${ this .infoPhrase[ 1 ] }</p>
        `;
    }
}

