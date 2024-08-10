const employeeDB = [
    {
      id: 1,
      name: "Alice Johnson",
      position: "Software Engineer",
      department: "Development",
      contactInfo: {
        email: "alice.johnson@example.com",
        phone: "123-456-7890"
      },
      skills: ["JavaScript", "React", "Node.js"]
    },
    {
      id: 2,
      name: "Bob Smith",
      position: "Marketing Manager",
      department: "Marketing",
      contactInfo: {
        email: "bob.smith@example.com",
        phone: "234-567-8901"
      },
      skills: ["SEO", "Content Marketing", "Social Media", "Email Marketing", "Google Analytics", "Brand Strategy"]
    },  
    {
      id: 3,
      name: "Carol Martinez",
      position: "Product Designer",
      department: "Design",
      contactInfo: {
        email: "carol.martinez@example.com",
        phone: "345-678-9012"
      },
      skills: ["UX Design", "Photoshop", "Illustrator"]
    },
    {
      id: 4,
      name: "David Brown",
      position: "Data Analyst",
      department: "Data Science",
      contactInfo: {
        email: "david.brown@example.com",
        phone: "456-789-0123"
      },
      skills: ["Python", "SQL", "Data Visualization"]
    },
    {
      id: 5,
      name: "Eva Green",
      position: "HR Specialist",
      department: "Human Resources",
      contactInfo: {
        email: "eva.green@example.com",
        phone: "567-890-1234"
      },
      skills: ["Recruitment", "Employee Relations", "HR Policies"]
    },
    {
      id: 6,
      name: "Frank White",
      position: "IT Support",
      department: "IT",
      contactInfo: {
        email: "frank.white@example.com",
        phone: "678-901-2345"
      },
      skills: ["Hardware Support", "Networking", "Technical Support"]
    },
    {
      id: 7,
      name: "Grace Lee",
      position: "Project Manager",
      department: "Management",
      contactInfo: {
        email: "grace.lee@example.com",
        phone: "789-012-3456"
      },
      skills: ["Project Planning", "Team Leadership", "Agile Methodologies"]
    },
    {
      id: 8,
      name: "Hannah Kim",
      position: "Quality Assurance",
      department: "Quality",
      contactInfo: {
        email: "hannah.kim@example.com",
        phone: "890-123-4567"
      },
      skills: ["Test Automation", "Manual Testing", "Bug Tracking"]
    },
    {
      id: 9,
      name: "Ian Black",
      position: "Financial Analyst",
      department: "Finance",
      contactInfo: {
        email: "ian.black@example.com",
        phone: "901-234-5678"
      },
      skills: ["Financial Analysis", "Excel", "Budgeting"]
    },
    {
      id: 10,
      name: "Jasmine Patel",
      position: "Content Writer",
      department: "Marketing",
      contactInfo: {
        email: "jasmine.patel@example.com",
        phone: "012-345-6789"
      },
      skills: ["Copywriting", "Creative Writing", "Editing", "Content Marketing"]
    }
  ];
  

//    Quiz 1: Extract the email addresses of all employees.
  
console.log("Quiz No.1");

// V1
const email = employeeDB.map((user) => {
    return user.contactInfo.email;
})
    
console.log(email, "V1");

// V2
const employeeEmails = [];

for (const employee of employeeDB) {
  employeeEmails.push(employee.contactInfo.email);
}

console.log(employeeEmails, "V2");


console.log("ㅤ");

/*    
    Expected Output:
    [
      "alice.johnson@example.com",
      "bob.smith@example.com",
      "carol.martinez@example.com",
      "david.brown@example.com",
      "eva.green@example.com",
      "frank.white@example.com",
      "grace.lee@example.com",
      "hannah.kim@example.com",
      "ian.black@example.com",
      "jasmine.patel@example.com"
    ]
  */

//    Quiz 2: List the names of all employees who have the skill "JavaScript".

console.log("Quiz No.2");

// V1
javascriptUser = []

const targetSkill = "JavaScript"

let skillFound;

for (const user of employeeDB) {
    if (user.skills.includes(targetSkill)) {
        javascriptUser.push(user.name);
        skillFound = true;
    }
}

console.log(javascriptUser);

// V2
javascriptEmployees = [];

for (const employee of employeeDB) {
  let hasSkill = false;

  for (const skill of employee.skills) {
    if (targetSkill === skill) {
      hasSkill = true;
    }  
  }

  if (hasSkill) {
    javascriptEmployees.push(employee.name);
  }
}

console.log(javascriptEmployees);

console.log("  ");

/*
    Expected Output:
    ["Alice Johnson"]
  */
  
//    Quiz 3: How many unique skills are present in the "Marketing" department?

console.log("Quiz No.3");

// const uniqueSkills = [];

// for (const user of employeeDB) {
//     if (user.department === "Marketing") {
//         uniqueSkills.push(user.skills)
//     }
// }

// console.log(uniqueSkills.join());

for (const employee of employeeDB) { // Looping Employee
  if (employee.department === 'Marketing') { // Filter Marketing Department Only
    for (const skill of employee.skills) { // Looping Employee's Skills
      if (!uniqueSkills.includes(skill)) { // Check if uniqueSkills has skill in it
        uniqueSkills.push(skill);
      }
    }
  }
}

console.log(uniqueSkills);
console.log(uniqueSkills.length);


console.log("ㅤ");

/*
    Expected Output:
    ("SEO", "Content Marketing", "Social Media", "Email Marketing", "Google Analytics", "Brand Strategy", "Copywriting", "Creative Writing", "Editing")
  */
  

