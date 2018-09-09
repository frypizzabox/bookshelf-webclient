import PropTypes from 'prop-types';

export const userProps = PropTypes.shape({
  displayName: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
});

export const bookProps = PropTypes.shape({
  title: PropTypes.string,
  author: PropTypes.string,
  isbn: PropTypes.string,
  loanedToUser: userProps,
});

export default {};
