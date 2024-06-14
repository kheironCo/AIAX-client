type UserType = 'client' | 'seller';

const ResolverTableCell: Record<UserType, () => JSX.Element> = {
  client: () => <div></div>,
  seller: () => <></>,
};

type Props = {};

const TableCell = (props: Props) => {
  return <div>TableCell</div>;
};

export default TableCell;
