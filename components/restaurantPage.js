import Dishes from '../components/dishes';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import React, { useState, useCallback } from 'react';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

function RestaurantPage({ restId }) {
  const [query, setQuery] = useState('');

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

  const GET_RESTAURANT_DATA = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      data {
        id
        attributes {
          name
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
          dishes {
            data {
              id
              attributes {
                name
                description
                price
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  const { loading, error, data } = useQuery(GET_RESTAURANT_DATA, {
    variables: { id: restId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  console.log(JSON.stringify(data))

  return (
    <>
      <div className="search m-3">
        <div className="d-flex" style={{ justifyContent: 'space-between' }}>
          <div className="d-flex">
            <img
              src={API_URL + data.restaurant.data.attributes.image.data.attributes.url}
              style={{ height: 50, width: 50, marginTop: 20 }}
            ></img>
            <div className="mx-3 my-2">
              <h2 className="py-3"> {data.restaurant.data.attributes.name}</h2>
            </div>
          </div>
          <Link href="/">
            <a style={{ color: 'black', fontSize: 35, marginTop: 20 }}>
              <i className="bi-arrow-left-circle text-dark"></i>
            </a>
          </Link>
        </div>
        <div>{data.restaurant.data.attributes.description}</div>
        <InputGroup className="pt-3 pb-2">
          <InputGroupAddon addonType="append"> Search </InputGroupAddon>
          <Input
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
            value={query}
          />
        </InputGroup>
        <br></br>
      </div>
      <Dishes dishes={data.restaurant.data.attributes.dishes}></Dishes>
    </>
  );
}

export default RestaurantPage;
