import { AtomParagraph, AvatarKUI, TableKUI, UserProfileCardKUI } from 'kheiron-ui';
import { ActiveTableData, DateType, ProductType, StatusType, UserType } from './type';
import { dataTable } from './mock';
import { UserCardStyle } from './styles';

const UserResolver = ({ user }: { user: any }) => {
  const __user = user as UserType;
  return (
    <UserProfileCardKUI
      css={UserCardStyle}
      image={__user.image}
      head={__user.name}
      body={`${__user.email}`}
    />
  );
};
UserResolver.isUser = function (key: string) {
  return ['client', 'seller'].includes(key as UserKeysType);
};

const StatusResolver = ({ status }: { status: any }) => {
  const __status = status as StatusType;
  return <AtomParagraph>{__status}</AtomParagraph>;
};

const ProductsResolver = ({ products }: { products: any }) => {
  const __products = products as ProductType;
  console.log(__products);
  return (
    <div>
      {/* <AvatarKUI imgSrc={__products.image} altText={__products.name} /> */}
      {/* <AtomParagraph>{__products.id}</AtomParagraph> */}
    </div>
  );
};

const DateResolver = ({ date }: { date: any }) => {
  const __date = date as DateType;
  return <AtomParagraph>{__date.toDateString()}</AtomParagraph>;
};

type UserKeysType = 'client' | 'seller';

type ActiveTableProps = {
  data: ActiveTableData[];
};

const ActiveTable = ({ data }: ActiveTableProps) => {
  return (
    <TableKUI
      keys={['date', 'products', 'client', 'details', 'status', 'seller']}
      head={{
        client: 'Client',
        seller: 'Seller',
        products: 'Products',
        date: 'Date',
        details: 'Details',
        status: 'Status',
      }}
      body={data as Record<string, any>[]}
      renderBody={({ key, value }) => {
        if (['client', 'seller'].includes(key as UserKeysType)) {
          return <UserResolver user={value} />;
        }
        if (key === 'status') {
          return <StatusResolver status={value} />;
        }
        if (key === 'products') {
          return <ProductsResolver products={value} />;
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

const Active = () => {
  return (
    <div>
      <ActiveTable data={dataTable} />
    </div>
  );
};

export default Active;
