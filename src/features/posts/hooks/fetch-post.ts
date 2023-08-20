import fs from "fs";
import { convertMarkdownToPost } from "./convert-markdown-to-post";
import { contentsDir } from "@/config/constants";

type FetchPostOptions = {
  params: {
    id: string;
  };
};

/**
 * 投稿モデルの取得
 */
export const fetchPost = ({ params }: FetchPostOptions) => {
  return convertMarkdownToPost({
    params: {
      id: params.id,
      markdown: fs.readFileSync(`${contentsDir}/${params.id}.md`, "utf-8"),
    },
  });
};
