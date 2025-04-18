import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL || 'http://localhost:5002/graphql',
});

const authLink = setContext((_, { headers }) => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return {
    headers: {
      ...headers,
      authorization: user.accessToken ? `Bearer ${user.accessToken}` : '',
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
export {}; 