(function() {
  var yearOfArrival = "1986";
  var hagstofanAPI = "http://px.hagstofa.is/pxen/api/v1/en/Ibuar/mannfjoldi/3_bakgrunnur/Uppruni/MAN43001.px"
  //var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( hagstofanAPI, {
  "query": [
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
  ],
  "response": {
    "format": "px"
  }
})
    .done(function( data ) {
      console.log(data);
      /*$.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 3 ) {
          return false;
        }
      });*/
    });
})();