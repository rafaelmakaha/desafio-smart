import { createGlobalStyle } from 'styled-components'
import GothamBookWoff2 from '_material/fonts/gotham-book.woff2'
import GothamLightWoff2 from '_material/fonts/gotham-light.woff2'
import GothamBoldWoff2 from '_material/fonts/gotham-bold.woff2'
import GothamBlackWoff2 from '_material/fonts/gotham-black.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GothamBookWoff2';
    src: url(${GothamBookWoff2}) format('woff2');
  }
  @font-face {
    font-family: 'GothamLightWoff2';
    src: url(${GothamLightWoff2}) format('woff2');
  }
  @font-face {
    font-family: 'GothamBoldWoff2';
    src: url(${GothamBoldWoff2}) format('woff2');
  }
  @font-face {
    font-family: 'GothamBlackWoff2';
    src: url(${GothamBlackWoff2}) format('woff2');
  }
  h1 {
    font-family: 'GothamBookWoff2';
  }
  h2 {
    font-family: 'GothamBookWoff2';
  }
  p {
    font-family: 'GothamLightWoff2';
  }

`