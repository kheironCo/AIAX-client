import { AtomParagraph } from 'kheiron-ui';
import { DateType } from 'types';

export const DateResolver = ({ date }: { date: string }) => {
  const __date = date as DateType;
  return <AtomParagraph>{__date}</AtomParagraph>;
};
