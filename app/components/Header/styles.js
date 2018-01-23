import styled from 'styled-components';

const Wrapper = styled.header`
  align-items: center;
  background-color: ${(props) => props.theme.palette.brandPrimary};
  display: flex;
  height: 64px;
  padding-left: 64px;
  width: 100%;

  @media (min-width: 648px) {
    height: 88px;
    padding-left: 88px;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.isDark ? '#fff' : '#000'};
  flex: 1;
  font-size: 24px;
  font-weight: 900;
  left: 0;
  letter-spacing: 0.01rem;
  margin: -1px 0 0;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 600px) {
    font-size: calc(24px * (16/14));
  }
`;

export default Wrapper;

export {
  Title,
};
