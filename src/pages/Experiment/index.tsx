import { Card } from 'business/components/Card_prod';

const cardInfo = {
  imageUrl:
    'https://www.softlay.com/wp-content/uploads/2015/06/Windows-XP-SP3-ISO-Full-Version-Free-Download.jpg',
  altText: 'Card Image',
  title: 'Windows XP Professional',
  text: 'Windows XP Home and Professional editions were the only two major versions released in the year 2001. Win XP Home supports 32-bit OS (x86) whereas Windows XP Professional supports 64-bit OS (x64). Over the years, Win XP Pro 64-bit became more popular.',
  date: 'Sep. 10, 2020',
};

export const Experiment = () => {
  return (
    <>
      <Card cardInfo={cardInfo} />
    </>
  );
};
