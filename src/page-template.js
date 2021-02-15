// Function to render all employee's information

const generatePage = (employees) => {
    console.log("employees:", employees);

    //=======MANAGER========//
    const createManager = (manager) => {
        return `
        <div class="card text-white bg-primary mb-3">
        <div class="card-header">
          <h2>${manager.name}</h2>
          <h3><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h3>
        </div>
        <div class="card-body">
        <p class="card-text"><span>ID</span>: ${manager.id}</p>
        <p class="card-text"><span>Email</span>: <a href="mailto: ${manager.getEmail()}"> ${manager.getEmail()}</a></p>
        <p class="card-text"><span>Office Number</span>: ${manager.officeNumber}</p>
        </div>
      </div>
          `;
    };

    //=======ENGINEER========//
    const createEngineer = (engineer) => {
        return `
        <div class="card text-white bg-primary mb-3">
        <div class="card-header">
          <h2>${engineer.name}</h2>
          <h3><i class="fas fa-glasses"></i> ${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
        <p class="card-text"><span>ID</span>: ${engineer.id}</p>
        <p class="card-text text-white"><span>Email</span>: <a href="mailto: ${engineer.getEmail()}"> ${engineer.getEmail()}</a></p>
        <p class="card-text text-white"><span>GitHub</span>: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
        </div>
      </div>
        `;
    };

    //=======INTERN========//
    const createIntern = (intern) => {
        return `
        <div class="card text-white bg-primary mb-3">
        <div class="card-header">
          <h2>${intern.name}</h2>
          <h3><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h3>
        </div>
        <div class="card-body">
        <p class="card-text"><span>ID</span>: ${intern.id}</p>
        <p class="card-text text-white"><span>Email</span>: <a href="mailto: ${intern.getEmail()}"> ${intern.getEmail()}</a></p>
        <p class="card-text text-white"><span>School</span>: ${intern.school}</p>
        </div>
      </div>
    `;
    };

    const team = [];
    team.push(
        employees
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => createManager(manager))
        .join("")
    );
    team.push(
        employees
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => createEngineer(engineer))
        .join("")
    );
    team.push(
        employees
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => createIntern(intern))
        .join("")
    );

    return team.join("");
};

module.exports = (employeeHtml) => {
    return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
        <title>Team Profiles</title>
    </head>
    <body>
        <div class="jumbotron bg-danger" >
            <h1 class="text-center text-white" >Team Profiles</h1>
        </div>
        <main class='container'>
            ${generatePage(employeeHtml)}
        </main>
     </body>
  </html>
  `;
};