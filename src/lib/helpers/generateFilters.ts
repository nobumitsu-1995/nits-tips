type Args = {
  category: string | null
  tag: string | null
  searchWord: string | null
}

export const generateFilters = ({ category, tag, searchWord }: Args) => {
  const filters = ['isHidden[not_equals]true']

  if (category) {
    filters.push(`category[equals]${category}`)
  }
  if (tag) {
    const tags = tag.split(',').map((v) => `tags[contains]${v}`)
    filters.push(`${tags.join('[and]')}`)
  }
  if (searchWord) {
    filters.push(`title[contains]${searchWord}`)
  }

  return filters.join('[and]')
}
