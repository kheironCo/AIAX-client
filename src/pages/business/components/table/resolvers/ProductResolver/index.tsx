import { Paragraph, AvatarKUI } from 'kheiron-ui';
import { AvatarStyle } from './styles';
import { ProductType } from 'types';

export const ProductResolver = ({ data }: { data: unknown }) => {
  const __product = data as ProductType;
  return (
    <div css={AvatarStyle}>
      <AvatarKUI imgSrc={__product.image} altText={__product.name} />
      <Paragraph>{__product.id}</Paragraph>
    </div>
  );
};
