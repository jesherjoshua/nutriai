import React from 'react'
import {useSession} from 'next-auth/react';

import LoggedIn from '../Components/LoggedIn/LoggedIn' ;
import LoggedOut from '../Components/LoggedOut/LoggedOut';
import Footer from '../Components/Footer/Footer'

const login = () => {

    const {data : session} = useSession();
    if(session) {
        return (
            <div>
                <LoggedIn session={session}/>
                {/* <Footer /> */}
            </div>
        )
    }
    else{
        return (
            <div>
                <LoggedOut />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default login
