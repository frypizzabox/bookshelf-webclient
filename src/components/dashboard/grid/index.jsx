import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from '../navbar';
import BookManager from '../../book-manager';
import { userProps, bookProps } from '../../../constants/_PropTypes';
import './style.css';

const DashboardGrid = ({
  users, books, fetchUsers, fetchBooks, loanBook, returnBook,
}) => {
  fetchUsers();
  fetchBooks();
  return (
    <React.Fragment>
      <NavBar />
      <Grid>
        <Row>
          <Col md={12}>
            <BookManager
              books={books}
              users={users}
              loanBook={loanBook}
              returnBook={returnBook}
            />
          </Col>
        </Row>
      </Grid>
    </React.Fragment>
  );
};


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
