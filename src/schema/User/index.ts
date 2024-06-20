import { z } from 'zod';

export const UserRegister = z.object({
  name: z.string().min(1),
  lastName: z.string().min(1),
  businessName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  password: z.string().min(1),
  repeatPassword: z.string().min(1),
});
export type IUserRegister = z.infer<typeof UserRegister>;

export const User = z.object({
  name: z.string().min(1),
});

export type IUser = z.infer<typeof User>;
