'use client'
import { actionFunction } from '@/utils/types'
import React, { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'


const initalState ={
    message:'',
    redirectTo:'',
}

function FormContainer({actions, children}:
   {
    actions: actionFunction,
    children: React.ReactNode
  }) {

  const [State, formAction] = useActionState(actions, initalState)
  const router = useRouter()
  useEffect(() => {
    if(State.message){
      toast(State.message)
    }
    if(State.redirectTo){
      router.push(State.redirectTo)
    }
  }, [State.message, State.redirectTo, router])

  return (
    <form action={formAction}>
      {children}
    </form>
      
  )
}

export default FormContainer