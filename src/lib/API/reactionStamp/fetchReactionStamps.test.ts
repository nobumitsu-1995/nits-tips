import { deleteReactionStamp } from './deleteReactionStamp'
import { getReactionStamps } from './getReactionStamps'
import { postReactionStamp } from './postReactionStamp'

const ARTICLE_ID = 'articleId'
test('reactionStamp取得APIを叩いて、正常に値が取得できる。', async () => {
  const response = await getReactionStamps({ articleId: ARTICLE_ID })
  expect(response).toMatchSnapshot()
})

test('reactionStamp追加APIを叩いて、正常に値が取得できる。', async () => {
  const response = await postReactionStamp({
    stamp_id: 1,
    article_id: 'hoge',
  })
  expect(response).toMatchSnapshot()
})

test('reactionStamp削除APIを叩いて、正常に処理が実行できる。', async () => {
  const response = await deleteReactionStamp(1)
  expect(response).toMatchSnapshot()
})
