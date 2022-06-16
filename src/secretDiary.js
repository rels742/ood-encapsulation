class SecretDiary {
  constructor() {
    this.entries = [];
    this.locked = true;
  }

  lock() {
    this.locked = true;
  }

  unlock() {
    this.locked = false;
  }

  addEntry(entryDetails) {
    if (this.locked === true) {
      return "Sorry cannot be done";
    } else {
      this.entries.push(entryDetails);
    }
  }

  getEntries() {
    return this.entries;
  }
}
// returns the array with diary entry (object)
//   addEntry(entryDetails) {
//     let newEntry = {
//       title: this.title,
//       date: this.date,
//       message: this.message,
//     };

//     return newEntry;
//   }

// I need a method that initially when diary is locked lock(), addEntry(entryDetails) and getEntries() returns an error

// I need a method when diary is unlocked unlock(), addEntry(entryDeatils) and getEntries() can be called

// I need a method that allows the user to add an entry (addEntry(entryDetails)) - this would be an object that takes a title, date and the message.

//I need a method that allows the user to get all entries (getEntries)

//encapsulate addEntry and getEntry into unlocked

module.exports = SecretDiary;
