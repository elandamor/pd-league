import { find } from 'lodash';

import { clubs, standings, users } from './data';

const resolvers = {
  Query: {
    clubs: () => clubs,
    club: (_, { key }) => find(clubs, { key }),
    standings: () => standings,
    users: () => users,
    user: (_, { id }) => find(users, { id }),
  },
};

export default resolvers;
