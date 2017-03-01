import React, {PropTypes} from 'react';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      // todo
      <TextInput />
    </form>
  );
}

CourseForm.propTypes = {
  // myProp: PropTypes.string.isRequired
  // myProp: PropTypes.object.isRequired
  // myProp: PropTypes.array.isRequired
};

export default CourseForm;
