window .onload = function() {
    App .init();
}

var App = {
    ano: null,
    init : function () {
        
        do {
            this .ano = prompt( 'Digita un año, Ej: 1977' );
            if( this .ano != ' ' ) {
                App .showMessage();
            }
            
        } while( this .ano != ' ' );
        
    },
    isBisiesto: function( ano ) {
        return ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0;
    },
    showMessage() {
        if( this.isBisiesto( this .ano ) ) {
            alert( `El año ${ this .ano} es bisiesto.` );
        }
        else {
            alert( `El año ${ this .ano} NO es bisiesto.` );
        }
    }

}