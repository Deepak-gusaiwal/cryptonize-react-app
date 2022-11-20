import React from 'react'
import {Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,} from '@chakra-ui/react'

const AlertComponent = ({ type, title, msg }) => {
    return (
        <Alert status={type}>
          <AlertIcon />
          <AlertTitle>{title}!</AlertTitle>
          <AlertDescription>{msg}.</AlertDescription>
        </Alert>
      )
}

export default AlertComponent