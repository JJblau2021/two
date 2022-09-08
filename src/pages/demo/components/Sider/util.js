export const generateOptionByEnums = (enums) => {
  if (typeof enums !== 'object' || !enums) {
    return [];
  }
  return Object.entries(enums).map(([key, value]) => ({
    value: Number(key),
    label: value,
  }));
};
