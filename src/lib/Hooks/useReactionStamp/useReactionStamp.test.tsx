import React from 'react'
import { waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { setup } from '@/testUtils'
import { useReactionStamp } from './useReactionStamp'
import server from '@/testUtils/mocks/server'

const Component = () => {
  const {
    isLoading,
    reactionStampSummary,
    reactedStamp,
    handlePostStamp,
    handleDeleteStamp,
  } = useReactionStamp()

  return (
    <div>
      <p data-testid="loading">{`${isLoading}`}</p>
      {reactionStampSummary &&
        reactionStampSummary.length > 0 &&
        reactionStampSummary.map((stamp) => (
          <p
            key={stamp.stamp.stampId}
            data-testid={`stamp-${stamp.stamp.stampId}`}
          >
            {stamp.count}
          </p>
        ))}
      {reactedStamp.map((stamp) => (
        <p key={stamp} data-testid={`reactedStamp-${stamp}`}>
          {stamp}
        </p>
      ))}
      <button
        type="button"
        onClick={() =>
          handlePostStamp({
            stampId: 2,
            articleId: 'hoge',
          })
        }
      >
        post
      </button>
      <button
        type="button"
        onClick={() =>
          handleDeleteStamp({
            stampId: 1,
          })
        }
      >
        delete
      </button>
    </div>
  )
}

test('reactionStampSummary,reactedStampの初期表示が正常にされている。', async () => {
  expect.assertions(10)
  const { getByTestId } = setup(<Component />)

  await waitFor(() => {
    expect(getByTestId('loading').innerHTML).toBe('false')
    expect(getByTestId('stamp-1').innerHTML).toBe('40')
    expect(getByTestId('stamp-2').innerHTML).toBe('7')
    expect(getByTestId('stamp-3').innerHTML).toBe('0')
    expect(getByTestId('stamp-4').innerHTML).toBe('1')
    expect(getByTestId('stamp-5').innerHTML).toBe('0')
    expect(getByTestId('stamp-6').innerHTML).toBe('0')
    expect(getByTestId('reactedStamp-1').innerHTML).toBe('1')
    expect(getByTestId('reactedStamp-3').innerHTML).toBe('3')
  })
})

test('postをした時、正常に値が更新される', async () => {
  expect.assertions(2)
  const { getByRole, getByTestId, user } = setup(<Component />)
  await user.click(getByRole('button', { name: 'post' }))

  await waitFor(() => {
    expect(getByTestId('stamp-2').innerHTML).toBe('8')
    expect(getByTestId('reactedStamp-2').innerHTML).toBe('2')
  })
})

test('deleteをした時、正常に値が更新される', async () => {
  expect.assertions(2)
  const { getByRole, getByTestId, queryByTestId, user } = setup(<Component />)
  await user.click(getByRole('button', { name: 'delete' }))

  await waitFor(() => {
    expect(getByTestId('stamp-1').innerHTML).toBe('39')
    expect(queryByTestId('reactedStamp-1')).not.toBeInTheDocument()
  })
})

test('postしたが正常に処理されなかった時、直前のデータに切り戻される', async () => {
  expect.assertions(2)
  server.use(
    http.post('http://localhost:8080/reactionStamps', () =>
      HttpResponse.error(),
    ),
  )
  const { getByRole, getByTestId, queryByTestId, user } = setup(<Component />)
  await user.click(getByRole('button', { name: 'post' }))

  await waitFor(() => {
    expect(getByTestId('stamp-2').innerHTML).toBe('7')
    expect(queryByTestId('reactedStamp-2')).not.toBeInTheDocument()
  })
})

test('deleteしたが正常に処理されなかった時、直前のデータに切り戻される', async () => {
  expect.assertions(2)
  server.use(
    http.delete('http://localhost:8080/reactionStamps/:id', () =>
      HttpResponse.error(),
    ),
  )
  const { getByRole, getByTestId, user } = setup(<Component />)
  await user.click(getByRole('button', { name: 'delete' }))

  await waitFor(() => {
    expect(getByTestId('stamp-1').innerHTML).toBe('40')
    expect(getByTestId('reactedStamp-1').innerHTML).toBe('1')
  })
})
