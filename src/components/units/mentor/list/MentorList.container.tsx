import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import {
  IQuery,
  IQueryFetchMentorArgs,
  IQueryFetchSelectedTagMentorArgs,
} from '../../../../commons/types/generated/types'
import MentorListUI from './MentorList.presenter'
import {
  FETCH_MENTOR,
  FETCH_SELECTED_TAG_MENTOR,
  FETCH_ALL_MENTOR_COUNT,
} from './MentorList.queries'

export default function MentorList() {
  const router = useRouter()
  const { data, refetch } = useQuery<
    Pick<IQuery, 'fetchMentor'>,
    IQueryFetchMentorArgs
  >(FETCH_MENTOR, { variables: { page: 1 } })
  console.log(data)
  const { data: selectedTagMentor } = useQuery<
    Pick<IQuery, 'fetchSelectedTagMentor'>,
    IQueryFetchSelectedTagMentorArgs
  >(FETCH_SELECTED_TAG_MENTOR)
  const { data: mentorCount } = useQuery(FETCH_ALL_MENTOR_COUNT)

  const onClickMoveToMentorDetail = (index) => () => {
    router.push(`/mentor/${data?.fetchMentor[index].id}`)
  }

  const mentorDetail = (e) => {
    for (let i = 0; i < 10; i++) {
      if (data?.fetchMentor.length < i) return
      if (data?.fetchMentor[i]?.id === String(e.currentTarget.id)) {
        router.push(`/mentor/${e.currentTarget.id}`)
        const detailData = data?.fetchMentor[i]
        return detailData
      }
    }
  }

  return (
    <MentorListUI
      data={data}
      refetch={refetch}
      mentorCount={mentorCount}
      onClickMoveToMentorDetail={onClickMoveToMentorDetail}
    />
  )
}
