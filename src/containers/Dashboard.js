import { connect } from 'react-redux';
import { DashboardGrid } from '../components/dashboard';
import { fetchUsers } from '../actions/usersActions';
import { fetchBooks } from '../actions/booksActions';

/* Props */
const mapStateToProps = ({ users, books }) => ({
  users: Object.values(users.formattedEntries),
  books: Object.values(books.formattedEntries),
});

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
