import { TableKUI } from 'kheiron-ui';
import { ActiveTableData } from 'types';
import { DateResolver, ProductResolver, StatusResolver, UserResolver } from '../resolvers';

type ActiveTableProps = {
  data: ActiveTableData[];
};

export const ActiveTable = ({ data }: ActiveTableProps) => {
  return (
    <TableKUI
      keys={['date', 'product', 'client', 'details', 'status', 'seller']}
      head={{
        client: 'Client',
        seller: 'Seller',
        product: 'Products',
        date: 'Date',
        details: 'Details',
        status: 'Status',
      }}
      body={data}
      renderBody={({ key, value }) => {
        if (UserResolver.isUser(key)) {
          return <UserResolver user={value} />;
        }
        if (key === 'status') {
          return <StatusResolver status={value} />;
        }
        if (key === 'product') {
          return <ProductResolver product={value} />;
        }
        if (key === 'date') {
          return <DateResolver date={value} />;
        }
        if (['string', 'number'].includes(typeof value)) return <>{value}</>;
        else return <>{typeof value}</>;
      }}
    />
  );
};
