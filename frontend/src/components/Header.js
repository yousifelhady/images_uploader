import React from 'react'
import { css } from '@emotion/css'

const Header = () => {
  return <header
    className={css`
      background-color: #f5ba13;
      margin: auto -16px;
      padding: 16px 32px;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    `}
  >
    <h1
      className={css`
        color: #fff;
        font-family: "McLaren", cursive;
        font-weight: 200;
      `}
    >
      Images Uploader App</h1>
  </header>
}

export default Header