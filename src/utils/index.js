export const firstLetterToUpperCase = (str) => {
  if (str === undefined) {
    return str;
  } else {
    return str
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  }
};

export const formatDate = (dateInput) => {
  return dateInput.toLocaleString("ru-RU");
};

export const padToThree = (number) => number <= 999 ? `00${number}`.slice(-3) : number;

export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
};
