import styled from 'styled-components';

const Wrapper = styled.div`

`;

const Masthead = styled.div`
  background-color: ${(props) => props.theme.palette.brandPrimary};
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
    min-width: 80px;
  }
`;

const Squad = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: 1240px;
  padding: 0;
  width: 100%;
`;

const Player = styled.li`
  background-color: #ffffff;
  border: thin solid #ededed;
  letter-spacing: 0;
  position: relative;

  a {
    display: block;
    text-align: center;
    position: relative;
    text-decoration: none;
  }

  .c-header {
    align-items: flex-start;
    background-color: #ededed;
    display: flex;
    min-height: 120px;
    padding: 10px 10px 0;
  }

  .c-image {
    display: inline-block;
    vertical-align: middle;
    width: 80px;
    height: auto;

    img {
      width: 100%;
    }
  }

  .c-info {
    position: absolute;
    right: 10px;
    text-align: right;
    display: inline-block;
    vertical-align: middle;

    .a-number {
      color: #242424;
      font-size: 16px;
      margin: 0;
    }

    .a-name {
      font-size: 16px;
      font-weight: 600;
      margin: 2px 0 0;
      padding-left: 90px;
      line-height: 1.5;
    }

    .a-position {
      font-size: 12px;
    }
  }

  .c-bttn {
    text-align: center;
    padding: 0 40px;
    text-decoration: none;
    background-color: rgba(0,0,0, .4);
    color: #333;
    display: block;
    transition: all .2s;
    position: relative;
    font-size: 12px;
    height: 40px;
    cursor: pointer;
    line-height: 40px;
    border-radius: 2px;
    margin: 10px;
    width: 100%;
  }
`;

export default Wrapper;

export {
  Masthead,
  Squad,
  Player,
};
