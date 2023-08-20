import matter from "gray-matter";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { Post } from "../types";

type ConvertMarkdownToPostOptions = {
  params: {
    id: string;
    markdown: string;
  };
};

/**
 * Markdownの内容をPostに変換し返却する
 */
export const convertMarkdownToPost = async ({ params }: ConvertMarkdownToPostOptions) => {
  // FrontMatter, contentを分離
  const { data: frontMatter, content } = matter(params.markdown);

  // Markdown->htmlへの変換
  const body = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "one-dark-pro",
    })
    .use(rehypeStringify)
    .process(content);

  return {
    id: params.id,
    body: body.toString(),
    ...frontMatter,
  } as Post;
};
