import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

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
    id: ID
    badge: String
    key: String
    name: String
    abbr: String
    website: String
    squad: [Player]
    stadium: String
    stats: Statistics
  }

  type Statistics {
    id: ID
    club: Club
    position: Position
    played: Int
    won: Int
    drawn: Int
    lost: Int
    goals: Goals
    points: Int
    form: [Fixture]
    nextMatch: Fixture
  }

  type Position {
    id: ID
    club: Club
    current: Int
    previous: Int
  }

  type Goals {
    id: ID
    club: Club
    for: Int
    against: Int
    difference: Int
  }

  type Fixture {
    id: ID
    kickoff: String
    home: Boolean
    against: Club
    result: String
  }

  # the schema allows the following query:
  type Query {
    club(key: String): Club
    clubs: [Club]
    currentUser: User
    standings: [Statistics]
    user(id: ID!): User
    users: [User]
  }
`;

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
