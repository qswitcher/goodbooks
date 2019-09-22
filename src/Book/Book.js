import React from "react";
import styled from "styled-components";
import { Flex, Box, Link, Image, Text } from "rebass/styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

const StarContainer = styled.span`
  width: 16px;
`;

const Card = styled(Flex)`
  padding: 20px;
  flex-direction: row;
  justify-content: flex-start;
  border-top: solid 1px #dadada;
`;

const Book = ({ book }) => {
  const title = book.volumeInfo.title;
  const averageRating = !!book.volumeInfo.averageRating
    ? book.volumeInfo.averageRating
    : 0;
  let firstAuthor = (book.volumeInfo.authors || [])[0];
  if (firstAuthor) {
    firstAuthor = `by ${firstAuthor}`;
  }
  const thumbnail = book.volumeInfo.imageLinks.thumbnail;
  return (
    <Card>
      <Link href="#">
        <Image width="100px" mr="20px" src={thumbnail} />
      </Link>
      <Box>
        <Box>
          <Link variant="nav" href="#" color="#292929" lineHeight="1.5">
            {title}
          </Link>
        </Box>
        <Box>
          <Link
            variant="nav"
            href="#"
            color="#717171"
            fontSize="0.875rem"
            mt="10px"
            lineHeight="1.5"
          >
            {firstAuthor}
          </Link>
        </Box>

        <Box
          css={{
            position: "relative",
            width: "80px"
          }}
          bg="white"
        >
          <Box
            css={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${(averageRating / 5) * 100}%`,
              overflow: "hidden"
            }}
          >
            <Box
              css={{
                minWidth: "87px"
              }}
            >
              {[0, 1, 2, 3, 4].map(index => {
                return (
                  <StarContainer>
                    <FontAwesomeIcon
                      icon={faStar}
                      size="sm"
                      key={index}
                      mask={["far"]}
                      color="#FF8C00"
                    />
                  </StarContainer>
                );
              })}
            </Box>
          </Box>
          <Box justifyContent="center">
            {[0, 1, 2, 3, 4].map(index => {
              return (
                <StarContainer>
                  <FontAwesomeIcon
                    icon={faStar}
                    size="sm"
                    key={index}
                    mask={["far"]}
                    color="#f2f2f2"
                  />
                </StarContainer>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Book;
