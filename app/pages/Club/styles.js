import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #ffffff;
`;

const Masthead = styled.div`
  background-color: ${(props) => props.theme.palette.brandPrimary};
  width: 100%;

  position: relative;
  margin-top: -20px;
  padding: 40px 0 0;
  background: #e8e8e8;
  overflow: hidden;
  color: #333;

  .c-inner {
    height: 100%;
    margin: 0 auto;
    max-width: 1240px;
    padding: 20px 0 0;
    position: relative;
    z-index: 2;
  }

  .c-info-container {
    align-items: center;
    display: flex;
  }

  nav {
    height: 40px;
    margin-top: 40px;
    width: 100%;

    ul {
      margin: 0;
      padding: 0;

      li {
        display: inline-block;
        list-style-type: none;
        margin-right: 5px;

        a {
          text-align: center;
          padding: 0 30px;
          text-decoration: none;
          background: #adadad;
          color: #333;
          display: block;
          transition: all .2s;
          position: relative;
          font-size: 12px;
          cursor: pointer;
          line-height: 40px;
          border-radius: 2px 2px 0 0;

          &.-active {
            background-color: #ffffff;
          }
        }
      }
    }
  }

  .c-badge {
    border-radius: 100%;
    display: inline-block;
    height: 200px;
    margin-right: 20px;
    vertical-align: middle;
    width: 200px;

    img {
      height: auto;
      width: 100%;
      visibility: hidden;
    }
  }

  .c-title {
    color: #333;
    font-size: 2.85rem;
    margin: 0;
    visibility: hidden;
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

  .c-club-hero {
    background-color: #adadad;
    left: 750px;
    position: absolute;
    top: 0;
    right: auto;
    bottom: 0;
    height: 100%;
    width: 800px;
    z-index: 0;
    background-size: cover;
    background-position: 50%;
    visibility: hidden;

    ${'' /* &::before {
      background-color: #e8e8e8;
      content: '';
      display: block;
      height: 100%;
      left: -40px;
      position: absolute;
      top: 0;
      transform: skew(-15deg);
      width: 90px;
      z-index: 1;
    }

    &::after {
      background-color: #e8e8e8;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      right: 15px;
      top: 0;
      transform: skew(-15deg);
      width: 150px;
      z-index: 1;
    } */}
  }

  @media (min-width: 1400px) {
    .c-club-hero {
      left: auto;
      right: -150px;

      &::after {
        width: 120px;
      }
    }
  }
`;

const Squad = styled.ul`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: 1240px;
  padding: 15px 0;
  width: 100%;
`;

const Player = styled.li`
  background-color: #ededed;
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
    display: flex;
    min-height: 112px;
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
