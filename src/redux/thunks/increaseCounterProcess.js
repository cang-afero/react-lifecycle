export default function increaseCounterProcess() {
  return (dispatch, getState) => {
    let currentCounter = getState().counter;

    dispatch({ type: 'INCREASE_COUNTER', counter: currentCounter + 1 });
  };
}
