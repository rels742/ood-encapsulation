const SecretDiary = require("../src/secretDiary.js");

describe("Secret Diary", () => {
  let diary;
  beforeEach(() => {
    diary = new SecretDiary();
  });

  it("adds a diary entry", () => {
    const expected = [
      {
        title: "Today was great",
        date: "15/06/22",
        message: "I had a really productive day",
      },
    ];
    diary.unlock();
    diary.addEntry(expected[0]);
    const result = diary.getEntries();
    expect(result).toEqual(expected);
  });

  it("does not allow you to add or get diary enteries when locked", () => {
    diary.lock();
    const result = diary.addEntry("hello");
    const expected = "Sorry cannot be done";
    expect(result).toEqual(expected);
  });
});
