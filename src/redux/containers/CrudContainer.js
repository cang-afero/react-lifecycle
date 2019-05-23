import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CrudPage from '../../components/main/CrudPage';

import getEmployeesProcess from '../thunks/getEmployeesProcess';

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    get_employee: () => {
      dispatch(getEmployeesProcess());
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
