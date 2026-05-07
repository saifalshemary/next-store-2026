import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/formInput'
import FormButton from '@/components/form/formButton'

import React from 'react'
import { fetchProfile, updateProfileAction, updateProfileImgAction } from '@/utils/actions'
import FormImgContainer from '@/components/form/FormImgContainer'


async function EditProfile(){
    
    const profile = await fetchProfile()
    
    return(
        <section>
            <h1 className='text-2xl my-4 '>Edit Profile</h1>
            <div className=' bprder p-9 rounded-md max-w-2xl'>
                <FormImgContainer
                    action={updateProfileImgAction}
                    name={profile.username}
                    image={profile.profileImage}
                    text='update profile image'
                />
                <FormContainer actions={updateProfileAction}>
                    <div className='grid gap-4 mt-4'>
                        <FormInput type='text' name='FirstName' label='First Name' defaultValue={profile?.FirstName}/>
                        <FormInput type='text' name='LastName' label='Last Name' defaultValue={profile?.LastName}/>
                        <FormInput type='text' name='username' label='user name' defaultValue={profile?.username}/>
                    </div>
                <FormButton text='Update Profile' className='w-full mt-4' />
            </FormContainer>
            </div>
        </section>
    )
}

export default EditProfile