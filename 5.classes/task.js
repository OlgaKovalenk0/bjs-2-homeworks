class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(number) {
    if (number < 0) {
      this._state = 0;
    }
    else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find(book => book[type] == value) || null;
  }

  giveBookByName(bookName) {
    const book = this.findBookBy('name', bookName);
    if (book) {
      this.books.splice(this.books.indexOf(book), 1);
    }
    return book;
  }
}

// Задача 3

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }
  addMark(mark, subject) {
    if (this.marks?.[subject] === undefined && mark >= 2 && mark <= 5) {
      this.marks[subject] = [];
      this.marks[subject].push(mark);
    } else if (this.marks.hasOwnProperty(subject) && mark >= 2 && mark <= 5) {
      this.marks[subject].push(mark);
    }
  }
  getAverageBySubject(subject) {
    if (this.marks.hasOwnProperty(subject) === false) {
      return 0;
    }
    const gradePointAverage = this.marks[subject].reduce((acc, mark, index, arr) => {
      acc += mark;
      if (index === arr.length - 1) {
        return acc / arr.length;
      }
      return acc;
    }, 0);
    return gradePointAverage;
  }
  getAverage() {
    if (Object.keys(this.marks).length === 0) {
      return 0;
    }
    let allSubject = Object.keys(this.marks);
    for (let subject of allSubject) {
      allSubject[allSubject.indexOf(subject)] = this.getAverageBySubject(subject);
    }
    const gradePointAverage = allSubject.reduce((acc, mark, index, arr) => {
      acc += mark;
      if (index === arr.length - 1) {
        return acc / arr.length;
      }
      return acc;
    }, 0);
    return gradePointAverage;
  }
}