import Anchor from "@/components/anchor/anchor";
import Badge from "@/components/badge/badge";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Layout from "@/components/layout/layout";
import { MenuKind } from "@/components/menu/menu";
import Date from "@/features/posts/components/date";
import { fetchAllPosts } from "@/features/posts/hooks/fetch-all-posts";
import { fetchPost } from "@/features/posts/hooks/fetch-post";
import { Post } from "@/features/posts/types";
import { Box, Card, Center, Flex, Group, Text, Title, createStyles } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { TbEdit, TbListSearch } from "react-icons/tb";
import tocbot from "tocbot";

export const getStaticPaths = async () => {
  const posts = await fetchAllPosts();

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

type GetStaticPropsParams = {
  params: {
    id: string;
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsParams) => {
  const post = await fetchPost({
    params: {
      id: params.id,
    },
  });

  return { props: { post } };
};

const useStyles = createStyles((theme) => ({
  postBody: {
    flex: 1,
    maxWidth: "100%",
    pre: {
      display: "grid",
      padding: "1rem",
      borderRadius: "0.4rem",
    },
    code: {
      counterReset: "line",
      overflow: "auto",
    },
    "code > [data-line]::before": {
      counterIncrement: "line",
      content: "counter(line)",
      display: "inline-block",
      width: "1rem",
      marginRight: "1rem",
      textAlign: "right",
      color: "gray",
    },
    "code[data-line-numbers-max-digits='2'] > [data-line]::before": {
      width: "2rem",
    },
    "code[data-line-numbers-max-digits='3'] > [data-line]::before": {
      width: "3rem",
    },
  },
  tocWrapper: {
    position: "sticky",
    top: "8rem",
    minWidth: 250,
    fontSize: "0.9rem",
    ol: {
      listStyle: "none",
      paddingInlineStart: 0,
    },
    "ol ol": {
      paddingInlineStart: "1rem",
    },
    a: {
      display: "block",
      textDecoration: "none",
      "&:visited": {
        color: "inherit",
      },
    },
  },
  hiddenMobile: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

type PostDetailProps = {
  post: Post;
};

const PostDetail: NextPage<PostDetailProps> = ({ post }) => {
  const { cx, classes } = useStyles();

  const breadItems = [
    { title: "Home", href: "/" },
    { title: "Posts", href: "/posts" },
    { title: post.title, href: `/posts/${post.id}` },
  ];

  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".post-body",
      headingSelector: "h2, h3",
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <>
      <Head>
        <title>{post.title} | ytakada.dev</title>
      </Head>
      <Layout activeMenu={MenuKind.Posts}>
        <Center>
          <Breadcrumbs>
            {breadItems.map((item, key) => (
              <Anchor size="sm" key={key} href={item.href}>
                {item.title}
              </Anchor>
            ))}
          </Breadcrumbs>
        </Center>
        <Box component="article" mt="2rem">
          <Title>{post.title}</Title>
          <Date icon={<TbEdit />} date={post.postDate} color="dimmed" mt="0.5rem" />
          {post.tags.length > 0 && (
            <Group mt="1.5rem" spacing="sm">
              {post.tags.map((tag, key) => (
                <Badge key={key}>{tag}</Badge>
              ))}
            </Group>
          )}
          <Flex align="flex-start" gap="2rem" mt="2rem">
            <Box
              component="article"
              className={cx("post-body", classes.postBody)}
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
            <Card className={cx(classes.tocWrapper, classes.hiddenMobile)} withBorder={true} p="lg">
              <Group spacing="sm">
                <TbListSearch size={18} />
                <Text>Table of contents</Text>
              </Group>
              <Box component="nav" className={"toc"} />
            </Card>
          </Flex>
        </Box>
      </Layout>
    </>
  );
};

export default PostDetail;
