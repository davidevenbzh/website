import dayjs from 'dayjs';

const JOB_STARTING_YEAR = 2017;
const BIRTH_YEAR = 1995;

export const getYearsOfExperience = (): number => {
  const currentYear = dayjs().year();
  return currentYear - JOB_STARTING_YEAR;
};

export const getAge = (): number => {
  const currentYear = dayjs().year();
  return currentYear - BIRTH_YEAR;
};
