import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LifycyclePage from '../../components/main/LifycyclePage';

import getUsersProcess from '../thunks/getUsersProcess';
import increaseCounterProcess from '../thunks/increaseCounterProcess';

function mapStateToProps(state, ownProps) {
  return {
    defaultState: state.defaultState,
    flag_usersState: state.flag_usersState,
    usersState: state.usersState,
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    get_users: () => {
      dispatch(getUsersProcess());
    },
    increase_counter: () => {
      dispatch(increaseCounterProcess());
    }
  };
}

const withlifecycle = lifecycle({
  /*LifeCycle: Birth/Mounting*/
  componentWillMount() {
    console.log('componentWillMount was called');
  },
  componentDidMount() {
    console.log('componentDidMount was called');
    this.props.get_users();
  },

  /*LifeCycle: Growth/Update*/
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps this.props', this.props);
    console.log('componentWillReceiveProps nextProps~~~~~~~~~~~~~~', nextProps);
  },

  componentDidUpdate(prevProps, prevState) {
    let { flag_usersState } = this.props;
    if (flag_usersState) {
      //console.log('I was true~~~~~~~~~~~', flag_usersState);
    }
  },

  /*LifeCycle: Death/Unmount*/
  componentWillUnmount() {}
});

const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  connectToStore,
  withlifecycle
)(withRouter(LifycyclePage));
