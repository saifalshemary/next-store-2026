import { fetchProfileImg } from '@/utils/actions'
import { LucideUser2 } from 'lucide-react'


async function UserIcon() {
  
  const profileImg = await fetchProfileImg();

  if (profileImg) {
    return <img 
                src={profileImg}
                alt="profile-img" 
                className='w-6 h-6 rounded-full '/>
    
  }

  return (
    <LucideUser2 className='w-6 h-6 rounded-full text-white' />

  )
}

export default UserIcon