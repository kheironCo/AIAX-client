import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

type GraphQLProviderProps = {
  children: React.ReactNode;
};

export const GraphQLProvider = ({ children }: GraphQLProviderProps) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
