module.exports = (name) => {
  const replaceRegex = /[^a-zA-Z0-9-]/g;
  const replaced = name.replace(replaceRegex, '');
  const shortened = replaced.substring(0, 39);
  return shortened;
};
