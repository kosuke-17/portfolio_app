import { useSession } from 'next-auth/react'

import { NextPageWithLayout } from '@/pages/_app'
import PageLayout from '@/components/common/Layout/PageLayout'
import ProfileDetail from '@/components/organisms/ProfileDetail'

const ProfilePage: NextPageWithLayout = () => {
  // userIdを取得する
  const { data: session } = useSession()
  const userId = session?.user?.id || ''

  return <ProfileDetail userId={userId} />
}

export default ProfilePage

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageLayout>{page}</PageLayout>
}
