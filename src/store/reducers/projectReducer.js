const initState = {
  projects: [
    { id: "1", title: "Project Title 1", content: "Content of Project 1" },
    { id: "2", title: "Project Title 2", content: "Content of Project 2" },
    { id: "3", title: "Project Title 3", content: "Content of Project 3" },
  ],
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};
export default projectReducer;
