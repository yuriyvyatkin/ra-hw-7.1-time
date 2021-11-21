import Video from './Video/Video';

export default function VideoList(props) {
  return props.list.map((item) => {
    return (
      <Video key={item.id} url={item.url} date={item.date} />
    );
  });
}
