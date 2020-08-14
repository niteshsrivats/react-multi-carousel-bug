import React from 'react';
import SliderButtons from './common/SliderButtons';
import data from '../data/Content.json';
import Card from './common/Card';
import { Container } from '@material-ui/core';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const Section = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1050 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1050, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  const beforeChange = (index) => {
    console.log('Before Change Index', index);
  };

  const afterChange = (index) => {
    console.log('After Change Index', index);
  };

  return (
    <Container maxWidth={'lg'} style={{ position: 'relative', marginTop: '72px' }}>
      <Carousel
        arrows={false}
        customButtonGroup={<SliderButtons />}
        renderButtonGroupOutside
        infinite
        afterChange={afterChange}
        beforeChange={beforeChange}
        responsive={responsive}
        ssr
      >
        {data.map((card, index) => (
          <Card button={'READ MORE'} content={card.content} key={index} name={card.name} title={card.name} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Section;
