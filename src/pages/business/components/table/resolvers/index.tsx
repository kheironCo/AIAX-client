import { DateResolver } from './DateResolver';
import { ProductResolver } from './ProductResolver';
import { StatusResolver } from './StatusResolver';
import { UnResolver } from './UnResolver';
import { UserResolver } from './UserResolver';

type ResolverKeys = 'date' | 'product' | 'client' | 'details' | 'status' | 'seller';
type ComponentType = (props: { data: unknown }) => JSX.Element;

const TableData: Record<ResolverKeys, ComponentType> = {
  client: UserResolver,
  seller: UserResolver,
  product: ProductResolver,
  date: DateResolver,
  status: StatusResolver,
  details: UnResolver,
};

type Props = { keyType: string; value: unknown };

export const Resolver = ({ keyType, value }: Props) => {
  const Component = TableData[keyType as ResolverKeys] ?? UnResolver;
  return <Component data={value} />;
};
