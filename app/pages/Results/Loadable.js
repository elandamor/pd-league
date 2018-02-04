/**
 *
 * Asynchronously loads the component for Tables
 *
 */

import Loadable from 'react-loadable';
// Styled-Components
import Placeholder from './styles';

export default Loadable({
  loader: () => import('./index'),
  loading: Placeholder,
});
