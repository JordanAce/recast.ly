var searchYouTube = (options, callback) => {
  let videosArray = [];
  $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=" + (options.max ? options.max : 5) + "&q=" + options.query + "&videoEmbeddable=true&key=" + options.key, function(data) {
    return callback(data.items);
  });



  //console.log("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=" + (options.max ? options.max : 5) + "&q=" + options.query + "&videoEmbeddable=true&key=" + options.key);
  //console.log(videosArray.responseJSON.items);

};

export default searchYouTube;