import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';


class LearningResources extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: null };
  }

  test() {
    this.setState({
      redirect: '/',
    });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={redirect} />;
    }

    return (
      <div>
        <h1>Learning Resource</h1>

        <Button variant="contained" color="primary" onClick={() => this.test()}>
          Normal Function
        </Button>
      </div>
    );
  }
}

export default LearningResources;
