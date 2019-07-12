
// Clase Cajero
class Cashier {
    constructor( firtsName, lastName, gender ) {
        this .firtsName = firtsName;
        this .lastName = lastName;
        this .gender = gender;
        this .sales = new Array();
    }
    setSales( sales ) {
        this .sales = sales;
    }
    getSales() {
        return this .sales;
    }
}


window .onload = function () {
    App .init();
};

var App = {
    //url: 'https://uinames.com/api/?region=colombia',
    url: 'https://randomuser.me/api/',
    cashiersList : new Array(),
    cashiers: 2,
    days: 3,
    minimumSalePerDay: 0,   
    maximumSalePerDay: 10,
    minimumValueSale: 5,
    maximumValueSale: 100,
    init : function () {
        App .getRandomNamesAPI();
        App .showChashiers();
    },
    getRandomNamesAPI: function() {

        /** Itera dias trabajados por cajero */
        for( let i = 0; i < this .cashiers; i++ ) {

            fetch( this .url )                                            
            .then( response => response .json() )                     
            .then( data => {
                // console .log( data );   
                // console .log( data .results[ 0 ] .name  );          
                // console .log( data .results[ 0 ] .name .first );
                // console .log( data .results[ 0 ] .gender );
                             
                // let cashier = new Cashier( data .name, data .surname , data .gender ),   // Para https://uinames.com
                let cashier = new Cashier( data .results[ 0 ] .name .first, data .results[ 0 ] .name .last , data .results[ 0 ] .gender ),   // Para https://randomuser.me
                    cashierSales = [];

                /** Itera dias trabajados por cajero */
                for( let j = 0; j < this .days; j++ ) {
                    //console .log( App .getSalesPerDay() );
                    cashierSales .push( App .getSalesPerDay() );
                }
                //console .log( cashierSales );
                cashier .setSales( cashierSales );
                //console .log( cashier );
                this .cashiersList .push( cashier );

            }) 
            .catch( error => console .log( 'ERROR ', error ) );
        }   
    },
    getSalesPerDay: function() {
        let salesPerDay = App .getRandomNumber( this .minimumSalePerDay, this .maximumSalePerDay ),
            listSalesPerDay = [];

        /** Itera ventas por día */
        for( let j = 0; j < salesPerDay; j++ ) {
            let salePrice = App .getRandomNumber( this .minimumValueSale, this .maximumValueSale );
            listSalesPerDay .push( salePrice );
        }
        
        return listSalesPerDay;
    },
    getRandomNumber: function( min, max ) {
        return Math.trunc ( Math.random() * ( ( max + 1 ) - min ) + min );
    },
    showChashiers: function() {
        console .log( this .cashiersList );

        let list = this .cashiersList;

        console .log( typeof( list[ 0 ] ) );
        
        this .cashiersList .forEach( ( c ) => { 
            console .log( c.firtsName );
        });

        // //console .log( this .cashiersList[ i ].firstName );
        // for( let i = 0; i < this .cashiersList .length; i++ ) {
        //     console .log( this .cashiersList[ i ]);
        //     //console.log(typeof(this.cashiersList))
        // }


        
    }  
}            