import { Box, SimpleGrid } from "@chakra-ui/react";

interface Film {
  id: number;
  name: string;
  bgImage?: string;
  bgColor?: string;
  height: string;
  border: string;
}

interface Props {
  films: Film[];
  onReview: (id: number) => void;
}

const Reviews = ({ films, onReview }: Props) => {
  return (
    <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
      {films.map((film) => (
        <Box
          key={film.id}
          onClick={() => onReview(film.id)}
          bgImage={film.bgImage}
          bg={film.bgColor}
          h={film.height}
          border={film.border}
          backgroundSize='contain'
          backgroundRepeat='no-repeat'
          backgroundPosition='center'>
          {film.name}
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Reviews;
