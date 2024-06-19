import { AtomParagraph } from 'kheiron-ui';
import { DateType } from 'types';

export const DateResolver = ({ data }: { data: unknown }) => {
  const __date = data as DateType;
  return <AtomParagraph>{__date}</AtomParagraph>;
};
