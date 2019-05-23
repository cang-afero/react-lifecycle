import getUsers from '../../api/getUsers';

export default function getUsersProcess() {
  return (dispatch, getState) => {
    return getUsers()
      .then(usersState => {
        console.log('getUsersProcess thunk');
        dispatch({ type: 'GET_USER', usersState: usersState.data });
        //dispatch({ type: 'FLAG_GET_USER', flag_usersState: true });
      })
      .catch(error => {
        console.log('getUsersProcess error ----->', error);
      });
  };
}
