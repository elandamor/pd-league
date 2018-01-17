import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';
import localForage from 'localforage';
// Components
import Button from '../../components/Button';
// Mutations
import signInGQL from '../../graphql/mutations/signin.gql';

// eslint-disable-next-line react/prefer-stateless-function
class Signin extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      redirectTo: '/',
    };
  }

  componentDidMount = async () => {
    const { history } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    const auth = await localForage.getItem('pd-DB__auth');
    const isAuthenticated = Boolean(auth && auth.token);

    this.setState({
      redirectTo: from.pathname,
    });

    if (isAuthenticated) {
      history.push(from.pathname);
    }
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit = async () => {
    const { history } = this.props;
    const { redirectTo } = this.state;

    const authenticatedUser = {
      id: '2d8c7ac9-d92e-47af-8312-995077914378',
      name: 'Thandolwethu Mpofu',
      username: 'elandamor',
      token: '2d8c7ac9-d92e-47af-8312-995077914378',
    };

    await localForage.setItem('pd-DB__auth', authenticatedUser);

    history.push({
      pathname: redirectTo,
      state: {
        isAuthenticated: true,
      },
    });
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Signin to continue - pdLeague</title>
          <meta name="description" content="Signin to access your account" />
        </Helmet>
        <h2>Signin to continue</h2>
        <Button onClick={this.handleSubmit}>Signin</Button>
        <Link
          to={{
            pathname: '/account/signup',
          }}
        >
          Join our community
        </Link>
      </div>
    );
  }
}

Signin.propTypes = {

};

export default compose(
  graphql(signInGQL, { name: 'signInMutation' }),
)(Signin);

