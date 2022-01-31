import React from "react";
import styled from "styled-components";

const Container = styled.div`
@media screen and (max-width: 1600px) { 
  grid-column: auto;
  grid-row: 1;
  gap: 20px;
  background-color: white;
  min-width: 350px;
  max-width: 400px;
  height: auto;
  border-radius: 14px;
  box-shadow: 0px 10px 30px hsl(180, 2%, 84%);
}
@media screen and (max-width: 800px) {
  grid-column: auto;
  grid-row: 1;
  max-width: 400px;
}

@media screen and (max-width: 600px) {
  grid-column: 1;
  grid-row: auto;
  max-width: 400px;
}

@media screen and (max-width: 400px) {
  grid-column: 1;
  grid-row: auto;
  max-width: 400px;
}
`;

const Header = styled.div`
  background-position: 0px 0px;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 150px;
  text-align: center;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
`;

const ImageDiv = styled.div`
  display: flex;
  align-content: center;
`;

const Avatar = styled.img`
  margin: auto;
  width: 150px;
  border: solid white 8px;
  border-radius: 50%;
  margin-top: -70px;
  text-align: center;
`;
const RewardsContainer = styled.div`
  display: grid;
  border-top: solid rgb(206, 206, 206) 1px;
  text-align: center;
  justify-content: space-around;
`;

const BronzeMedals = styled.div`
  grid-column: 1/1;
  grid-row: 1/1;
`;

const SilverMedals = styled.div`
  grid-column: 2/2;
  grid-row: 1/1;
`;

const GoldMedals = styled.div`
  grid-column: 3/3;
  grid-row: 1/1;
`;

const Numbers = styled.h1`
  font-weight: normal;
  font-size: 2rem;
  color: hsl(0, 0%, 50%);
  text-align: center;
  letter-spacing: 1px;
  padding-bottom: 20px;
  line-height: 5px;
`;

const MedalCategory = styled.h2`
  font-weight: normal;
  font-size: 1.2rem;
  color: hsl(0, 0%, 50%);
  text-align: center;
  padding-bottom: 10px;
`;

const Heading = styled.h1`
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  margin: 30px 0px 30px 0px;
`;

const PersonalDetails = styled.h1`
font-weight: bold;
font-size: 1.5rem;
text-align: center;
padding: 10px 20px 0px 20px;
}
`;

const Card = (props) => {
  const style = {
    backgroundImage: `url(${props.background})`,
  };
  return (
    <Container>
      <Header style={style}></Header>
      <ImageDiv>
        <Avatar className="avatar-img" src={props.avatar} alt={props.name} />
      </ImageDiv>
      <PersonalDetails>
        {props.name} {props.surname}
      </PersonalDetails>
      <Heading>Rewards</Heading>
      <RewardsContainer>
        {props.bronze !== 0 ? (
          <BronzeMedals>
            <MedalCategory>Bronze</MedalCategory>
            <Numbers>{props.bronze}</Numbers>
          </BronzeMedals>
        ) : null}
        {props.silver !== 0 ? (
          <SilverMedals>
            <MedalCategory>Silver</MedalCategory>
            <Numbers>{props.silver}</Numbers>
          </SilverMedals>
        ) : null}
        {props.gold !== 0 ? (
          <GoldMedals>
            <MedalCategory>Gold</MedalCategory>
            <Numbers>{props.gold}</Numbers>
          </GoldMedals>
        ) : null}
      </RewardsContainer>
    </Container>
  );
};

export default Card;
