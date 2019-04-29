import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        display: `flex`,
        margin: `0 auto`,
      }}
    >
      <div
        style={{
          padding: `1rem 1rem`,
        }}
      >
        <h4 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h4>
      </div>
      <div
        style={{
          padding: `1rem 1rem`,
        }}
      >
        <h4 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {"Contact"}
          </Link>
        </h4>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
