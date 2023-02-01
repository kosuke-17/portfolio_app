import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import PortfolioDetail from '@/components/organisms/PortfolioDetail'

const PortfolioDetailPage: NextPage = () => {
  const router = useRouter()
  const id = router.query.id as string

  return <PortfolioDetail id={id} />
}

export default PortfolioDetailPage
