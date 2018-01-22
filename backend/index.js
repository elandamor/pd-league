import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import kill from 'kill-port';

import * as Schema from './schema';

const PORT = 8080;
const server = express();
/* eslint-disable func-names */
const schemaFunction =
  Schema.schemaFunction ||
  function () {
    return Schema.schema;
  };
let schema;
const rootFunction =
  Schema.rootFunction ||
  function () {
    return schema.rootValue;
  };
const contextFunction =
  Schema.context ||
  function (headers, secrets) {
    return Object.assign(
      {
        headers,
      },
      secrets
    );
  };
/* eslint-enable func-names */

server.use(cors());

server.use('/graphql', bodyParser.json(), graphqlExpress(async (request) => {
  if (!schema) {
    schema = schemaFunction(process.env);
  }
  const context = await contextFunction(request.headers, process.env);
  const rootValue = await rootFunction(request.headers, process.env);

  return {
    schema: await schema,
    rootValue,
    context,
    tracing: true,
  };
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  query: `# Welcome to the pdLeague GraphiQL

query getStandings {
  standings {
    position {
      current
      previous
    }
    club {
      abbr
      name
    }
  }
}`,
}));

/* eslint-disable no-console */
kill(PORT).then(() => {
  server.listen(PORT, () => {
    console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphql`);
    console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`);
  });
}).catch(() => {
  server.listen(PORT, () => {
    console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphql`);
    console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`);
  });
});
/* eslint-enable no-console */

