import getEmployees from '../../api/getEmployees';

export default function getEmployeesProcess() {
  return (dispatch, getState) => {
    return getEmployees()
      .then(obj => {
        console.log(obj);
        dispatch({ type: 'GET_EMPLOYEES', employeeProfile: obj.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

// import getEmployees from '../../api/getEmployees';

// export default function getEmployeesProcess() {
//   return (dispatch, getState) => {
//     return getEmployees()
//       .then(obj => {
//         dispatch({ type: 'GET_EMPLOYEES', employeesProfile: obj.data });
//       })
//       .catch(error => {
//         console.log('getEmployeesProcess ', error);
//       });
//   };
// }
