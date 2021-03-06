$(document).ready(function() {

    $.getJSON("https://ron-swanson-quotes.herokuapp.com/v2/quotes", function(data) {
        $(".quote").html(data);

        updateTwitterBtn();
    });
    
    $("#getQuote").on("click", function() {
        $.getJSON("https://ron-swanson-quotes.herokuapp.com/v2/quotes", function(data) {
            $(".quote").html(data);

            updateTwitterBtn();
        });
    });

    // updates the twitter button with a new quote
    const updateTwitterBtn = () => {
        let currentQuote = $(".quote").text();
        let name = $(".blockquote-footer").text();
        let quoteResult = currentQuote + " - " + name;
        // Remove existing iframe
        $('.twitter-btn iframe').remove();
        // Generate new markup
        var tweetBtn = $('<a></a>')
            .addClass('twitter-hashtag-button')
            .attr('data-size', 'large')
            .attr('href', 'https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw')
            .attr('data-text', quoteResult);
        $('.twitter-btn').html(tweetBtn);
        twttr.widgets.load();
    };
});