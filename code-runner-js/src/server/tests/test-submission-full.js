module.exports = input => input.split(',').map(int => parseInt(int)).reduce((accumulator, currentValue) => accumulator + currentValue);
