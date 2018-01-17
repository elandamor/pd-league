import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Components
import Button from '../../components/Button';

/* eslint-disable arrow-body-style  */
const Signup = () => {
  const handleSubmit = () => {
    // TODO: Create a new account
  };

  return (
    <div>
      <Helmet>
        <title>Join our community - pdLeague</title>
        <meta name="description" content="Join the pdLeague community" />
      </Helmet>
      <h2>Join the pdLeague community</h2>
      <Button onClick={handleSubmit}>Join</Button>
      <Link
        to={{
          pathname: '/account/signin',
        }}
      >
        Sign in to continue
      </Link>
    </div>
  );
};
/* eslint-enable arrow-body-style  */

export default Signup;

