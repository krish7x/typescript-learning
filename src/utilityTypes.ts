//Utility Types - Required & Partial with interface
interface Todo {
  title: string;
  description?: string; //--> optional field
  startTime: string;
  isCompleted: boolean;
}

const updateTodo = (
  requiredtodo: Required<Todo>, //all fields are required [even when it's a optional field]
  partialTodo: Partial<Todo>, //not all fields are required [atleast some fields]
  readOnlyTodo?: Readonly<Todo> //[optional parameter] and once we decleared we can't change its value it ignores the optional field
) => {
  //readonly
  readOnlyTodo = {
    title: "Learn Java",
    description: "learn via oracle java docs",
    startTime: "11.30am",
    isCompleted: false,
  };

  console.log(requiredtodo);
  console.log(partialTodo);
  console.log(readOnlyTodo);
};

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
  startTime: "10.20am",
  isCompleted: true,
}; //all fields are required in Required

const todo2 = {
  title: "learn typescript",
  description: "learn via typescript docs",
}; //some fields are enough for partial

updateTodo(todo1, todo2);

//type for record
type TodoPeroid = "today" | "yesterday" | "tomorrow";

//record
const recordTodo: Record<TodoPeroid, Todo> = {
  today: {
    title: "Organize Desk",
    description: "clear clutter",
    startTime: "10.20am",
    isCompleted: false,
  },
  yesterday: {
    title: "Learn Typescript",
    description: "learn via typescript docs",
    startTime: "11.00 am",
    isCompleted: false,
  },
  tomorrow: {
    title: "Learn Java",
    description: "learn via oracle java docs",
    startTime: "12.30am",
    isCompleted: false,
  },
};

console.log(recordTodo.tomorrow);

//type for pick
type TodoPreview4Pick = Pick<Todo, "title" | "isCompleted">;

//pick
const pickTodo: TodoPreview4Pick = {
  title: "Watch Clean Code Lesson 6",
  isCompleted: false,
};

console.log(pickTodo);

//type for omit
type TodoPreview4Omit = Omit<Todo, "description" | "startTime">;

//omit
const omitTodo: TodoPreview4Omit = {
  title: "Write SQL Queries",
  isCompleted: true,
};

console.log(omitTodo);
