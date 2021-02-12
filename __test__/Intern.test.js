const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Get school from constructor", () => {
    const schoolName = "UofT";
    const intern = new Intern("John", 1111, "john@email.com", schoolName);

    expect(intern.name).toBe("John");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe("john@email.com");
    expect(intern.school).toBe("UofT");
});


test("Return intern", () => {
    const role = "Intern";
    const intern = new Intern("John", 1111, "john@email.com", "github");

    expect(intern.getRole()).toBe(role);
});

test("Get intern school", () => {
    const schoolName = "UofT";
    const intern = new Intern("John", 1111, "john@email.com", schoolName);

    expect(intern.getSchool()).toBe("UofT");
})