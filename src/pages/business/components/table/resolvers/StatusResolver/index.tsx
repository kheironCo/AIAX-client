import { StatusType } from 'types';
import { TagKUI } from 'kheiron-ui';

const tagConfig: Record<StatusType, Pick<Parameters<typeof TagKUI>[0], 'color' | 'border'>> = {
  active: {
    border: 'dashed',
    color: 'blue',
  },
  closed: {
    border: 'dashed',
    color: 'red',
  },
};

export const StatusResolver = ({ status }: { status: string }) => {
  const __status = status as StatusType;

  return <TagKUI label={__status} {...tagConfig[__status]} />;
};
