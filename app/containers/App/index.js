/**
 * App.js
 */

import React from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'react-apollo';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import localForage from 'localforage';
// Components
import Footer from '../../components/Footer';
import Header from '../../components/Header';
// Routes {Pages}
import Account from '../../pages/Account/Loadable';
import Clubs from '../../pages/Clubs/Loadable';
import Fixtures from '../../pages/Fixtures/Loadable';
import Home from '../../pages/Home/Loadable';
import NotFound from '../../pages/NotFound/Loadable';
import Results from '../../pages/Results/Loadable';
import Tables from '../../pages/Tables/Loadable';
// Queries
// import getAuthenticatedUserGQL from '../../graphql/queries/getAuthenticatedUser.gql';
// Styled-Components
import Container from './styles';
// Helpers
import matchMedia from '../../utils/helpers/matchMedia';

const themeDark = { // eslint-disable-line no-unused-vars
  isDark: true,
  palette: {
    brandPrimary: '#38003c',
    bodyBackground: '#1F1F27',
    cardBackground: '#25252D',
    cardBorderColor: '#414148',
  },
};

const themeLight = { // eslint-disable-line no-unused-vars
  isDark: false,
  palette: {
    brandPrimary: '#38003c',
    bodyBackground: '#fafafa',
    cardBackground: '#ffffff',
    cardBorderColor: '#ededed',
  },
};

const Bootstrap = ({ theme }) => {
  const doc = document;
  const app = doc.getElementById('app');

  doc.documentElement.style.backgroundColor = theme.palette.bodyBackground;
  app.style.backgroundColor = theme.palette.bodyBackground;

  return null;
};

const mql648 = matchMedia('(min-width: 648px)');
const mql1440 = matchMedia('(min-width: 1440px)');

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // appBarTitle: '',
      // authenticating: true,
      // mq648: false,
      // mq1440: false,
      // mql648,
      // mql1440,
      theme: themeLight,
    };
  }

  componentWillMount = () => {
    mql648.addListener(this.mediaQueryChanged);
    mql1440.addListener(this.mediaQueryChanged);

    // this.setState({
    //   mql648,
    //   mql1440,
    //   mq648: mql648.matches,
    //   mq1440: mql1440.matches,
    // });
  }

  // componentWillReceiveProps({ authenticating }) {
  //   if (!authenticating) {
  //     this.setState({
  //       authenticating: false,
  //     });
  //   }
  // }

  componentWillUnmount = () => {
    const { mql } = this.state;

    if (mql) {
      mql.removeListener(this.mediaQueryChanged);
    }
  }

  // setAppBarTitle = (title) => {
  //   this.setState({
  //     appBarTitle: title,
  //   });
  // }

  // mediaQueryChanged = () => {
  //   this.setState({
  //     mq648: this.state.mql648.matches,
  //     mq1440: this.state.mql648.matches,
  //   });
  // }

  logout = () => {
    const { history } = this.props;

    localForage.clear();

    history.replace({
      pathname: '/',
      state: {
        action: 'logout',
        isAuthenticated: false,
      },
    });
  }

  render() {
    // const { authenticatedUser, authenticating } = this.props;
    const { theme } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Container className="app-container">
          <Bootstrap theme={theme} />
          <Header className="c-app-header">
            <nav className="c-app-nav--main">
              <ul role="menu">
                <li aria-haspopup="true" role="menuitem">
                  Premier League
                  <ul className="-sub" role="menu">
                    <li role="menuitem">
                      <NavLink
                        exact
                        activeClassName="-active"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li role="menuitem">
                      <NavLink
                        activeClassName="-active"
                        to="/fixtures"
                      >
                        Fixtures
                      </NavLink>
                    </li>
                    <li role="menuitem">
                      <NavLink
                        activeClassName="-active"
                        to="/results"
                      >
                        Results
                      </NavLink>
                    </li>
                    <li role="menuitem">
                      <NavLink
                        activeClassName="-active"
                        to="/tables"
                      >
                        Tables
                      </NavLink>
                    </li>
                    <li role="menuitem">
                      <NavLink
                        activeClassName="-active"
                        to="/clubs"
                      >
                        Clubs
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li role="menuitem">
                  <NavLink
                    activeClassName="-active"
                    to="/fantasy"
                  >
                    Fantasy
                  </NavLink>
                </li>
                <li role="menuitem">
                  <NavLink
                    activeClassName="-active"
                    to="/stats"
                  >
                    Stats
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/account" component={Account} />
            <Route path="/clubs" component={Clubs} />
            <Route path="/fixtures" component={Fixtures} />
            <Route path="/results" component={Results} />
            <Route path="/tables" component={Tables} />
            <Route component={NotFound} />
          </Switch>
          <Footer className="c-app-footer" />
        </Container>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  // authenticatedUser: PropTypes.object,
  // authenticating: PropTypes.bool,
  history: PropTypes.object,
};

// const mapAuthenticatedUserToProps = ({ data }) => {
//   if (data.error) {
//     return {
//       authenticating: data.loading,
//       error: data.error,
//     };
//   }

//   if (!data.currentUser) {
//     return {
//       authenticating: data.loading,
//     };
//   }

//   const { currentUser } = data;

//   return {
//     authenticatedUser: currentUser,
//     authenticating: data.loading,
//   };
// };
/* eslint-disable function-paren-newline */
export default compose(
  // graphql(getAuthenticatedUserGQL, {
  //   props: mapAuthenticatedUserToProps,
  // }),
  withRouter,
)(App);
/* eslint-enable function-paren-newline */
