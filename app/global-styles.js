import { injectGlobal, keyframes } from 'styled-components';

const shiftRightwards = keyframes`
  0% {
    transform: translateX(-100%)
  }

  40% {
      transform: translateX(0)
  }

  60% {
      transform: translateX(0)
  }

  100% {
      transform: translateX(100%)
  }
`;

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 0px !important;
    height: 2px !important
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2)
  }

  *::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.08)
  }

  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'liga', 'kern' 1;
    -webkit-font-smoothing: antialiased;
    font-kerning: normal;
    font-size: 14px;
    font-weight: 400;
    height: 100%;
    letter-spacing: 0.01rem;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    width: 100%;
  }

  html {
    overflow-x: hidden;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Helvetica Neue,sans-serif;
  }

  .is-loading {
    .c-loading-bar {
      display: block;
      animation: ${shiftRightwards} 1s ease-in-out infinite;
      animation-delay: .4s;
    }
  }

  ol li, ul li {
    list-style-type: none;
  }
`;
