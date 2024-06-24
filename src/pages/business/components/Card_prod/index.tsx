import styled from 'styled-components';

const CardContainer = styled.div`
  width: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardImage = styled.img`
  width: 30%;
  height: auto;
  padding-left: 8px;
`;

const CardContent = styled.main`
  width: 60%;
  padding: 10px;
`;

const CardHead = styled.h1`
  font-size: 15px;
  margin: 10px;
`;

const CardDate = styled.span`
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 10px;
  color: #333;
  line-height: 1.5;
`;
interface CardProps {
  cardInfo: {
    imageUrl: string;
    altText: string;
    title: string;
    text: string;
    date: string;
  };
}

export const Card: React.FC<CardProps> = ({ cardInfo }) => {
  return (
    <CardContainer>
      <CardImage src={cardInfo.imageUrl} alt={cardInfo.altText} />
      <CardContent>
        <CardHead>{cardInfo.title}</CardHead>
        <CardText>{cardInfo.text}</CardText>
        <CardDate>{cardInfo.date}</CardDate>
      </CardContent>
    </CardContainer>
  );
};
