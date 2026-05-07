import FormButton from '@/components/form/formButton'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/formInput'
import { GetDataAction } from '@/utils/actions'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

// مكون لإنشاء بروفايل مستخدم جديد
async function CreateProfileAction() {

    const user = await currentUser();
    // if(user?.privateMetadata.hasProfile){
    //     redirect('/')
    // }

  return (
    <section>
        <h1 className='text-2xl my-4'>Create User</h1>
        <div className=' bprder p-9 rounded-md max-w-2xl'>
            <FormContainer actions={GetDataAction}>
                <div className='grid gap-4 mt-4'>
                    <FormInput type='text' name='FirstName' label='First Name' />
                    <FormInput type='text' name='LastName' label='Last Name' />
                    <FormInput type='text' name='username' label='user name' />
                </div>
            <FormButton text='Create Profile' className='w-full mt-4' />
        </FormContainer>
        </div>
        
        
    </section>
  )
}

export default CreateProfileAction