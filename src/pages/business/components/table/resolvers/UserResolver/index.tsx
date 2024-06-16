import { UserProfileCardKUI } from 'kheiron-ui';
import { UserType } from 'types';
import { UserCardStyle } from './styles';
import Joi from 'joi';

const Schema = Joi.object({
  id: Joi.string().alphanum().required(),
  name: Joi.string().required(),
  image: Joi.string().uri().required(),
  email: Joi.string().optional(),
  phone_number: Joi.string().alphanum().optional(),
  age: Joi.number().optional(),
  dob: Joi.date().optional(),
});

export const UserResolver = ({ data }: { data: unknown }) => {
  const { value, error } = Schema.validate(data);

  if (error) return <div>{error.message}</div>;

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
