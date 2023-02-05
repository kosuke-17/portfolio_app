import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const useHooks = () => {
  const { t } = useTranslation(['common', 'home', 'portfolio'])
  const router = useRouter()
  const { data: session } = useSession()

  const moveToPage = (url: string) => {
    router.push(url)
  }

  return { t, moveToPage, user: session?.user }
}
export default useHooks
