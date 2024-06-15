import { AtomParagraph } from 'kheiron-ui';
import { DateType } from 'types';

export const DateResolver = ({ date }: { date: any }) => {
  const __date = date as DateType;
  return <AtomParagraph>{__date}</AtomParagraph>;
};
