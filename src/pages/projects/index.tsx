import Anchor from "@/components/anchor/anchor";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Layout from "@/components/layout/layout";
import { MenuKind } from "@/components/menu/menu";
import ProjectCard from "@/features/projects/components/project-card";
import { Project } from "@/features/projects/types";
import { Box, Center, Grid } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

/**
 * Projectsページ
 */
const ProjectsPage: NextPage = () => {
  const breadItems = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
  ];

  const projects: Project[] = [
    {
      title: "ポートフォリオサイト制作",
      period: "2023.7",
      techStacks: ["React", "Next.js", "Mantine", "Storybook", "Vercel"],
    },
    {
      title: "金融機関向け 融資手続きペーパーレスシステム 新規開発",
      position: "フロントエンドエンジニア / サーバーサイドエンジニア",
      period: "2023.4 - 2023.9",
      techStacks: [
        "Laravel",
        "React",
        "Sass",
        "CSS Modules",
        "Bootstrap",
        "Storybook",
        "PostgreSQL",
        "AWS",
        "Docker",
      ],
    },
    {
      title: "金融機関向け 年金業務手続きペーパーレスシステム 新規開発",
      position: "フロントエンドエンジニア / サーバーサイドエンジニア",
      period: "2022.11 - 2023.3",
      techStacks: ["Laravel", "React", "Sass", "Bootstrap", "PostgreSQL", "AWS", "Docker"],
    },
    {
      title: "ギア不良品判定 画像解析ソフトウェア 新規開発",
      position: "ソフトウェアエンジニア",
      period: "2022.1 - 2022.3",
      techStacks: ["C++", "OpenCV", "Python"],
    },
    {
      title: "反射神経測定スマホアプリ 新規開発",
      position: "サーバーサイドエンジニア",
      period: "2022.1 - 2022.2",
      techStacks: ["Spring Framework", "MySQL", "Hibernate", "AWS", "Azure", "Firebase", "OpenAPI"],
    },
    {
      title: "研究者向けスライド共有Webサービス 新規開発",
      position: "サーバーサイドエンジニア / （フロントエンドエンジニア）",
      period: "2021.4 - 2021.12",
      techStacks: ["Spring Framework", "MySQL", "Vue.js", "Hibernate", "AWS", "Docker", "OpenAPI"],
    },
    {
      title: "美容師向けSNS兼予約システム（スマホアプリ） 新規開発",
      position: "サーバーサイドエンジニア / （フロントエンドエンジニア）",
      period: `2020.4 - 2020.11, 2021.5 - 2021.7`,
      techStacks: ["Laravel", "Vue.js", "Stripe", "MySQL", "Redis", "OAuth2", "AWS", "Docker"],
    },
    {
      title: "整体サロン向け予約システム（スマホアプリ） 新規開発",
      position: "サーバーサイドエンジニア",
      period: "2019.7 - 2019.10",
      techStacks: ["Laravel", "MySQL", "OAuth2", "AWS", "Vagrant"],
    },
    {
      title: "フォトスタジオ向け予約システム（スマホアプリ） 新規開発",
      position: "サーバーサイドエンジニア",
      period: "2019.5 - 2019.7",
      techStacks: ["Laravel", "MySQL", "OAuth2", "AWS", "Vagrant"],
    },
    {
      title: "バレエ情報配信Webサービス リプレース ",
      position: "サーバーサイドエンジニア",
      period: "2019.3 - 2019.5",
      techStacks: ["Laravel", "MySQL", "AWS", "YouTube Data API", "Vagrant"],
    },
  ];

  return (
    <>
      <Head>
        <title>Projects | ytakada.dev</title>
      </Head>
      <Layout activeMenu={MenuKind.Projects}>
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
          <Grid gutter="xl">
            {projects.map((project, key) => (
              <Grid.Col md={6} key={key}>
                <ProjectCard h="100%" {...project} />
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default ProjectsPage;
