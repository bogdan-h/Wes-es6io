/*<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New String Methods</title>
</head>
<body>

<script>*/
const course = 'RFB2';
console.log(course.startsWith('RFB'));

const flightNumber = '20-AC2018-jz';
// consider the starts-with after 3 characters ... (by default is ...0)
console.log(flightNumber.startsWith('AC', 3));
console.log(flightNumber.endsWith('jz'));


const accountNumber = '825242631RT0001';
// consider the first 11 characters - in our case and then see if it ends with 'RT'
console.log(accountNumber.endsWith('RT',11));

const make = 'BMW';
const model = 'x5';
const colour = 'Royal Blue';
console.log('='.repeat(80));

// .startsWith()

// .endsWith()

// .includes()

// .repeat()

function leftPad(str, length = 20) {
  return `→ ${' '.repeat(length - str.length)}${str}`;
}

console.log(leftPad(make));
console.log(leftPad(model));
console.log(leftPad(colour));


// </script>

// </body>
// </html>
