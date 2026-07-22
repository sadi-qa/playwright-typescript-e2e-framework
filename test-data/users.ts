import { getEnvironment } from '../config/environment';

export interface UserCredentials {
  username: string;
  password: string;
}

const environment = getEnvironment();

export const users: Record<
  'standard' | 'lockedOut' | 'invalid',
  UserCredentials
> = {
  standard: {
    username: environment.standardUser,
    password: environment.password,
  },

  lockedOut: {
    username: environment.lockedOutUser,
    password: environment.password,
  },

  invalid: {
    username: 'invalid_user',
    password: 'invalid_password',
  },
};