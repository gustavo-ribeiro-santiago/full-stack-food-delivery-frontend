import { useRouter } from 'next/router';
import React, { useState, useCallback } from 'react';
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
  useQuery,
} from '@apollo/client';
import RestaurantPage from '../components/RestaurantPage';

function Restaurant() {
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
  console.log(`URL: ${API_URL}`);
  const link = new HttpLink({ uri: `${API_URL}/graphql` });
  const cache = new InMemoryCache();
  const client = new ApolloClient({ link, cache });

  return (
    <ApolloProvider client={client}>
      <RestaurantPage restId={router.query.restaurantId}></RestaurantPage>
    </ApolloProvider>
  );
}

export default Restaurant;
