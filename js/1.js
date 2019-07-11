window .onload = function() {
    App .init();
}

var App = {
    nameList : new Array(),
    name : null,
    init : function () {

        do {
            this .name = prompt( 'Ingrese un nombre', '' );
            if( App .wantExit( this .name ) ) {
                console .log ( 'Existe ', App .nameExists( this .name ) );
                if( !App .nameExists( this .name ) ) {
                    App .insertName( this .name );
                }
                else {
                    alert( 'Hey! No repitas nombres por favor.' );
                }
            }
            else {
                alert( 'Ok! Has finalizado!' );
                document .getElementById( 'data' ) .innerHTML = App .showResults();
            }

            console .log( this .nameList );
        } while ( App .wantExit( this .name ) );
    },
    wantExit : function ( space ) {
        return space != ' ';
    },
    insertName: function ( name ) {
        if( name != '' ) {
            this .nameList .push( name );
        }
    },
    nameExists( name ) { 
        var flag = false;

        this .nameList .forEach( nameExist => {
            if( nameExist == name ) {
                flag = true;
            }
        });

        return flag;
    },
    showResults: function() {
        let template_html = `<ul>`;

        this .nameList .sort();
        this .nameList .forEach( name => {
            template_html += `<li>${ name }</li>`; 
        });

        template_html += `</ul>`;

        return template_html;
    }
}