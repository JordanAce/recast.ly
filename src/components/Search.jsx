import searchYouTube from '/compiled/src/lib/searchYouTube.js';
import YOUTUBE_API_KEY from '/compiled/src/config/youtube.js';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" />
        <button className="btn hidden-sm-down" onClick={() => props.clickFunction()}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;


// searchYouTube({max: 5, query: 'Jordan', key: YOUTUBE_API_KEY}, function (data) {return data;})