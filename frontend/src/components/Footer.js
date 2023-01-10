import React from 'react'
import { css } from '@emotion/css'

const getCurrentYear = () => {
  return new Date().getFullYear()
}

const Footer = () => {
  return <footer
    className={css`
      text-align: center;
      width: 100%;
      height: 2.5rem;
    `}
  >
    <p
      className={css`
        color: #ccc;
      `}
    >
      Copyright © {getCurrentYear()}</p>
    <p
      className={css`
        color: #ccc;
      `}
    >
      E: yousif.abdelhamed@gmail.com</p>
  </footer>
}

export default Footer