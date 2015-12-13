/* CURRENTLY IN: javascript/main.js */

// keep safe! expires in a day
// how to get a new one:
// https://trello.com/1/authorize?key=YOUR_APP_KEY&scope=read&name=TrelloCMS&expiration=1day&response_type=token
var accessToken = 'YOUR_ACCESS_TOKEN'; // use insturctions above
var key = 'YOUR_KEY_HERE';

var tAPI = TrelloAPI.init( key, accessToken );
tAPI.getAllCards('Gallery', function( cards ) {
    console.log('hello wrold', cards)
    tAPI.getCard( cards[ 0 ].id, function( card ) {
        console.log( 'hello, card', card );
    });
    
});



