import Badge from "@/components/badge/badge";
import { Card, DefaultProps, Group, Text, createStyles } from "@mantine/core";
import React from "react";
import { Project } from "../types";

type ProjectCardProps = Project & DefaultProps;

const useStyles = createStyles((theme) => ({
  period: {
    position: "relative",
    "::before": {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      content: "''",
      borderLeft: `2px solid ${theme.colors.dark[3]}`,
    },
  },
}));

/**
 * Projectsページ 項目カード
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  position,
  period,
  techStacks,
  ...rest
}) => {
  const { classes } = useStyles();

  return (
    <Card radius="md" padding="lg" withBorder={true} {...rest}>
      <Text component="time" size="sm" color="dimmed" pl="0.8rem" className={classes.period}>
        {period}
      </Text>
      <Text mt="1rem" weight="bold">
        {title}
      </Text>
      {position && (
        <Text size="sm" color="dimmed" mt="0.5rem">
          {position}
        </Text>
      )}
      <Group mt="1.2rem">
        {techStacks.map((stack, key) => (
          <Badge key={key}>{stack}</Badge>
        ))}
      </Group>
    </Card>
  );
};

export default ProjectCard;
