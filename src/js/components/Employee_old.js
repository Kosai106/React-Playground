import React from 'react';

export default class Employee extends React.Component {
  render() {
    var { name, email, job, img } = this.props;
    return (
      <div className="container text-center">
        <div className="row">
          <span>
            <img src={img} className="avatar" />
            <h3>{name}</h3>
            <p>{job}</p>
            <h6>{email}</h6>
          </span>
        </div>
      </div>
    );
  }
}
