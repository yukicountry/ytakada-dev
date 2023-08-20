import fs from "fs";
import path from "path";
import { contentsDir } from "@/config/constants";
import { convertMarkdownToPost } from "./convert-markdown-to-post";

/**
 * 投稿リストの取得
 */
export const fetchAllPosts = async () => {
  const allPostsPromise = fs
    .readdirSync(contentsDir)
    .map((fileName) => path.parse(`${contentsDir}/${fileName}`))
    .filter((parsedPath) => parsedPath.ext === ".md")
    .map((parsedPath) => ({
      id: parsedPath.name,
      markdown: fs.readFileSync(`${parsedPath.dir}/${parsedPath.base}`, "utf-8"),
    }))
    .map((params) => convertMarkdownToPost({ params }));

  return await Promise.all(allPostsPromise);
};
