import styled from 'styled-components';
import ReactTable from 'react-table';

const Wrapper = styled(ReactTable)`
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;

  .rt-tr {
    display: flex;
  }

  .rt-thead {
    height: 32px;
  }

  .rt-tbody {

  }

  .a-movement {
    background-color: #adadad;
    border-radius: 100%;
    display: inline-block;
    margin: 0 4px;
    height: 8px;
    width: 8px;
  }

  .a-movement.-up {
    background-color: transparent;
    border-bottom: 6px solid #13cf00;
    border-left: 6px solid transparent;
    border-radius: 0;
    border-right: 6px solid transparent;
    margin: -3px -2px 0 0;
  }

  .a-movement.-down {
    background-color: transparent;
    border-left: 6px solid transparent;
    border-radius: 0;
    border-right: 6px solid transparent;
    border-top: 6px solid #e90052;
    margin-top: -3px;
    margin-right: -2px;
  }

  .c-badge {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #adadad;
    color: #fff;
    margin-right: 5px;
    border-radius: 100%;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    font-weight: 400;
  }

  .c-tooltip__wrapper {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #76766f;
    color: #fff;
    margin-right: 5px;
    border-radius: 100%;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    font-weight: 400;

    &.won {
      background-color: #13cf00;
    }

    &.lose {
      background-color: #d81920;
    }

    abbr[title] {
      border: none;
    }
  }

  .nextMatch {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #adadad;
    color: #fff;
    margin-right: 5px;
    border-radius: 100%;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    font-weight: 400;
  }
`;

export default Wrapper;

export {

};
