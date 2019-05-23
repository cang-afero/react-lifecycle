import React from 'react';
import CrudComponent from './CrudComponent';

export default function CrudPage({ create_employee, delete_employee, history }) {
  return (
    <div>
      <CrudComponent history={history} delete_employee={delete_employee} create_employee={create_employee} />
    </div>
  );
}
