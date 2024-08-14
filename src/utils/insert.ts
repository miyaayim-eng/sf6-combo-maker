export const insert = (date) => {
  const formattedDate = dayjs(date).format("YYYY-MM-DD");
  return formattedDate;
};
