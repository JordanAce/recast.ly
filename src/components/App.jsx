import VideoList from '/compiled/src/components/VideoList.js';
import exampleVideoData from '/compiled/src/data/exampleVideoData.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fullVideoList: exampleVideoData,
      currentVideo: exampleVideoData[0],
      testFunction: [1, 2],
    };

    this.changeVideo = this.changeVideo.bind(this);

  }

  changeVideo(newVideo) {
    this.setState({currentVideo: newVideo});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div onClick={this.changeVideo}><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.currentVideo} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={this.state.fullVideoList} testFunction={this.state.testFunction} clickFunction={this.changeVideo} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
