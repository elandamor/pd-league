import styled from 'styled-components';
import ReactTable from 'react-table';

const Wrapper = styled.div`

`;

const Masthead = styled.div`
  background-color: #38003c;
  height: 140px;
  width: 100%;

  .c-inner {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1240px;
    padding: 2rem 0;
    position: relative;
  }

  .c-title {
    color: #fff;
    font-size: 2.85rem;
    margin: 0;
  }

  .c-bttn-share {
    background-color: #fff;
    border-radius: 4px;
    color: #76766f;
    cursor: pointer;
    font-size: 0.85rem;
    height: 40px;
    letter-spacing: 0.025rem;
    padding: 0.7rem 0.85rem;

    .icon, svg {
      height: 16px;
      width: 16px;
    }
  }
`;

const Filters = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  margin: 0 auto;
  max-width: 1240px;
  padding: 2rem 0;
  position: relative;

  .c-bttn-reset {
    background-color: #76766f;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 0.85rem;
    height: 40px;
    letter-spacing: 0.025rem;
    margin-bottom: 8px;
    padding: 0.7rem 0.85rem;

    .icon, svg {
      height: 16px;
      margin-left: 6px;
      width: 16px;
    }
  }
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem 1rem 0;
  position: relative;
  width: 14.3rem;

  .label {
    font-size: .8rem;
    color: #76766f;
    z-index: 2;
    top: .5rem;
    left: .5rem;
    position: absolute;
  }

  [role="button"] {
    cursor: pointer;
    padding: 1.4rem 2.5rem .2em .5rem;
    line-height: 2rem;
    position: relative;
    transition: all .2s;
    z-index: 5;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    border-bottom: 1px solid #e8e8e8;
    color: #e90052;
    min-height: 40px;
  }

  .c-dropdown__list {
    visibility:hidden;
    transform:scale(0);
    transform-origin: top center;
    position: absolute;
    top: 3rem;
    left: 0;
    z-index: 70;
    background: #fff;
    min-width: 100%;
    transition: .1s;
    box-shadow: 0 2px 6px rgba(0,0,0,.2);
    border-radius: 0 0 2px 2px;
    max-height: 28.5rem;
    overflow-y: auto;
    padding: 0;
  }

  [role="option"] {
    color: #333;
    padding: .8rem 1rem;
    cursor: pointer;
    transition: all .2s;

    &:hover {
      background-color: #dbdbdb;
    }
  }
`;

const Table = styled(ReactTable)`
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
  Dropdown,
  Masthead,
  Filters,
  Table,
};
