import { gql, useQuery } from '@apollo/client';
import Dishes from './dishes';
import { useContext, useState } from 'react';
import Link from 'next/link';

import AppContext from './context';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';

function RestaurantList({ search }) {
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
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
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(`Query Data: ${data.restaurants.data[0].attributes.name}`);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

  let searchQuery = data.restaurants.data.filter((res) => {
    return res.attributes.name.toLowerCase().includes(search);
  });

  if (searchQuery.length > 0) {
    const restList = searchQuery.map((res) => (
      <Col key={res.id}>
        <Card style={{ width: 300, height: 540, marginBottom: 40 }}>
          <CardImg
            top={true}
            style={{ height: 300, width: 300 }}
            src={API_URL + res.attributes.image.data.attributes.url}
          />
          <CardBody>
            <CardTitle className="font-weight-bold">
              {res.attributes.name}
            </CardTitle>
            <CardText>{res.attributes.description}</CardText>
          </CardBody>
          <div className="card-footer">
            <Link legacyBehavior href={`/${res.id}`}>
              <Button color="dark" className="d-block m-auto px-4">
                View dishes
              </Button>
            </Link>
          </div>
        </Card>
      </Col>
    ));

    return (
      <Container>
        <Row xs="3">{restList}</Row>
      </Container>
    );
  } else {
    return <h1> No Restaurants Found</h1>;
  }
}
export default RestaurantList;
