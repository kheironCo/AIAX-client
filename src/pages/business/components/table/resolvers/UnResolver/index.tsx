type Props = { data: unknown };

export const UnResolver = ({ data }: Props) =>
  ['string', 'number'].includes(typeof data) ? <>{data}</> : <>{typeof data}</>;
