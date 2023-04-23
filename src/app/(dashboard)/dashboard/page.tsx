import Button from '@/components/ui/Button'
import { getServerSession } from 'next-auth'
// import React from 'react'

const page =async  ({}) => {
  const session=await getServerSession();
  
  return (
    <Button>
        Hello
    </Button>
  )
}

export default page