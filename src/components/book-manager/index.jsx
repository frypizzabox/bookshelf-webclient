import React from 'react';
import PropTypes from 'prop-types';
import { PanelGroup, Panel } from 'react-bootstrap';
import { userProps, bookProps } from '../../constants/_PropTypes';
import './style.css';

class BookManager extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: '1',
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }


  render() {
    const { books } = this.props;
    const { activeKey } = this.state;

    return (
      <PanelGroup
        accordion
        id="shelf"
        activeKey={activeKey}
        onSelect={this.handleSelect}
      >
        {
        books.length > 0
          ? books.map((row, index) => (
            <Panel eventKey={index} key={`book-${index.toString()}`} onToggle={() => {}}>
              <Panel.Toggle>
                <Panel.Heading>
                  <Panel.Title>
                    <span className="book-title">{row.title}</span>
                    <span className="book-status">
                      {row.loanedToUser ? `Loaned to: ${row.loanedToUser.displayName}` : 'On the Shelf'}
                    </span>
                  </Panel.Title>
                </Panel.Heading>
              </Panel.Toggle>
              <Panel.Body collapsible>
               
              </Panel.Body>
            </Panel>
          )) : <Panel />
      }
      </PanelGroup>
    );
  }
}

BookManager.propTypes = {
  users: PropTypes.arrayOf(userProps),
  books: PropTypes.arrayOf(bookProps),
};

BookManager.defaultProps = {
  users: [],
  books: [],
};

export default BookManager;

/* <Table responsive hover>
  <thead>
    <tr>
      <th>ISBN</th>
      <th>Title</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {
      books.length > 0
        ? books.map((row, index) => (
          <tr
            onClick={() => this.handleRowClick(row.id)}
            key={`assignment-${index.toString()}`}
          >
            <td>{row.isbn}</td>
            <td>{row.title}</td>
            <td>{row.loanedToUser ? `Loaned to: ${row.loanedToUser.displayName}` : 'On the Shelf'}</td>
          </tr>
        )) : (
          <tr>
            <td colSpan="4">Empty</td>
          </tr>
        )}
  </tbody>
</Table> */
