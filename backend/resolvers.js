import { _, find } from 'lodash';

import { clubs, standings, users } from './data';

const resolvers = {
  Query: {
    clubs: () => clubs,
    club: (obj, { key }) => find(clubs, { key }),
    standings: () => _.sortBy(standings, ['position.current']),
    users: () => users,
    user: (obj, { id }) => find(users, { id }),
  },
};

export default resolvers;
