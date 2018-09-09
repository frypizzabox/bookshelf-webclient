import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, FormGroup, ControlLabel, FormControl, Button,
} from 'react-bootstrap';
import { userProps } from '../../../constants/_PropTypes';

class LoanForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      selectedUserId: undefined,
    };
  }

  handleSelect(userId) {
    this.setState({ selectedUserId: userId });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { users, bookId, loanBook } = this.props;
    const { selectedUserId } = this.state;
    let userId = selectedUserId;

    if (!selectedUserId && users.length > 0) {
      userId = users[0].id;
    }

    loanBook(userId, bookId);
  }

  render() {
    const { users } = this.props;
    return (
      <Form>
        <FormGroup controlId="formControlSelect">
          <ControlLabel>Loan To:</ControlLabel>
          <FormControl
            componentClass="select"
            placeholder="select"
            onChange={e => this.handleSelect(e.target.value)}
          >
            {
              users.length > 0
                ? users.map((row, index) => (
                  <option
                    key={`users-${index.toString()}`}
                    value={row.id}
                  >
                    {row.displayName}
                  </option>
                )) : <option />
            }
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlButton">
          <Button
            bsStyle="primary"
            onClick={this.handleSubmit}
          >
            Confirm
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

LoanForm.propTypes = {
  users: PropTypes.arrayOf(userProps),
  bookId: PropTypes.string,
  loanBook: PropTypes.func,
};

LoanForm.defaultProps = {
  users: [],
  bookId: undefined,
  loanBook: () => {},
};

export default LoanForm;
