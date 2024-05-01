import type { APIContext } from 'astro'
import { getAllBlogs } from '@/lib/API/microCMS/getAllBlogs'
import { createOGP } from '@/lib/helpers/createOGP'
import { getGithubAccount } from '@/lib/API/getGithubAccount'

export const prerender = true

export async function getStaticPaths() {
  const allBlogs = await getAllBlogs()

  return allBlogs.map((data) => ({
    params: { id: data.id },
    props: { blog: data },
  }))
}

const githubAccount = await getGithubAccount()

export async function GET({ props }: APIContext) {
  const buffer = await createOGP({
    title: props.blog.title,
    avatar: githubAccount.src,
    author: githubAccount.name,
  })

  return new Response(buffer, {
    headers: { 'Content-Type': 'image/png' },
  })
}
