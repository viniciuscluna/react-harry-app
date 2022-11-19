import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import Image from 'next/image';
import ImageType from '../types/imageType';
import shimmer from '../utils/shimmer';

type Props = {
    imageList: ImageType[];
}


    

export default function CarouselComponent({ imageList }: Props) {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [animating, setAnimating] = useState<boolean>(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === imageList.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? imageList.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = imageList.map((item, index) => {
        return (
            <CarouselItem
                id={index.toString()}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >

                <Image
                    alt={item.altText}
                    src={item.src}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${shimmer(700, 475)}`}
                    width={1200}
                    height={600}

                    className="card-img-top card-personagem"
                />
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.altText}
                />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators
                items={imageList}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}
