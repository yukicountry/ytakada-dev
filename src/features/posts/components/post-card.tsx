import { Box, Card, DefaultProps, Group, Image, Text, createStyles } from "@mantine/core";
import React from "react";
import Date from "./date";
import { TbEdit } from "react-icons/tb";
import { Post } from "../types";
import Badge from "@/components/badge/badge";

type PostCardProps = {
  post: Post;
} & DefaultProps;

const usePostCardStyles = createStyles((theme) => ({
  root: {
    cursor: "pointer",
  },
  image: {
    borderRadius: "50%",
  },
  postInfo: {
    alignSelf: "stretch",
    flex: 1,
  },
}));

const PostCard: React.FC<PostCardProps> = ({ post, className, ...rest }) => {
  const { classes, cx } = usePostCardStyles();

  return (
    <Card
      component="a"
      href={`/posts/${post.id}`}
      className={cx(classes.root, className)}
      withBorder={true}
      padding="lg"
      radius="md"
      {...rest}
    >
      <Group>
        <Box className={classes.postInfo}>
          <Text weight={700} size="lg">
            {post.title}
          </Text>
          <Date icon={<TbEdit />} date={post.postDate} color="dimmed" mt="0.5rem" size="sm" />
          <Group pt="1rem">
            {post.tags.map((tag, key) => (
              <Badge key={key}>{tag}</Badge>
            ))}
          </Group>
        </Box>
        <Image
          src={`/images/posts/${post.image}`}
          alt={post.title}
          width={100}
          height={100}
          imageProps={{
            className: classes.image,
          }}
        />
      </Group>
    </Card>
  );
};

export default PostCard;
