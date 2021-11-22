import Video from './Video/Video';
import withElapsedTime from '../../hocs/withElapsedTime'

const VideoWithElapsedTime = withElapsedTime(Video);

export default function VideoList(props) {
  return props.list.map((item) => {
    return (
      <VideoWithElapsedTime key={item.id} url={item.url} date={item.date} />
    );
  });
}
