import { trpc } from '@/utils/trpc'

const useHooks = ({ userId }: { userId: string }) => {
  const { data: profile } = trpc.profile.getProfileByUserId.useQuery({
    userId,
  })
  const { data: educations } = trpc.education.getAlllEducationByUserId.useQuery(
    {
      userId,
    },
  )
  const { data: experiences } =
    trpc.experience.getAlllExperienceByUserId.useQuery({
      userId,
    })

  return { profile, educations, experiences }
}
export default useHooks
