import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Styled-Components
import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Table extends Component {
  render() {
    const { columns, data, ...rest } = this.props;

    if (!data) {
      return null;
    }

    const head = columns.map((column, idx) => {
      const colHeader = typeof (column.Header) === 'function'
        ? column.Header()
        : column.Header;

      const classes = column.headerClassName
        ? ` ${column.headerClassName}`
        : '';
      return (
        // eslint-disable-next-line react/no-array-index-key
        <th className={`rt-th${classes}`} key={`h-${idx}`}>{colHeader}</th>
      );
    });

    const body = columns.map((col, i) => {
      let accessor;

      const stat = data[i];

      return stat && (
        // eslint-disable-next-line react/no-array-index-key
        <tr className="rt-tr" key={`r-${i}`}>
          {
            columns.map((column) => {
              const classes = column.className ? ` ${column.className}` : '';

              if (typeof (column.accessor) === 'function') {
                accessor = column.accessor(stat);
              } else {
                accessor = stat[column.accessor];
              }

              return accessor && (
                <td className={`rt-td${classes}`} key={column.accessor}>{accessor}</td>
              );
            })
          }
        </tr>
      );
    });

    return (
      <Wrapper {...rest}>
        <thead className="rt-thead">
          <tr>{head}</tr>
        </thead>
        <tbody className="rt-tbody">{body}</tbody>
      </Wrapper>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};

export default Table;
