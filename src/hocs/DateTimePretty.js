import { Component } from 'react';
import getTimeDifference from '../functions/getTimeDifference';
import formatTimeDifference from '../functions/formatTimeDifference';

export default function DateTimePretty(WrappedComponent) {
  class DateTimePretty extends Component {
    constructor(props) {
      super(props);
      this.state = {
        timeDifference: formatTimeDifference(getTimeDifference(this.props.date))
      }
      this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.updateState(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    updateState() {
      this.setState({
        timeDifference: formatTimeDifference(getTimeDifference(this.props.date))
      });
    }

    render() {
      return <WrappedComponent date={this.state.timeDifference}/>;
    }
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  DateTimePretty.displayName = `DateTimePretty(${wrappedComponentName})`;
  return DateTimePretty;
}
