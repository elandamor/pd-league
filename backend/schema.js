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
    shortName: String
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

  type Score {
    count: Int
  }

  type Ground {
    id: ID
    city: String
    name: String
  }

  type Fixture {
    id: ID
    ground: Ground
    kickoff: String
    matchDate: String
    teams: [Club]
    score: [Score]
    result: String
  }

  type Match {
    matchDate: String
    matchList: [Fixture]
  }

  # the schema allows the following query:
  type Query {
    club(abbr: String): Club
    clubs: [Club]
    currentUser: User
    fixtures: [Match]
    results: [Match]
    standings: [Statistics]
    user(id: ID!): User
    users: [User]
  }
`;

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
