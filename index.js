function getFullName(fname, lname) {
  return `${fname} ${lname}`;
}

const actualFullName = getFullName('Rakhmatulloh', 'Rustamov');
const expectedFullName = 'RakhmatullohRustamov';

if (actualFullName !== expectedFullName) {
  throw new Error(`${actualFullName} is not equal to ${expectedFullName}`);
}
