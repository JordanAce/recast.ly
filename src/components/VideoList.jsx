<<<<<<< HEAD
import exampleVideoData from 'src/data/exampleVideoData.js';

var VideoList = () => (
  <div className="video-list">
    <div><h5><em>videoListEntry</em>{exampleVideoData[0].kind}</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
  </div>
);
=======
import VideoListEntry from '/compiled/src/components/VideoListEntry.js';

var VideoList = (props) => {

  let allVideos = [];

  for (let i = 0; i < props.videos.length; i++) {
    allVideos.push(
      <div><h5>{<VideoListEntry video={props.videos[i]} />}</h5></div>
    );
  }

  return (
    <div className="video-list">
      {allVideos}
    </div>
  );


};
>>>>>>> 94307cd959643c7d84f43a8f3d53991b6a115fed

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
