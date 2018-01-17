import { ApolloClient } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { persistCache } from 'apollo-cache-persist';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from 'apollo-link-ws';
import { RetryLink } from 'apollo-link-retry';
import { getMainDefinition } from 'apollo-utilities';
import localForage from 'localforage';

// import introspectionQueryResultData from './fragmentTypes.json';

// Custom packages
import errorLink from '../packages/apollo-link-error';
import loggerLink from '../packages/apollo-link-logger';

const SERVER_URI = 'http://0.0.0.0:8080/graphql';
const SUBSCRIPTIONS_URI = 'wss://0.0.0.0/subscriptions';

const batchHttpLink = new BatchHttpLink({ uri: SERVER_URI });

const retryLink = new RetryLink();

const middlewareLink = setContext(async () => ({
  headers: {
    'X-Authorization': await localForage.getItem('pd-DB__auth')
      .then((response) => {
        if (response) {
          return response.token;
        }
        return null;
      }),
  },
}));

const devHttpLink = ApolloLink.from([
  loggerLink,
  errorLink,
  middlewareLink,
  retryLink,
  batchHttpLink,
]);

const prodHttpLink = ApolloLink.from([
  middlewareLink,
  retryLink,
  batchHttpLink,
]);

const wsLink = new WebSocketLink({
  uri: SUBSCRIPTIONS_URI,
  options: {
    reconnect: true,
  },
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  process.env.NODE_ENV !== 'production' ? devHttpLink : prodHttpLink,
);

const cache = new InMemoryCache({
  // fragmentMatcher: new IntrospectionFragmentMatcher({
  //   introspectionQueryResultData,
  // }),
});

persistCache({
  cache,
  storage: localForage,
});

const client = new ApolloClient({
  link,
  // eslint-disable-next-line no-underscore-dangle
  cache: cache.restore(window.__APOLLO_CLIENT__),
});

export default client;
