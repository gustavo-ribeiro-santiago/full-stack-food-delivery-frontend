import { useState, useContext, useEffect } from 'react';
import AppContext from './context';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap';

function Dishes({ dishes, query }) {
  const { addItem } = useContext(AppContext);
  console.log(dishes);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

  let searchQuery = dishes.data.filter((dish) => {
    return dish.attributes.name.toLowerCase().includes(query);
  });

  if (searchQuery.length > 0) {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          // justifyContent: 'space-between',
        }}
      >
        {searchQuery.map((dish) => (
          <div style={{ padding: 0 }}>
            <Card style={{ width: 300, height: 561, margin: '0 52px 30px 16px' }}>
              <CardImg
                top={true}
                style={{ height: 300, width: 300 }}
                src={API_URL + dish.attributes.image.data.attributes.url}
              />
              <CardBody>
                <CardTitle className="font-weight-bold">
                  {dish.attributes.name}
                </CardTitle>
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
                <Button outline color="dark" onClick={() => addItem(dish)}>
                  + Add To Bag
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    );
  } else {
    return <h5 className='ml-3'> No Dishes Found </h5>;
  }
}
export default Dishes;
