/*
Output 1:
['Jakarta', 'Bandung', 'Tangerang', 'Balai', 'Bogor']

Output 2:
['Jakarta', 'Bandung', 'Tangerang', 'Depok', 'Bekasi']

Output 3:
['Denpasar', 'Semarang', 'Tangerang', 'Depok', 'Bekasi']
*/

const cities = ['Jakarta', 'Bandung', 'Tangerang', 'Balai', 'Pekanbaru'];
cities[4] = 'Bogor'; 
console.log(cities, 'Output 1'); // ['Jakarta', 'Bandung', 'Tangerang', 'Balai', 'Bogor']

// First Option
// cities.pop(); 
// console.log(cities, 'Output 1');

// // Second Option
// cities.push('Bogor')
// console.log(cities, 'Output 1');

// // Third Option
// cities[cities.length - 1] = 'Bogor';
// console.log(cities);

cities.pop();
cities.pop();
cities.push('Depok', 'Bekasi');
// or below
// cities.push('Depok');
// cities.push('Bekasi')
console.log(cities, 'Output 2'); // ['Jakarta', 'Bandung', 'Tangerang', 'Depok', 'Bekasi']

cities.shift();
cities.shift();
cities.unshift('Denpasar', 'Semarang');
console.log(cities, 'Output 3'); // ['Denpasar', 'Semarang', 'Tangerang', 'Depok', 'Bekasi']