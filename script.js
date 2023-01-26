$("search-button").on("click", function() {
// get the id name of the search button
  
    let searchTerm = $(".searchTerm").val();
    let numberRecords = $(".numberRecords").val();
    let startYear = $(".startYear").val();
    let endYear = $(".endYear").val();


    let apiKey = 'mL4xkOC4g5YsgMhD0NXUQ33AGnerRi6W'
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=finance&fq=source:(%22The%20New%20York%20Times%22)&begin_date=20220101&end_date=20230126&fq=coding&page=5&sort=newest&api-key=e6HGKf3D9XB4mlYWfTND3jMydbGGLxOq"
    
    //"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + "?" +"&api-key=" + apiKey;

    //"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&fq=source:(%22The%20New%20York%20Times%22)&api-key=e6HGKf3D9XB4mlYWfTND3jMydbGGLxOq"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);




    });
});