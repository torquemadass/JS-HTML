const todoList = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Get milk, eggs, bread, and fruits",
      completed: false,
      dueDate: "2024-08-10",
      priority: "High"
    },
    {
      id: 2,
      title: "Workout",
      description: "30-minute morning workout session",
      completed: true,
      dueDate: "2024-08-05",
      priority: "Medium"
    },
    {
      id: 3,
      title: "Read a book",
      description: "Finish reading 'Atomic Habits'",
      completed: false,
      dueDate: "2024-08-15",
      priority: "Low"
    },
    {
      id: 4,
      title: "Finish project",
      description: "Complete the project proposal for client",
      completed: false,
      dueDate: "2024-08-08",
      priority: "High"
    },
    {
      id: 5,
      title: "Clean the house",
      description: "Vacuum and mop the floors",
      completed: false,
      dueDate: "2024-08-07",
      priority: "Medium"
    }
  ];

  // Quiz No. 1: Find all tasks that is not completed yet

  console.log("Quiz No. 1");

  // V1
const unfinishedTask = () => {
  let result = [];
    for (const todo of todoList) {
        if (!todo.completed) {
          result.push(todo.title);
        }
    }
    return result;
}

const uncompletedTask = unfinishedTask();
console.log(uncompletedTask, "V1");


// V2
const notReadyTasks = () => {
  const unreadyTasks = todoList.filter ((todo) => {
    return !todo.completed;
  })

  const unreadyTaskNames = unreadyTasks.map((todo) => {
    return todo.title
  })

  return unreadyTaskNames;
}

const unreadyTasks = unfinishedTask();
console.log(unreadyTasks, "V2");

// V3 (Filter & Map Advanced)



  console.log("__________________");
  

  // Quiz 2 Find Task by ID

console.log("Quiz No. 2");


  function findTaskById(id) {
    let result;

    for (const todo of todoList) {
      if (todo.id === id) {
        result = todo;
      }
    }

    return result;
  }
  console.log(findTaskById(4));

  console.log("__________________");

/*
  // Quiz 3: find by params
*/
console.log("Quiz No. 3");


  function findTaskByParams(id, title, description) {
    let result;

    for (const todo of todoList) {
      if (description) {
        if (todo.description === description) {
          result = todo;
        }
      } else if (title) {
        if (todo.title === title) {
          result = todo;
        }
      } else if (id) {
        if (todo.id === id) {
          result = todo;
      }
    }
  }

    return result;
}
  
  const taskFound = findTaskByParams(1, "Workout", "Complete the project proposal for client");
  console.log(taskFound);