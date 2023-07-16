import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { HStack, Spacer } from "@chakra-ui/layout";
import React from "react";

interface ICarrouselImages {
  images: string[];
}

export const CarrouselImages = ({ images }: ICarrouselImages) => {
  // Attributes
  const [imageIdx, setImageIdx] = React.useState<number>(0);
  // Context
  // Methods
  const incrementIdx = () => setImageIdx(imageIdx + 1);
  const decrementIdx = () => setImageIdx(imageIdx - 1);
  const isDisableIncrement = () => imageIdx + 1 == images.length;
  const isDisableDecrement = () => imageIdx == 0;
  // Component
  return (
    <>
      <HStack w="full">
        <button onClick={decrementIdx} disabled={isDisableDecrement()}>
          {"<"}
        </button>
        <Spacer />
        <Image src={images[imageIdx]} w="80%" borderRadius="10px" />
        <Spacer />
        <button onClick={incrementIdx} disabled={isDisableIncrement()}>
          {">"}
        </button>
      </HStack>
    </>
  );
};
