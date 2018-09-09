import { connect } from 'react-redux';
import { DashboardGrid } from '../components/dashboard';
import { fetchUsers } from '../actions/usersActions';
import { fetchBooks } from '../actions/booksActions';

/* Props */
const mapStateToProps = ({ users, books }) => {
  const bookList = [];

  if (books.formattedEntries) {
    Object.keys(books.formattedEntries).forEach((key) => {
      bookList.push({
        title: books.formattedEntries[key].title,
        author: books.formattedEntries[key].author,
        isbn: books.formattedEntries[key].isbn,
        loanedToUser: books.formattedEntries[key].loanedToUser
          ? users.formattedEntries[books.formattedEntries[key].loanedToUser] : undefined,
      });
    });
  }

  return {
    users: Object.values(users.formattedEntries),
    books: bookList,
  };
};

/* Dispatchers */
const mapDispatchToProps = dispatch => ({
  fetchUsers: dispatch(fetchUsers()),
  fetchBooks: dispatch(fetchBooks()),
});

/* Redux Connector */
const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardGrid);

export default Dashboard;
