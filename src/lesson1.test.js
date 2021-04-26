const lesson1 = require('./lesson1');

test('adds 1 + 2 to equal 2 3', () => {
  expect(lesson1.sum(1, 2)).toBe("2 3");
});
test("Sum two string a b", () =>{
    expect (lesson1.sumString("av", "asd")).toBe(5);
    expect (lesson1.sumString(1, "asd")).toBe("not string")
});
test("Sum num user", () =>{
    window.prompt = jest.fn(() => {return "123"});
    expect (lesson1.sumU()).toBe(6);
    window.prompt = jest.fn(() => {return "abc"});
    expect (lesson1.sumU()).toBe('Ne chislo');
    window.prompt = jest.fn(() => {return "1234"});
    expect (lesson1.sumU()).toBe("Slishkom mnogo znakov");
});


const lesson2 = require('./lesson2');

test('a b diference ', () => {
    expect(lesson2.difference(1, 2)).toBe(2);
    expect(lesson2.difference(1, 1)).toBe("equal");
    expect(lesson2.difference(1, "a")).toBe("not number");
  });

  test("Sum num user", () =>{
    window.prompt = jest.fn(() => {return "1"});
    expect (lesson2.month()).toBe("January");
    window.prompt = jest.fn(() => {return "a"});
    expect (lesson2.month()).toBe("no number");
    window.prompt = jest.fn(() => {return "1234"});
    expect (lesson2.month()).toBe("number not correct");
});