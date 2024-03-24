import { githubAccount } from '@/testUtils/fixtures/githubAccount'

export const getGithubAccount = async () => {
  const result = await fetch('https://api.github.com/users/nobumitsu-1995')

  if (!result.ok) {
    return {
      ...githubAccount,
    }
  }

  const json = await result.json()

  return {
    name: json.login,
    src: json.avatar_url,
    href: json.html_url,
  }
}
