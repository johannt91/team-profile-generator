const Manager = require("../lib/Manager");

test("Get office number from constructor", () => {
    const manager = new Manager("John", 1111, "john@email.com", 24);
    
    expect(manager.name).toBe("John");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe("john@email.com");
    expect(manager.officeNumber).toBe(24);
});


test("Return manager from get role", () => {
    const role = "Manager";
    const manager = new Manager("John", 1111, "john@email.com", 24);

    expect(manager.getRole()).toBe(role);
});

test("Get office number", () => {
    const officeNumber = 55;
    const manager = new Manager("John", 1111, "john@email.com", officeNumber);

    expect(manager.getOfficeNumber()).toBe(55);
});