export default function rootReducer(
  currentState = {
    counter: 1,
    defaultState: 'asssssß',
    flag_usersState: false,
    usersState: {},
    employeeProfile: []
  },
  action
) {
  switch (action.type) {
    case 'CLEAR_ROOT_REDUCER':
      return {
        ...currentState
      };

    case 'CREATE_EMPLOYEE':
      return {
        ...currentState,
        employeesProfile: [...currentState.employeesProfile, action.employeesProfile]
      };

    case 'DELETE_EMPLOYEE':
      let currentEmployees = [...currentState.employeesProfile];
      let updatedEmployees = currentEmployees.filter(obj => {
        return obj.id !== Number(action.employeesProfile);
      });

      return {
        ...currentState,
        employeesProfile: updatedEmployees
      };

    case 'FLAG_GET_USER':
      return {
        ...currentState,
        flag_usersState: action.flag_usersState
      };

    case 'GET_USER':
      return {
        ...currentState,
        usersState: action.usersState
      };

    case 'INCREASE_COUNTER':
      return {
        ...currentState,
        counter: action.counter
      };

    case 'GET_EMPLOYEES':
      return {
        ...currentState,
        employeeProfile: action.employeeProfile
      };

    default:
      return currentState;
  }
}
