import styled from 'styled-components';

import Table from '../../components/Table';

const Wrapper = styled(Table)`
  font-size: .975rem;
  letter-spacing: 0;
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;

  .rt-th {
    font-size: 12px;
    font-weight: 600;
    padding: 7px 10px;
    text-align: center;

    &.club {
      position: relative;
      text-align: left;
      width: 25%;
    }

    &.form {
      width: 190px;
    }
  }

  .rt-td {
    display: table-cell;
    padding: 7px 10px;
    text-align: center;

    &.position {
      z-index: 1;
    }

    &.club {
      font-weight: 500;
      position: relative;
      text-align: left;
      width: 25%!important;

      a {
        color: #000000;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }

        .c-badge {
          margin-right: 15px;
        }
      }
    }

    &.form {
      font-size: 13px;
      padding-right: 0;
      width: 190px!important;

      abbr {
        font-weight: 700;
      }
    }
  }

  .rt-tbody {
    .rt-tr {
      border-bottom: thin solid #e8e8e8;

      &:nth-child(-n+4) {
        background-color: #eee;
      }

      &:first-child {
        background-color: #e4e4e4;
      }

      &:nth-child(5) {
        background-color: #f8f8f8;
      }

      &:nth-last-child(-n+3) {
        background-color: #eee;
      }
    }
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

  .c-tooltip {
    position: absolute;
    bottom: 2.4rem;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 90;
    padding: 0 0 1rem;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    overflow: visible;
    color: #242424;
    opacity: 0;
    transition: .2s;
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
