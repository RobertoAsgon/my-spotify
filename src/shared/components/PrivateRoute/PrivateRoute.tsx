import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { PAGES_URL } from '../../../services/Constants'

const PrivateRoute: React.FC = ({ children }) => {
  const [accessAllowed, setAccessAllowed] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const hasValidToken = sessionStorage.getItem('accessToken')
    if (hasValidToken) {
      setAccessAllowed(true)
    } else {
      setAccessAllowed(false)
      router.push(PAGES_URL.LOGIN)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{accessAllowed ? children : <>Loading</>}</>
}

export default PrivateRoute
