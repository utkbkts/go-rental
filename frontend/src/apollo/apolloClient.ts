//utility yardımcı fonksiyon

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_REACT_APP_BASE_URL,
  credentials: "include",
});

const client = new ApolloClient({
    link:httpLink,
    cache:new InMemoryCache({})
    //InMemoryCache nesnesi, uygulama içinde yapılan sorgularda verilerin optimize edilmesi ve tekrar kullanılmasını sağlar, böylece sunucuya yapılan gereksiz istekler önlenir.
})

export default client

