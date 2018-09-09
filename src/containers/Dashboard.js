import { connect } from 'react-redux';
import { DashboardGrid } from '../components/dashboard';

/* Props */
const mapStateToProps = ({ users, books }) => ({
  users,
  books,
});

/* Dispatchers */
const mapDispatchToProps = dispatch => ({
  fetchUsers: dispatch(() => {}),
  fetchBooks: dispatch(() => {}),
});

/* Redux Connector */
const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardGrid);

export default Dashboard;
