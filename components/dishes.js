import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import AppContext from './context';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';

function Dishes({ dishes }) {
  const { addItem } = useContext(AppContext);
  console.log(dishes)
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

  if (dishes.data.length > 0) {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {dishes.data.map((dish) => (
          <div style={{ padding: 0 }}>
            <Card style={{ width: 300, height: 561, margin: '0 10px 30px' }}>
              <CardImg
                top={true}
                style={{ height: 300, width: 300 }}
                src={API_URL + dish.attributes.image.data.attributes.url}
              />
              <CardBody>
                <CardTitle className="font-weight-bold">{dish.attributes.name}</CardTitle>
                <CardText>{dish.attributes.description}</CardText>
              </CardBody>
              <div
                className="card-footer"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <div
                  style={{ paddingLeft: 15, paddingTop: 8, fontWeight: 'bold' }}
                >
                  ${dish.attributes.price}
                </div>
                <Button
                  outline
                  color="dark"
                  onClick={() => addItem(dish)}
                >
                  + Add To Bag
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    );
  } else {
    return <h1> No Dishes</h1>;
  }
}
export default Dishes;
