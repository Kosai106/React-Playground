import React from 'react';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cool: 5
    }
  }
  render() {
    var { title, max, high, medium, low, min, sux } = this.props;
    var { cool } = this.state;

    let comp;
    if(cool > 10) {
      comp = <span>{max}</span>
    } else if(cool === 10) {
      comp = <span>{high}</span>
    } else if(cool >= 5) {
      comp = <span>{medium}</span>
    } else if(cool > 0) {
      comp = <span>{low}</span>
    } else if(cool === 0) {
      comp = <span>{min}</span>
    } else {
      comp = <span>{sux}</span>
    }
    return (
      <div className="container text-center">
        <div className="row">
          <span>
            <h3>{title}</h3>
          </span>
        </div>
        <div className="row" style={{maxWidth: "400px", margin: "0 auto"}}>
          <span className="col-md-4">
            <button onClick={this.increaseCool.bind(this)} className="btn btn-primary">
              +
            </button>
          </span>
          <span className="col-md-4">
            { cool }
          </span>
          <span className="col-md-4">
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
