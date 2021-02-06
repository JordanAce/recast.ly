var searchYouTube = (options, callback) => {
  let videosArray = $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=" + (options.max ? options.max : 5) + "&q=" + options.query + "&videoEmbeddable=true&key=" + options.key);
  console.log("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=" + (options.max ? options.max : 5) + "&q=" + options.query + "&videoEmbeddable=true&key=" + options.key);
  //console.log(videosArray.responseJSON.items);
  console.log(callback);
  console.log(videosArray);
  console.log(options.key);
  return callback(videosArray);
};

export default searchYouTube;