import Rating from "src/components/Rating";
import Schedule from "src/components/Schedule";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const containerStyles = css`
  display: flex;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const imageContainerStyles = css`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const imageStyles = css`
  width: 100%;
  height: auto;
`;

const contentContainerStyles = css`
  text-align: center;
  flex: 1;
  padding: inherit;
  width: 100%;

  @media (max-width: 768px) {
    order: 1;
    text-align: center;
  }
`;

const showInfoStyles = css`
  padding: 20px;
  color: black;
  background-color: #F1F0F5;
  border-radius: 4px;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    order: 3;
  }
`;

const itemListStyles = css`
  margin-top: 10px;
  padding-left: 0;
  list-style-type: none;
`;

const itemStyles = css`
  margin-bottom: 5px;
`;

const Container = styled.div`
  ${containerStyles}
`;

const ImageContainer = styled.div`
  ${imageContainerStyles}
`;

const Image = styled.img`
  ${imageStyles}
`;

const ContentContainer = styled.div`
  ${contentContainerStyles}
`;

const ShowInfo = styled.div`
  ${showInfoStyles}
`;

const ItemList = styled.ul`
  ${itemListStyles}
`;

const Item = styled.li`
  ${itemStyles}
`;

const ShowDetails = ({ data: show }) => {
  const renderSummary = () => {
    return { __html: show.summary };
  };

  return (
    <Container>
      <ImageContainer>
        <Image
          src={show.image?.medium || show.image?.original}
          alt={show.name}
        />
      </ImageContainer>
      <ContentContainer>
        <h1>{show.name}</h1>
        <div
          className="summaryContainer"
          dangerouslySetInnerHTML={renderSummary()}
        />
      </ContentContainer>
      <ShowInfo>
        <h2>Show Info</h2>
        <ItemList className="itemList">
          <Item className="item">
            <strong>Network:</strong> {show.network?.name} (
            {show.premiered.substring(0, 4)} - now)
          </Item>
          <Item className="item">
            <strong>Schedule:</strong>
            <Schedule time={show.schedule?.time} days={show.schedule?.days} />
          </Item>
          <Item className="item">
            <strong>Status:</strong> {show.status}
          </Item>
          <Item className="item">
            <strong>Show Type:</strong> {show.type}
          </Item>
          <Item className="item">
            <strong>Genres:</strong> {show.genres.join(", ")}
          </Item>
          <Item className="item">
            <strong>Official Site:</strong>
            <a href={show.officialSite}>{show.officialSite}</a>
          </Item>
          <Item>
            <div>
              <Rating average={show.rating?.average} />
            </div>
          </Item>
        </ItemList>
      </ShowInfo>
    </Container>
  );
};

export default ShowDetails;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await res.json();

  return { props: { data } };
}
