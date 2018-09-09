import React from 'react';
import PropTypes from 'prop-types';
import {
  PanelGroup, Panel, ListGroup, ListGroupItem, Col,
} from 'react-bootstrap';
import { userProps, bookProps } from '../../constants/_PropTypes';
import LoanForm from './loan-form';
import ReturnForm from './return-form';
import './style.css';

class BookManager extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey: '',
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    const {
      books,
      users,
      loanBook,
      returnBook,
    } = this.props;
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
                    <span className="book-title">{`#${index} ${row.title}`}</span>
                    <span className="book-status">
                      {row.loanedToUser ? `Loaned to: ${row.loanedToUser.displayName}` : 'On the Shelf'}
                    </span>
                  </Panel.Title>
                </Panel.Heading>
              </Panel.Toggle>
              <Panel.Body collapsible>
                <Col md={6}>
                  <ListGroup>
                    <ListGroupItem>
                      <h5>Author</h5>
                      <p>{row.author}</p>
                    </ListGroupItem>
                    <ListGroupItem>
                      <h5>ISBN</h5>
                      <p>{row.isbn}</p>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
                <Col md={6}>
                  <ListGroup>
                    <ListGroupItem>
                      {
                        row.loanedToUser
                          ? (
                            <ReturnForm
                              user={row.loanedToUser}
                              bookId={row.id}
                              returnBook={returnBook}
                            />
                          )
                          : (
                            <LoanForm
                              users={users}
                              bookId={row.id}
                              loanBook={loanBook}
                            />
                          )
                      }
                    </ListGroupItem>
                  </ListGroup>
                </Col>
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
  loanBook: PropTypes.func,
  returnBook: PropTypes.func,
};

BookManager.defaultProps = {
  users: [],
  books: [],
  loanBook: () => {},
  returnBook: () => {},
};

export default BookManager;
