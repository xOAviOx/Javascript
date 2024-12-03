function JadenString(str) {
  const string = str.split(/ /g);

  for (let i = 0; i < string.length; i++) {
    string[i] = string[i][0].toUpperCase() + string[i].substr(1);
  }
  return string;
}
console.log(JadenString("How can mirrors be real if our eyes arent real"));
