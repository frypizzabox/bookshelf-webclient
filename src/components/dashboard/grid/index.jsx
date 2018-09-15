import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from '../navbar';
import BookManager from '../../book-manager';
import { userProps, bookProps } from '../../../constants/_PropTypes';
import Facebook from '../../facebook';

class DashboardGrid extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.fetchUsers = props.fetchUsers.bind(this);
    this.fetchBooks = props.fetchBooks.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchBooks();
  }

  render() {
    const {
      users, books, loanBook, returnBook,
    } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <Grid>
          <Row>
            <Col md={12}>
              <Facebook>
                <BookManager
                  books={books}
                  users={users}
                  loanBook={loanBook}
                  returnBook={returnBook}
                />
              </Facebook>
            </Col>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

DashboardGrid.propTypes = {
  users: PropTypes.arrayOf(userProps),
  books: PropTypes.arrayOf(bookProps),
  fetchUsers: PropTypes.func,
  fetchBooks: PropTypes.func,
  loanBook: PropTypes.func,
  returnBook: PropTypes.func,
};

DashboardGrid.defaultProps = {
  users: [],
  books: [],
  fetchUsers: () => {},
  fetchBooks: () => {},
  loanBook: () => {},
  returnBook: () => {},
};

export default DashboardGrid;
