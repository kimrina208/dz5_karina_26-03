function filterBooks(...books) {
  const booksWithU = [];
  const otherBooks = [];

  for (let book of books) {
    if (book.includes('у')) {
      booksWithU.push(book);
    } else {
      otherBooks.push(book);
    }
  }

  console.log(`Книги с буквой "у": ${booksWithU.join(', ')}`);
  console.log(`Остальные книги: ${otherBooks.join(', ')}`);
}

filterBooks('Война и мир', 'Преступление и наказание', 'Мастер и Маргарита', 'Унесенные ветром', 'Анна Каренина');



function average(...numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum / numbers.length;
}

console.log(average(1, 2, 3, 4, 5)); // Output: 3
