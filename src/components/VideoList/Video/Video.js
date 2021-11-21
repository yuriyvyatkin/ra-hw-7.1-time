import './Video.css';
import DateTime from './DateTime/DateTime';
import DateTimePretty from '../../../hocs/DateTimePretty';

const ConvertedDateTime = DateTimePretty(DateTime);

export default function Video(props) {
  return (
    <div className="Video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={props.title}
      />
      <ConvertedDateTime date={props.date} />
    </div>
  );
}
