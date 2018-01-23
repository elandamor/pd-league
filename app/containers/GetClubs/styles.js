import styled from 'styled-components';

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: 1240px;
  padding: 0 0 4rem;
  width: 100%;
`;

const Club = styled.li`
  background-color: #ffffff;
  border: thin solid #ededed;
  position: relative;

  a {
    display: block;
    text-align: center;
    position: relative;
    text-decoration: none;
  }

  .c-image {
    background-color: #ededed;
    height: 120px;
  }

  .c-badge {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -35px;
    padding: 10px;
    border-radius: 100%;
    background: #adadad;
  }

  .c-info {
    padding: 37px 10px 10px;

    .a-name {
      color: #000;
      font-size: 1rem;
      font-weight: 600;
      margin: 0;
    }

    .a-stadium {
      color: #555;
      font-size: 12px;
      line-height: 1.4;
      margin-top: 5px;
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
    margin-top: 14px;
    width: 100%;
  }
`;

export default Wrapper;

export {
  Club,
};
