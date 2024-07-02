import { z } from 'zod';

export const UserRegister = z
  .object({
    name: z.string().min(1, { message: 'Required' }),
    lastName: z.string().min(1, { message: 'Required' }),
    businessName: z.string().min(1).optional(),
    email: z.string().email('Required'),
    phone: z.string().min(1),
    password: z.string().min(8),
    repeatPassword: z.string().min(8),
    terms: z.boolean().refine((value) => value === true, {
      message: 'You must accept the terms and conditions to continue',
    }),
  })
  .refine(({ password, repeatPassword }) => password === repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
  });
export type IUserRegister = z.infer<typeof UserRegister>;

export const User = z.object({
  name: z.string().min(1),
});

export type IUser = z.infer<typeof User>;
