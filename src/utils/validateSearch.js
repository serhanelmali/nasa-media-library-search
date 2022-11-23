const validateSearch = (searchValue, startYear, endYear, setErrors) => {
  const errors = {};

  const currentYear = new Date().getFullYear();
  if (!searchValue) {
    errors.searchValue = "Please fill search field!";
  } else if (searchValue.length < 3) {
    errors.searchValue = "Search value should be minimum 3 characters!";
  } else {
    delete errors.searchValue;
  }

  if (startYear) {
    if (startYear < 1920) {
      errors.startYear = "Start year cannot be lower than 1920!";
    } else if (startYear > currentYear) {
      errors.startYear = "Start year cannot be higher than current year!";
    } else if (typeof ++startYear !== "number") {
      errors.startYear = "Start year should be number!";
    } else {
      delete errors.startYear;
    }
  }

  if (endYear) {
    if (endYear < 1920) {
      errors.endYear = "End year cannot be lower than 1920!";
    } else if (endYear > currentYear) {
      errors.startYear = "End year cannot be higher than current year!";
    } else if (typeof ++endYear !== "number") {
      errors.endYear = "End year should be number!";
    } else {
      delete errors.endYear;
    }
  }

  if (startYear && endYear && startYear > endYear) {
    errors.startYear = "Start year cannot be more than end year!";
  }

  return setErrors(errors);
};

export default validateSearch;
