import { useState } from "react";
import { items } from "../public/items.json";
import { Carousel } from "react-bootstrap";
import styles from "../styles/styles.module.scss";

export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <div className={styles.slide__carousel}>
        {bootstrap.map((item) => (
          <Carousel.Item key={item.id} className={styles.slide__itemP} interval={4000}>
            <img src={item.imageUrl} alt="slides" />
            {/*<Carousel.Caption className={styles.slide__caption}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Carousel.Caption>*/}
          </Carousel.Item>
        ))}
      </div>
    </Carousel>
  );
}