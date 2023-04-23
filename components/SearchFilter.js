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
                <Label for="city">
                Ciudad
                </Label>
                <Input
                id="city"
                name="city"
                />
            </FormGroup>
            </Col>
            <Col md={6}>
            <FormGroup>
                <Label for="country">
                País
                </Label>
                <Input
                id="country"
                name="country"
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
        <div className={styles.searchFilter__content__button}>
            <Button  color="warning">
                Filtrar
            </Button>
        </div>
        </Form>
      </div>
    </div>
  );
};

export default SearchFilter;
