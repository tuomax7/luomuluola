import React from 'react'
import { Link } from '@mui/material'

const ReferenceLink = ({ url, label, title }) => {
  return (
    <Link color='inherit' href={url} title={title}>
      {label}
    </Link>
  )
}

export default ReferenceLink
