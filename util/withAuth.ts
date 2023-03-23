import { userIsLogin } from '@/state/user/atom/userIsLoginState'
import { useRouter } from 'next/router'
import React from 'react'
import { useRecoilValue } from 'recoil'
import Swal from 'sweetalert2'

const withAuth = (props: {WrappedComponent:any}) => {

    return (props.WrappedComponent) => {


        const router = useRouter();
        const isLogin = useRecoilValue(userIsLogin);

        if(!isLogin) {
            Swal.fire({
                icon : 'error',
                title: 'Oops...',
                text: 'You must login first!'
            });
            router.push('/login');
            return null;
        }
        return <WrappedComponent:any {...props} />
    }
}
