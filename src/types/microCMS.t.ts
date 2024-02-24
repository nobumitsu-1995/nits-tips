import type { blogs, categories, tags } from "./cms-type.t";

type Tag = tags
type Category = categories
type Blog = blogs

export interface MicroCMS {
  tag: Tag
  category: Category
  blog: Blog
}