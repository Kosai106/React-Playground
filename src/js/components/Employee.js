import React from 'react';

export default class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.state = {
      hover: false
    }
  }

  mouseOver() {
    this.setState({hover: true});
  }
  mouseOut() {
    this.setState({hover: false});
  }

  render() {
    var { name, job, email, img, gif } = this.props;

    return (
      <div className='outer-circle'>
        <div className='inner-circle'>
          <div className='overlay'>
            <div className='contents'>
              <span className='name'>{name}</span>
              <span className='job'>{job}</span>
              <div className='links'>
                <a href='#'>
                  <i className='fa fa-envelope-o'></i>
                </a>
                <a href='#'>
                  <i className='fa fa-twitter'></i>
                </a>
                <a href='#'>
                  <i className='fa fa-facebook'></i>
                </a>
              </div>
            </div>
          </div>
          <img src={img} className='avatar' onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)} />
        </div>
      </div>
    );
  }
}
