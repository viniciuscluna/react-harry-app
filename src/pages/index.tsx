import { loremIpsum } from "lorem-ipsum";
import { GetStaticProps } from "next";
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Carousel from "../components/carousel";
import ImageType from "../src/types/imageType";

const createItem = (key: number): ImageType => {
  return {
    src: `https://picsum.photos/1200/500?random&t=${uuidv4()}`,
    altText: loremIpsum(),
    caption: loremIpsum(),
    key: key
  };
}


export const getStaticProps: GetStaticProps = async () => {
  const imageList: ImageType[] = [];

  for (let index = 0; index < 15; index++) {
    imageList.push(createItem(index));
  }

  return {
    props: {
      imageList: imageList
    },
    revalidate: 15
  }
}

interface IndexProps {
  imageList: ImageType[];
}

const Index = ({ imageList }: IndexProps) => (
  <div className="d-flex min-vh-100 text-center justify-content-center flex-column">
    <h2 className="gustavo-potter-header pb-2">Reri porte</h2>
    <Carousel imageList={imageList} />
  </div>
)

export default Index;