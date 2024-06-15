import { AtomParagraph, AvatarKUI } from 'kheiron-ui';
import { AvatarStyle } from './styles';
import { ProductType } from 'types';

export const ProductResolver = ({ product }: { product: unknown }) => {
  const __product = product as ProductType;
  return (
    <div css={AvatarStyle}>
      <AvatarKUI imgSrc={__product.image} altText={__product.name} />
      <AtomParagraph>{__product.id}</AtomParagraph>
    </div>
  );
};
