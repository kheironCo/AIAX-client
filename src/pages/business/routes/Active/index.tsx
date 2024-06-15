import { ActiveTable } from 'business/components/table';
import { dataTable } from './mock';

const Active = () => {
  return (
    <div>
      <ActiveTable data={dataTable} />
    </div>
  );
};

export default Active;
