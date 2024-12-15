import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export interface BlogPost {
  slug: string
  title: string
  date: string
  content: MDXRemoteSerializeResult
}
