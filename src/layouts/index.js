// @flow
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }: {children: () => React.Node}) => (
  <div className="template-wrapper">
    <Helmet
      title="Web Rebels 2018"
      meta={[
        { name: 'description', content: 'Web Rebels JS conference 2018, Oslo' },
        { name: 'keywords', content: 'webrebels, conference, javascript, js, olso' },
      ]}
    />
    {children()}
  </div>
)

export default TemplateWrapper
