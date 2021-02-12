const Employee = require("../lib/Employee");

test("Get employee info from constructor", () => {
    const employee = new Employee("John", 1111, "john@email.com");

    expect(employee.name).toBe("John");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("john@email.com");
});

test("Get name using getName()", () => {
    const employeeName = "John";
    const employee = new Employee(employeeName, 15, "john@email.com");
    expect(employee.getName()).toBe("John");
    
});

test("Get id using getId()", () => {
    const id = 77;
    const employee = new Employee("John", id, "john@email.com");
    expect(employee.getId()).toBe(id);
});

test("Get email using getEmail()", () => {
    const email = "john@email.com";
    const employee = new Employee("John", 81, email);
    expect(employee.getEmail()).toBe("john@email.com");
});

test("Return role from getRole()", () => {
    const role = "Employee";
    const employee = new Employee(role);
    expect(employee.getRole()).toBe("Employee");
});