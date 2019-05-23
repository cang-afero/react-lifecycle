export default function deleteEmployeeProcess(employeeId) {
  return (dispatch, getState) => {
    dispatch({ type: 'DELETE_EMPLOYEE', employeesProfile: employeeId });
  };
}
