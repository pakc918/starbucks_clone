import Router, { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import login from '@/pages/login'

interface userIsLoginProps {
    children: ReactNode
}

export default function userIsLogin({ children }: userIsLoginProps) {
    const [accessToken , setaccessToken ] = useState<boolean>(false)

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken') ? true : false
        if(accessToken === false ) {
            Router.push('/login')
        } else {
            setaccessToken(accessToken)
        }
    }, [children])

}