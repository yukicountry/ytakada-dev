import Anchor from "@/components/anchor/anchor";
import Layout from "@/components/layout/layout";
import { MenuKind } from "@/components/menu/menu";
import PostCard from "@/features/posts/components/post-card";
import { fetchAllPosts } from "@/features/posts/hooks/fetch-all-posts";
import usePostSearch from "@/features/posts/hooks/search-post";
import { Post } from "@/features/posts/types";
import { Breadcrumbs, Center, Flex, Grid, Stack, Text, createStyles } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import { TbChevronRight } from "react-icons/tb";

export const getStaticProps = async () => {
  return {
    props: {
      allPosts: await fetchAllPosts(),
    },
  };
};

type PostListProps = {
  allPosts: Post[];
};

const useStyles = createStyles(() => ({
  noPostMessage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));

/**
 * 投稿一覧ページ
 */
const PostList: NextPage<PostListProps> = ({ allPosts }) => {
  const { posts, form, onClickSearch } = usePostSearch({ allPosts });

  const { classes } = useStyles();

  const breadItems = [
    { title: "Home", href: "/" },
    { title: "Posts", href: "/posts" },
  ];

  return (
    <>
      <Head>
        <title>Posts | ytakada.dev</title>
      </Head>
      <Layout activeMenu={MenuKind.Posts}>
        <Flex direction="column" h="100%">
          <Center>
            <Breadcrumbs separator={<TbChevronRight />}>
              {breadItems.map((item, key) => (
                <Anchor size="sm" key={key} href={item.href}>
                  {item.title}
                </Anchor>
              ))}
            </Breadcrumbs>
          </Center>
          {posts.length > 0 ? (
            <Grid mt="2rem">
              {posts.map((post, key) => (
                <Grid.Col key={key} md={6}>
                  <PostCard post={post} />
                </Grid.Col>
              ))}
            </Grid>
          ) : (
            <Text component="p" display="flex" className={classes.noPostMessage} mt="2rem">
              まだ記事は投稿されていません ☕️
            </Text>
          )}
        </Flex>
      </Layout>
    </>
  );
};

export default PostList;
