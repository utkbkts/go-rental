//utility yardımcı fonksiyon

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_REACT_APP_BASE_URL,
  credentials: "include",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;

export const clearApolloCache = async () => {
  try {
    await client.resetStore();
  } catch (error) {
    console.error("Apollo Cache temizlenirken hata oluştu:", error);
  }
};
