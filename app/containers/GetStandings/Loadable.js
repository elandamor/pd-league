/**
 *
 * Asynchronously loads the component for GetClubs
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
