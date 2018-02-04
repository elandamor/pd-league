import { _, find } from 'lodash';

import { clubs, fixtures, standings, users } from './data';

const resolvers = {
  Query: {
    clubs: () => clubs,
    club: (obj, { abbr }) => find(clubs, { abbr }),
    fixtures: () => fixtures,
    standings: () => _.sortBy(standings, ['position.current']),
    users: () => users,
    user: (obj, { id }) => find(users, { id }),
  },
};

export default resolvers;
