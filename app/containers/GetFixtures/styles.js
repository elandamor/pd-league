import styled from 'styled-components';

const Wrapper = styled.section`
  font-size: calc(1vw + 1vh + .5vmin);
  font-size: .975rem;
  letter-spacing: 0;
  margin: 0 auto;
  max-width: 1240px;
  width: 100%;

  [data-competition-matches-list] {
    .date {
      display: block;
      font-size: 16px;
      line-height: 30px;
      padding-bottom: 10px;
    }

    .matchList {
      border-bottom: 1px solid #e8e8e8;
      margin-top: 0;
      margin-bottom: 20px;
      padding: 0;
    }

    li {
      border-top: thin solid #e8e8e8;
      display: block;
      padding: 5px 40px 5px 0;
      min-height: 4px;
    }

    span {
      display: inline-block;
      vertical-align: middle;
    }

    .teams {
      position: relative;
      width: 42%;

      time {
        background: #76766f;
        display: inline-block;
        color: #fff;
        font-size: 12px;
        line-height: 30px;
        width: 60px;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -30px;
        margin-top: -15px;
      }
    }

    .team {
      padding-left: 75px;
      position: relative;
      width: 50%;

      &:first-of-type {
        text-align: right;
        padding-left: 0;
        padding-right: 75px;

        .badge {
          left: auto;
          right: 40px;
        }
      }

      .name {
        font-size: 16px;
        font-weight: 600;
        line-height: 30px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
      }

      .badge {
        background-color: #ededed;
        border-radius: 100%;
        height: 25px;
        width: 25px;

        position: absolute;
        top: 50%;
        margin-top: -12.5px;

        left: 40px;
      }
    }

    .stadium {
      padding-left: 10px;
      font-size: 12px;
      min-width: 160px;
      width: 25%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export default Wrapper;

export {

};
