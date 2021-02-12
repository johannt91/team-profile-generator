const Engineer = require("../lib/Engineer");

test("Get github from constructor", () => {
    const engineer = new Engineer("John", 1111, "john@email.com", "github");
    
    expect(engineer.name).toBe("John");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe("john@email.com");
    expect(engineer.github).toBe("github");
});

test("Return engineer", () => {
    const engineer = new Engineer("John", 1111, "john@email.com", "github");
    const role = "Engineer";

    expect(engineer.getRole()).toBe(role);
});

test("Get github", () => {
    const github = "gitprofile";
    const engineer = new Engineer("John", 1111, "john@email.com", github);

    expect(engineer.github).toBe("gitprofile");
});