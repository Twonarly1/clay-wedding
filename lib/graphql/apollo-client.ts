import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NEXT_PUBLIC_STEPZEN_KEY } from "../env";

const client = new ApolloClient({
  uri: `https://ranst.stepzen.net/api/manageable-dragon/__graphql`,
  headers: {
    Authorization: `Apikey ${NEXT_PUBLIC_STEPZEN_KEY}`,
  },
  cache: new InMemoryCache(),
});

export default client;
