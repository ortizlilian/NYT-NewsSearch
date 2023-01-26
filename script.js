$(".searchBtn").on("click", function() {
  
    let searchTerm = $(".searchTerm").val();
    let numberRecords = $(".numberRecords").val();
    let startYear = ($(".startYear").val() === '') ? Number(20180101) : $(".startYear").val();
    let endYear = ($(".endYear").val() === '') ? Number(20230101) : $(".endYear").val();


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
            let newsTitle = $(`<h3>${element.headline.main}</h3>`);
            console.log(element.headline.main);            
            let newsSnippet = $(`<p>${element.snippet}</p>`);
            let newsLink = $(`<a href=${element.web_url} target="_blank">Read More</a>`);

            newsDiv.append(newsTitle, newsSnippet, newsLink);
            $(".articles").append(newsDiv);
           
        });

    });
});

$(".clearBtn").on("click", function() {
    $(".articles").empty();
});