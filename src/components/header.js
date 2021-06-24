import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../images/ipsum_logo.svg'

const Header = ({ siteTitle }) => (
  <header>
    <img src={logo} alt="Ipsum Logo" />
    <div>
      {siteTitle}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Ipsum`,
}

export default Header
