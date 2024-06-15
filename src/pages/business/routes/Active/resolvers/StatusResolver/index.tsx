import { AtomParagraph } from 'kheiron-ui';
import { StatusType } from 'types';

export const StatusResolver = ({ status }: { status: any }) => {
  const __status = status as StatusType;
  return <AtomParagraph>{__status}</AtomParagraph>;
};
