import { z } from 'zod';

export const UserRegister = z.object({
  name: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  businessName: z.string().min(1).optional(),
  email: z.string().email(),
  phone: z.string().min(1).optional(),
  password: z.string().min(1).optional(),
  repeatPassword: z.string().min(1).optional(),
});
export type IUserRegister = z.infer<typeof UserRegister>;

export const User = z.object({
  name: z.string().min(1),
});

export type IUser = z.infer<typeof User>;
