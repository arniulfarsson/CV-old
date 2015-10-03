(function() {
  var yearOfArrival = "1986";
  var hagstofanAPI = "http://px.hagstofa.is/pxen/api/v1/en/Ibuar/mannfjoldi/3_bakgrunnur/Uppruni/MAN43001.px"
  //var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( hagstofanAPI, 
    {
      "code": "Sex",
      "selection": {
        "filter": "item",
        "values": [
          "Total"
        ]
      }
    },
    {
      "code": "Citizenship",
      "selection": {
        "filter": "item",
        "values": [
          "Total"
        ]
      }
    },
    {
      "code": "Year of arrival",
      "selection": {
        "filter": "item",
        "values": [
          {yearOfArrival}
        ]
      }
    }
})
    .done(function( data ) {
      console.log(data.response);
      /*$.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 3 ) {
          return false;
        }
      });*/
    });
})();