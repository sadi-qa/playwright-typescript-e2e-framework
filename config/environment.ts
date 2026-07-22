export interface TestEnvironment {
  baseUrl: string;
  standardUser: string;
  lockedOutUser: string;
  password: string;
}

const getValue = (value: string | undefined, fallback: string): string => {
  const resolvedValue = value?.trim();

  return resolvedValue || fallback;
};

export const getEnvironment = (): TestEnvironment => ({
  baseUrl: getValue(
    process.env.BASE_URL,
    'https://www.saucedemo.com',
  ),
  standardUser: getValue(
    process.env.STANDARD_USER,
    'standard_user',
  ),
  lockedOutUser: getValue(
    process.env.LOCKED_OUT_USER,
    'locked_out_user',
  ),
  password: getValue(
    process.env.PASSWORD,
    'secret_sauce',
  ),
});