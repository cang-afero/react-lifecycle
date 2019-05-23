import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CrudPage from '../../components/main/CrudPage';

import createEmployeeProcess from '../thunks/createEmployeeProcess';
import getEmployeesProcess from '../thunks/getEmployeesProcess';
import deleteEmployeeProcess from '../thunks/deleteEmployeeProcess';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    create_employee: userProfileObj => {
      dispatch(createEmployeeProcess(userProfileObj));
    },
    get_employee: () => {
      dispatch(getEmployeesProcess());
    },
    delete_employee: employeeId => {
      dispatch(deleteEmployeeProcess(employeeId));
    }
  };
}

const withlifecycle = lifecycle({
  componentDidMount() {
    this.props.get_employee();
  }
});

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  connectToStore,
  withlifecycle
)(withRouter(CrudPage));
