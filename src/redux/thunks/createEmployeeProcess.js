export default function createEmployeeProcess(userProfileObj) {
  return (dispatch, getState) => {
    dispatch({ type: 'CREATE_EMPLOYEE', employeesProfile: userProfileObj });
  };
}
