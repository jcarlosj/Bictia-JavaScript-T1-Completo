window .onload = function() {
    App .init();
}

var App = {
    init : function () {
        this .numero = prompt( 'Digite un número' );
        do {
            let esPar = App .esPar( this .numero ) ? ' PAR' : ' IMPAR',
                esPrimo = App .esPrimo( this .numero ) ? ' PRIMO' : ' NO es PRIMO';
            
            alert( `El número ${ this .numero } es ${ esPar } y ${ esPrimo }` );

            
        } while( this .numero != '' );
    },
    esPar: function( num ) {
        return num % 2 === 0;
    },
    esPrimo: function( num ) {
        let cont = 0;
    
         for( let i = 1; i <= num; i++ ) {
            if( num % i == 0 ) {
                cont++;
            }
        }
    
        return cont == 2;
    }
}    