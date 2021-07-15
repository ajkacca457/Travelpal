import React, { useState } from 'react';
import Citem1 from "../images/citem1.jpg";
import Citem2 from "../images/citem2.jpg";
import Citem3 from "../images/citem3.jpg";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: Citem1,
    altText: 'TravelPal is the place where you rest',
    caption: 'TravelPal offers you affordable and worldclass accommodation during your travel to anywhere in the world.'
  },
  {
    src:Citem2,
    altText: 'TravelPal provides you comfort.',
    caption: 'With TravelPal you can secure the best rooms in advance with just few clicks.'
  },
  {
    src: Citem3,
    altText: 'TravelPal treats you the way you deserve.',
    caption: 'TravelPal makes sure that all the guests are receiving the best care and top quality service.'
  }
];

const Display = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{width:"100%",height:"80vh"}} />
        <CarouselCaption captionText={item.caption} captionHeader={item.altText} className="caption"/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      style={{width:"100vw",height:"50vh"}}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}  />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Display;