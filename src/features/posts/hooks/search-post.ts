import { useForm } from "@mantine/form";
import { useCallback, useEffect, useState } from "react";
import { Post } from "../types";

type Props = {
  allPosts: Post[];
};

const formInitialValues = {
  keyword: "",
};

/**
 * 投稿検索 カスタムフック
 */
const usePostSearch = (props: Props) => {
  // 全ての記事
  const [allPosts, setAllPosts] = useState(props.allPosts);

  // 表示中の記事
  const [posts, setPosts] = useState(allPosts);

  // フォームの状態管理
  const form = useForm({
    initialValues: formInitialValues,
  });

  // 検索ボタン押下時の処理
  const onClickSearch = useCallback(() => {
    setPosts((previous) => {
      return [];
    });
  }, []);

  return {
    posts,
    form,
    onClickSearch,
  };
};

export default usePostSearch;
