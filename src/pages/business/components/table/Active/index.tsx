import { TableKUI } from 'kheiron-ui';
import { ActiveTableData } from 'types';
import { Resolver } from '../resolvers';

type ActiveTableProps = {
  data: ActiveTableData[];
};

export const ActiveTable = ({ data }: ActiveTableProps) => {
  return (
    <TableKUI //<UserType | ProductType | DateType | StatusType | TableDetailType, string, string>
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
      renderBody={({ key, value }) => <Resolver keyType={key} value={value} />}
    />
  );
};
