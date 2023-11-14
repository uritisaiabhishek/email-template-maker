import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer>copyright &copy; {currentYear} | All Rights Reserved </footer>
  )
}

export default Footer