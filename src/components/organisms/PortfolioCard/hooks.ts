import { useSession } from 'next-auth/react'

const useHooks = () => {
  const { data } = useSession()

  return { user: data?.user }
}

export default useHooks
