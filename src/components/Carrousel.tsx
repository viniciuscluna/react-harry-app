import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import { loremIpsum } from "lorem-ipsum";
import ImageType from '../types/ImageType';

const createItem = (imageList: ImageType[]): ImageType => {
    return {
        src: `https://picsum.photos/1200/500?random&t=${uuidv4()}`,
        altText: loremIpsum(),
        caption: loremIpsum(),
        key: imageList.length + 1
    };
}


const defaultList: ImageType[] = [
    createItem([]),
    createItem([])
];


export default () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [animating, setAnimating] = useState<boolean>(false);
    const [imageList, setImageList] = useState<ImageType[]>(defaultList);


    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === imageList.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
        if (imageList.length <= 15) {
            const currentList = [...imageList];
            currentList.push(createItem(imageList));
            setImageList(currentList);
        }
        else {
            const restartList: ImageType[] = [];
            restartList.push(createItem(restartList));
            restartList.push(createItem(restartList));
            setImageList(restartList);
            setActiveIndex(0);
        }
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

    const slides = imageList.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
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
