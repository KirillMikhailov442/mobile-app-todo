import React from 'react'

import { HeaderLayout } from '../../../layouts'
import { bgColors } from '../../../constants/colors'

const ProfileHeader = () =>{
    return(
        <HeaderLayout title='Profile' styles={{header: {height: 50, backgroundColor: bgColors.blackDefault}}}/>
    )
}

export default ProfileHeader