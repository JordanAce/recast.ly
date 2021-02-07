var searchYouTube = (options, callback) => {
  $.get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=" + (options.max ? options.max : 5) + "&q=" + options.query + "&videoEmbeddable=true&key=" + options.key, (data) => {
    return callback(data.items);
  });
};

export default searchYouTube;