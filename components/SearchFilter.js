import React from 'react';
import styles from '../styles/styles.module.scss';
import { Form, FormGroup, Row, Col, Button, Label, Input  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchFilter = (props ) => {
  const {title} = props;

  return (
    <div className={styles.searchFilter}>
      <h1>{title}</h1>
      <div className={styles.searchFilter__content}>
      <Form>
        <Row>
            <Col md={6}>
            <FormGroup>
                <Label for="restaurantName">
                Nombre del restaurante
                </Label>
                <Input
                id="restaurantName"
                name="restaurantName"
                placeholder="nombre del restaurante"
                type="text"
                />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Label for="category">
                Categoría
                </Label>
                <Input
                id="category"
                name="category"
                placeholder="Categoría"
                type="select"
                multiple
                >   
                     <option onClick={() => {}}>
                        Burguer
                    </option>
                    <option>
                        Pizza
                    </option>
                    <option>
                        Sushi
                    </option>
                    <option>
                        Italiano
                    </option>
                    <option>
                        Kebab
                    </option>
                    </Input>
            </FormGroup>
            </Col>
        </Row>
        <FormGroup>
            <Label for="address">
            Dirección
            </Label>
            <Input
            id="address"
            name="address"
            placeholder="Calle x"
            />
        </FormGroup>
        <Row>
            <Col md={6}>
            <FormGroup>
                <Label for="exampleCity">
                City
                </Label>
                <Input
                id="exampleCity"
                name="city"
                />
            </FormGroup>
            </Col>
            <Col md={4}>
            <FormGroup>
                <Label for="exampleState">
                State
                </Label>
                <Input
                id="exampleState"
                name="state"
                />
            </FormGroup>
            </Col>
            <Col md={2}>
            <FormGroup>
                <Label for="exampleZip">
                Zip
                </Label>
                <Input
                id="exampleZip"
                name="zip"
                />
            </FormGroup>
            </Col>
        </Row>
        <FormGroup check>
            <Input
            id="bikeFriendly"
            name="bikeFriendly"
            type="checkbox"
            />
            <Label
            check
            for="bikeFriendly"
            >
            ¿Bike Friendly?
            </Label>
        </FormGroup>
        <Button>
            Sign in
        </Button>
        </Form>
      </div>
    </div>
  );
};

export default SearchFilter;
