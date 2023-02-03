export const getClasses = (Classes) =>
    Classes
    .filter((item) => item !== '')
    .join(" ")
    .trim();