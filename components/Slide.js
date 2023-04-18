import React from 'react';
import Carousel from "react-multi-carousel";
import Image from 'next/image'
import "react-multi-carousel/lib/styles.css";


const Slide = (props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const images = props.images;
    

    return (
        <Carousel
        //ssr={true} // means to render carousel on server-side.
        swipeable={true}
        responsive={responsive}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={false}
        customTransition="linear 3s"
        //transitionDuration={2500}
        containerClass="carouselContainer"
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        //dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-80-px height-100-%"
        >

        {images.map((image, index) => (
            <div key={index}>
                {/*<Image src={image} width="100%" quality={100} priority={index < 5 ? true : false} height="100%" alt={`logo${index}`}/>*/}
                <img src={image} alt={`logo${index}`}/>
            </div>
        ))}
        </Carousel>
        
    );
}

export default Slide;

  