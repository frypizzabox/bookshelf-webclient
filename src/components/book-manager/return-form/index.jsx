import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Button } from 'react-bootstrap';
import { userProps } from '../../../constants/_PropTypes';

class ReturnForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { user, bookId, returnBook } = this.props;

    returnBook(user.id, bookId);
  }

  render() {
    const { user } = this.props;
    return (
      <Form>
        <h5>Loaned To</h5>
        <p>{user.displayName}</p>
        <FormGroup controlId="formControlButton">
          <Button
            bsStyle="primary"
            onClick={this.handleSubmit}
          >
            Return
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

ReturnForm.propTypes = {
  user: userProps,
  bookId: PropTypes.string,
  returnBook: PropTypes.func,
};

ReturnForm.defaultProps = {
  user: undefined,
  bookId: undefined,
  returnBook: () => {},
};

export default ReturnForm;
