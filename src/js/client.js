import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cool: 5,
      max: "OFF THE HOOK!",
      medium: "Mediocre...",
      low: "Loser.",
      minus: "What the fuck?!"
    }
  }
  render() {
    var { title } = this.props;
    var { cool, max, medium, low, minus } = this.state;

    let comp;
    if(cool > 10) {
      comp = <span>{max}</span>
    } else if(cool > 5) {
      comp = <span>{medium}</span>
    } else if(cool >= 0) {
      comp = <span>{low}</span>
    } else {
      comp = <span>{minus}</span>
    }
    return (
      <div className="container text-center">
        <div className="row-fluid">
          <span>
            <h3>{title}</h3>
          </span>
        </div>
        <div className="row-fluid inline">
          <span className="col-md-6">
            <button onClick={this.increaseCool.bind(this)} className="btn btn-primary">
              +
            </button>
          </span>
          <span>{ cool }</span>
          <span className="col-md-6">
            <button onClick={this.decreaseCool.bind(this)} className="btn btn-primary">
              -
            </button>
          </span>
          <br />
          <h4>{comp}</h4>
        </div>
      </div>
    );
  }
  increaseCool() {
    this.setState({cool: this.state.cool + 1})
  }
  decreaseCool() {
    this.setState({cool: this.state.cool - 1})
  }
}

const app = document.getElementById('app');

ReactDOM.render(
  <Layout title="How cool are you on a scale from 1 to 10" />,
  app
);
