export default function rootReducer(
  currentState = {
    employeeProfile: []
  },
  action
) {
  switch (action.type) {
    case 'GET_EMPLOYEES':
      return {
        ...currentState,
        employeeProfile: action.employeeProfile
      };

    default:
      return currentState;
  }
}
