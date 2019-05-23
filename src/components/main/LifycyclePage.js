import React from 'react';
import LifecycleComponent from './LifecycleComponent';

export default function LifycyclePage({
  history,
  counter,
  defaultState,
  usersState,
  get_users,
  increase_counter
}) {
  return (
    <div>
      <LifecycleComponent
        history={history}
        counter={counter}
        defaultState={defaultState}
        usersState={usersState}
        get_users={get_users}
        increase_counter={increase_counter}
      />
    </div>
  );
}
