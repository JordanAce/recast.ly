import VideoList from '/compiled/src/components/VideoList.js';
import exampleVideoData from '/compiled/src/data/exampleVideoData.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';
import searchYouTube from '/compiled/src/lib/searchYouTube.js';
import Search from '/compiled/src/components/Search.js';
import YOUTUBE_API_KEY from '/compiled/src/config/youtube.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fullVideoList: exampleVideoData,
      currentVideo: exampleVideoData[0],
    };

    this.changeVideo = this.changeVideo.bind(this);
    this.changeVideoList = this.changeVideoList.bind(this);

  }

  changeVideoList(newVideoList) {
    this.setState({fullVideoList: newVideoList});
    // searchYouTube({max: 5, query: 'Jordan', key: YOUTUBE_API_KEY, this.setState();});
    // {fullVideoList: data}
  }

  changeVideo(newVideo) {
    this.setState({currentVideo: newVideo});
  }

  componentDidMount() {
    searchYouTube({max: 5, query: 'schenectady', key: YOUTUBE_API_KEY}, (data) => {
      this.setState(
        {fullVideoList: data, currentVideo: data[0]}
      );
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search clickFunction={this.changeVideoList} /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.currentVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={this.state.fullVideoList} clickFunction={this.changeVideo} /></h5></div>
          </div>
        </div>
      </div>
    );
  }




}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
