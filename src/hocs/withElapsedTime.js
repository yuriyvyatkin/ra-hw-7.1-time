import { Component } from 'react';
import getTimeDifference from '../functions/getTimeDifference';
import formatTimeDifference from '../functions/formatTimeDifference';

export default function withElapsedTime(WrappedComponent) {
  class withElapsedTime extends Component {
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
        timeDifference: formatTimeDifference(getTimeDifference(this.props.date)),
      });
    }

    render() {
      return <WrappedComponent {...this.props} date={this.state.timeDifference} />;
    }
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  withElapsedTime.displayName = `DateTimePretty(${wrappedComponentName})`;
  return withElapsedTime;
}
