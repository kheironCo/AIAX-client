import { UserProfileCardKUI } from 'kheiron-ui';
import { UserType } from 'types';
import { UserCardStyle } from './styles';

export const UserResolver = ({ data }: { data: unknown }) => {
  const __user = value as UserType;

  return (
    <UserProfileCardKUI
      css={UserCardStyle}
      image={__user.image}
      head={__user.name}
      body={`${__user.email}`}
    />
  );
};
type UserKeys = 'client' | 'seller';
const userKeys: UserKeys[] = ['client', 'seller'];
UserResolver.isUser = (key: string): key is UserKeys => userKeys.includes(key as UserKeys);
