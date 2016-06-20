import React from 'react';

export default class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //mouseOver: this.src='https://media.giphy.com/media/9fbYYzdf6BbQA/giphy.gif',
      animated: this.src='https://media.giphy.com/media/9fbYYzdf6BbQA/giphy.gif',
    }
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
          <img src={img} className='avatar' onMouseOver={this.src={gif}} onMouseOut={img} />
        </div>
      </div>
    );
  }
}
