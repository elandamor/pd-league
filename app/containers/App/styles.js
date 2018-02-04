import styled from 'styled-components';

const Container = styled.div`
  .c-app-header {
    position: sticky;
    align-items: center;
    background-color: ${(props) => props.theme.palette.brandPrimary};
    ${'' /* display: flex;
    height: 64px;
    padding-left: 64px;
    width: 100%;

    @media (min-width: 648px) {
      height: 88px;
      padding-left: 88px;
    } */}
    top: 0;
    z-index: 5;
  }

  .c-app-nav {
    &--main {
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      line-height: 64px;
      padding-bottom: 48px;
      padding-left: 112px;

      ul {
        display: flex;
        flex: 1;
        margin: 0;
        padding: 0;

        &.-sub {
          background-color: ${(props) => props.theme.palette.cardBackground};
          box-shadow: 0 3px 5px rgba(0,0,0,.1);
          left: 0;
          line-height: 48px;
          padding-left: 112px;
          position: absolute;
          width: 100%;

          a {
            color: #76766f;
            font-size: 13px;
            font-weight: 400;
            padding: 0 20px;
            position: relative;

            &.-active::before {
              background-color: #76766f;
              bottom: 0;
              content: '';
              display: block;
              height: 4px;
              left: 0;
              position: absolute;
              right: 0;
            }
          }
        }
      }

      a,
      li[aria-haspopup] {
        color: #fff;
        display: block;
        padding: 0 25px;


      }

      a {
        text-decoration: none;
      }
    }
  }

  .c-app-footer {
    visibility: hidden;
  }
`;

export default Container;
