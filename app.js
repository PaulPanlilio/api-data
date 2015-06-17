$(document).ready(function(){ 
  
  $('#search-form').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    console.log(searchTerm);
    $.getJSON("https://www.googleapis.com/youtube/v3/search",
			{
				"part": "snippet",
				"key": "AIzaSyD6xC8ooIbnbmuf8iQuVNe2XES-Hio41Q0",
				"q": searchTerm 
			},
		function(data){
        console.log("Returned result is", data);    
        if (data.pageInfo.totalResults === 0 )
          showError("No results!");
        else
          showResults(data.items);

    });
})

function showResults(videos){
    var html = "";
    var i = 1;

    $.each(videos, function(index,value){
       html = html + "<li><p>" + i + " " +  value.snippet.title +
				"</p><img src='" +  value.snippet.thumbnails.high.url + "'/></li>" ;
      i++;
    });
     $('#search-results ul').html(html); 
  }
  
  function showError(error){    
    $('#error').html('<p>'+ error + '<p>');
  }
  
  });
  
  