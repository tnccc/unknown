import type { NextPage } from 'next'
import { useRouter } from 'next/router'

export const StatusPage: NextPage = () => {
  const router = useRouter()
  const { id, lang } = router.query

  return (
    <>
      <div>このページのIDは{id}で{lang}です</div>
    </>
  )
}
