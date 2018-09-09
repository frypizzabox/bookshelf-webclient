import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../navbar';
import './style.css';

const DashboardGrid = ({
  users, books, fetchUsers, fetchBooks,
}) => {
  fetchUsers();
  fetchBooks();
  console.log(users, books);
  return (
    <React.Fragment>
      <NavBar />
      <div />
    </React.Fragment>
  );
};


DashboardGrid.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
  })),
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    isbn: PropTypes.string,
  })),
  fetchUsers: PropTypes.func,
  fetchBooks: PropTypes.func,
};

DashboardGrid.defaultProps = {
  users: [],
  books: [],
  fetchUsers: () => {},
  fetchBooks: () => {},
};

export default DashboardGrid;
