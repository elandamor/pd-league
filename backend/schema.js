import { find } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
  type User {
    id: ID!
    name: String
    username: String
    token: String!,
  }

  type Player {
    avatar: String
    name: String
    number: Int
    position: String
  }

  type Club {
    id: ID!
    key: String
    name: String
    website: String
    squad: [Player],
  }

  # the schema allows the following query:
  type Query {
    club(key: String): Club
    clubs: [Club]
    currentUser: User
    user(id: ID!): User
    users: [User]
  }
`;

const resolvers = {
  Query: {
    clubs: () => clubs,
    club: (_, { key }) => find(clubs, { key }),
    currentUser: (obj, _, { headers }) => {
      const token = headers['x-authorization'];

      return find(users, { token });
    },
    // fixtures: () => fixtures,
    users: () => users,
    user: (_, { id }) => find(users, { id }),
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const users = [
  {
    id: '2d8c7ac9-d92e-47af-8312-995077914378',
    name: 'Kuda Mupeni',
    username: '2wce',
    chips: {
      benchBoost: 2,
      freeHit: 5,
      tripleCaptain: 16,
    },
    team: {
      name: 'FC 2wce',
      squad: [{
        avatar: 'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p37265.png',
        name: 'Alex Sánchez',
        number: 7,
        position: 'Forward',
        value: 12000000,
        benched: false,
        captaincy: {
          captain: true,
          vice: false,
        },
        points: {
          gameweek: 4,
          overall: 20,
        },
      }],
      points: {
        cost: 0,
        gameweek: 1000,
        overall: 23,
      },
      rank: 1000,
      bank: 1000000,
      transfers: {
        deadline: '201734512762TZ',
        free: 4,
      },
    },
    leagues: {
      classic: [{
        team: {
          name: 'FC 2wce',
          manager: 'Kuda Mupeni',
          rank: 245,
        },
        points: {
          gameweek: 1000,
          overall: 23,
        },
      }],
      national: [{
        team: {
          name: 'FC 2wce',
          manager: 'Kuda Mupeni',
          rank: 245,
        },
        points: {
          gameweek: 1000,
          overall: 23,
        },
      }],
    },
    token: '2d8c7ac9-d92e-47af-8312-995077914378',
  },
];

// const fixtures = [
//   {
//     gameweek: 24,
//     kickoffs: [
//       {
//         datetime: '201734512762TZ',
//         teams: ['manutd', 'arsenal'],
//       },
//       {
//         datetime: '201734512762TZ',
//         teams: ['chelsea', 'southamton'],
//       },
//       {
//         datetime: '201734512762TZ',
//         teams: ['liverpool', 'arsenal'],
//       },
//       {
//         datetime: '201734512762TZ',
//         teams: ['chelsea', 'manutd'],
//       },
//     ],
//   },
// ];

const clubs = [
  {
    id: '2d8c7ac9-d92e-47af-8312-995077914371',
    key: 'arsenal',
    name: 'Arsenal',
    website: 'www.arsenal.com',
    squad: [
      {
        avatar: 'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p48844.png',
        name: 'David Ospina',
        number: 13,
        position: 'Goalkeeper',
      }, {
        avatar: 'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p111457.png',
        name: 'Sead Kolasinac',
        number: 31,
        position: 'Defender',
      }, {
        avatar: 'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p41792.png',
        name: 'Aaron Ramsey',
        number: 8,
        position: 'Midfielder',
      }, {
        avatar: 'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p37265.png',
        name: 'Alex Sánchez',
        number: 7,
        position: 'Forward',
      },
    ],
  }, {
    id: '2d8c7ac9-d92e-47af-8312-995077914372',
    key: 'chelsea',
    name: 'Chelsea',
    website: 'www.chelseafc.com',
  }, {
    id: '2d8c7ac9-d92e-47af-8312-995077914373',
    key: 'liverpool',
    name: 'Liverpool',
    website: 'www.liverpoolfc.com',
  }, {
    id: '2d8c7ac9-d92e-47af-8312-995077914374',
    key: 'manutd',
    name: 'Manchester United',
    website: 'manutd.com',
  }, {
    id: '2d8c7ac9-d92e-47af-8312-995077914375',
    key: 'southampton',
    name: 'Southampton',
    website: 'www.southamptonfc.com',
  },
];
