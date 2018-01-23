import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  width: 100%;

  @media (min-width: 648px) {

  }
`;

const Sponsors = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 20px;
  min-height: 90px;
  position: relative;
  width: 100%;
  z-index: 1;

  &:before {
    color: #ddd;
    content: 'SPONSORS';
    font-size: 2.3rem;
  }
`;

const Content = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.palette.brandPrimary};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 20px;
  min-height: 200px;
  position: relative;
  width: 100%;
  z-index: 1;

  &:before {
    color: #ddd;
    content: 'NAVIGATION';
    font-size: 2.3rem;
  }
`;

const Corporate = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.palette.cardBackground};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 20px;
  min-height: 56px;
  position: relative;
  width: 100%;
  z-index: 1;

  &:before {
    color: #ddd;
    content: 'CORPORATE';
    font-size: 1.7rem;
  }
`;

export default Wrapper;

export {
  Content,
  Corporate,
  Sponsors,
};
