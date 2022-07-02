import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4v7kzyp1crc01ud1426a9id/master',
  cache: new InMemoryCache()
})