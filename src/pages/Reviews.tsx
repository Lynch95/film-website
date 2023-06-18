import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";

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
  const [selectedFilm, setSelectedFilm] = useState<number | null>(null);

  const handleClick = (film: Film) => {
    onReview(film.id);
    setSelectedFilm(film.id);
  };

  const getFilmMessage = (filmId: number) => {
    switch (filmId) {
      case 1:
        return "Hello world";
      case 3:
        return "Good morning";
      // Add more cases for other filmIds
      default:
        return "";
    }
  };

  return (
    <>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
        {films.map((film) => (
          <Box
            key={film.id}
            onClick={() => handleClick(film)}
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
      {selectedFilm && <Text>{getFilmMessage(selectedFilm)}</Text>}
    </>
  );
};

export default Reviews;
