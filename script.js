$(".searchBtn").on("click", function() {
  
    let searchTerm = $(".searchTerm").val();
    let numberRecords = $(".numberRecords").val();
    let startYear = $(".startYear").val();
    let endYear = $(".endYear").val();


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm +"&fq=source:(%22The%20New%20York%20Times%22)&begin_date="+ startYear +"&end_date="+ endYear +"&fq=coding&page="+ numberRecords +"&sort=newest&api-key=e6HGKf3D9XB4mlYWfTND3jMydbGGLxOq"
  

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        $(".articles").empty();

        let results = response.response.docs;
        console.log(results);

        results.forEach(function(element) {

            let newsDiv = $('<div>');
            let newsTitle = $(`<h1>${element.headline}</h1?`);
            
            let newsSnippet = $(`<p>${element.snippet}</h2>`);

            newsDiv.append(newsTitle, newsSnippet);
            $(".articles").append(newsDiv);
           
        });

    });
});