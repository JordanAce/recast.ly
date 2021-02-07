import searchYouTube from '/compiled/src/lib/searchYouTube.js';
import YOUTUBE_API_KEY from '/compiled/src/config/youtube.js';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: 'test'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    this.props.clickFunction(this.state.query);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" query={this.state.query} onChange={this.handleChange} />
        <button className="btn hidden-sm-down" onClick={() => this.handleSubmit()}>
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