//    Quiz 4: For each employee, combine their name and contactInfo into a new object with properties name and contact. The contact property should include both email and phone.

console.log("Quiz No.4");

// V1
const formattedEmployees = [];

for (const employee of employeeDB) {
  const newEmployee = {
    name: employee.name,
    contact: {
      email: employee.contactInfo.email,
      phone: employee.contactInfo.phone
    }
  }
  formattedEmployees.push(newEmployee);
}

console.log(formattedEmployees);

// V2 (map)
const newEmployees = employeeDB.map((employee) => {
  return {
    name: employee.name,
    contact: {
      email: employee.contactInfo.email,
      phone: employee.contactInfo.phone
    }
  }
})

console.log(newEmployees);

console.log("____________________");



/*   
    Expected Output:
    [
      {
        name: "Alice Johnson",
        contact: {
          email: "alice.johnson@example.com",
          phone: "123-456-7890"
        }
      },
      {
        name: "Bob Smith",
        contact: {
          email: "bob.smith@example.com",
          phone: "234-567-8901"
        }
      },
      {
        name: "Carol Martinez",
        contact: {
          email: "carol.martinez@example.com",
          phone: "345-678-9012"
        }
      },
      {
        name: "David Brown",
        contact: {
          email: "david.brown@example.com",
          phone: "456-789-0123"
        }
      },
      {
        name: "Eva Green",
        contact: {
          email: "eva.green@example.com",
          phone: "567-890-1234"
        }
      },
      {
        name: "Frank White",
        contact: {
          email: "frank.white@example.com",
          phone: "678-901-2345"
        }
      },
      {
        name: "Grace Lee",
        contact: {
          email: "grace.lee@example.com",
          phone: "789-012-3456"
        }
      },
      {
        name: "Hannah Kim",
        contact: {
          email: "hannah.kim@example.com",
          phone: "890-123-4567"
        }
      },
      {
        name: "Ian Black",
        contact: {
          email: "ian.black@example.com",
          phone: "901-234-5678"
        }
      },
      {
        name: "Jasmine Patel",
        contact: {
          email: "jasmine.patel@example.com",
          phone: "012-345-6789"
        }
      }
    ]
  */
  
  
  

// Quiz 5: Identify the employee with the most skills and provide their name and the number of skills they have.
  
/*
    Expected Output:
    {
      name: "Bob Smith",
      skillsCount: 6
    }
  */
  
  console.log("Quiz No. 5");

  let skillfulEmployee;
  let skillsCount = 0;
  
  for (const employee of employeeDB) {
    if (employee.skills.length > skillsCount) {
      skillsCount = employee.skills.length;
      skillfulEmployee = employee;
    }
  }
  
  const opEmployee = {
    name: skillfulEmployee.name,
    skillsCount: skillsCount
  }
  
  console.log(opEmployee);  

  console.log("____________________");
  

// Quiz 6 (Bonus): Write a function called "findEmployeeById" that takes an "id" as a parameter and returns the employee object with that ID from the "employeeDB" array. 
  
 /*   Expected Output:
    {
      id: 4,
      name: "David Brown",
      position: "Data Analyst",
      department: "Data Science",
      contactInfo: {
        email: "david.brown@example.com",
        phone: "456-789-0123"
      },
      skills: ["Python", "SQL", "Data Visualization"]
    }
  */

console.log(" Quiz No. 6");


    function findEmployeeById(id) {
      for (const employee of employeeDB) {
        if (employee.id === id) {
          return employee;
        }
      }
    }
    
    const selectedEmployee = findEmployeeById(4);
    console.log(selectedEmployee);
    
console.log("____________________");

  
   // Quiz 7 (Bonus): Write a function called "getEmployeesWithSkill" that takes a skill as a parameter and returns an array of employee names who possess that skill. Additionally, write another function called "getEmployeeContactsWithSkill" that takes a skill as a parameter and uses "getEmployeesWithSkill" to find employees with that skill. The "getEmployeeContactsWithSkill" function should return an array of objects containing the "name" and "contactInfo" (with "email" and "phone") of these employees.
  
/*     Expected Output:
    1. If the skill parameter is "Python", the output should be:
    [
      {
        name: "David Brown",
        contactInfo: {
          email: "david.brown@example.com",
          phone: "456-789-0123"
        }
      }
    ]
  
    2. If the skill parameter is "Content Marketing", the output should be:
    [
      {
        name: "Bob Smith",
        contactInfo: {
          email: "bob.smith@example.com",
          phone: "234-567-8901"
        }
      },
      {
        name: "Jasmine Patel",
        contactInfo: {
          email: "jasmine.patel@example.com",
          phone: "012-345-6789"
        }
      }
    ]
  */

    console.log(" Quiz No. 7");
    
    function getEmployeesWithSkill(skill) {
      const tempArray = [];
      for (const employee of employeeDB) {
        if (employee.skills.includes(skill)) {
          tempArray.push(employee.name);
        }
      }
      return tempArray;
    }
    
    function getEmployeeContactsWithSkill(skill) {
      const employeeNames = getEmployeesWithSkill(skill);
      const result = [];
    
      for (const name of employeeNames) {
        for (const employee of employeeDB) {
          if (name === employee.name) {
            result.push({
              name: employee.name,
              contactInfo: employee.contactInfo
            });
          }
        }
      }
    
      return result;
    }
    
    const targetEmployees = getEmployeeContactsWithSkill('Content Marketing');
    console.log(targetEmployees);

    console.log("___________________");
    