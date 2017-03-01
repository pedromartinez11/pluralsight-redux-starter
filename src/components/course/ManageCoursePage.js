import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Manage course</h1>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  // myProp: PropTypes.string.isRequired
  // myProp: PropTypes.object.isRequired
  // myProp: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // adds this.props.actions
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
