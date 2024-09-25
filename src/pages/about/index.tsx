import Anchor from "@/components/anchor/anchor";
import Badge from "@/components/badge/badge";
import Breadcrumbs from "@/components/breadcrumbs/breadcrumbs";
import Logo from "@/components/images/logo";
import Layout from "@/components/layout/layout";
import { MenuKind } from "@/components/menu/menu";
import { Card, Center, Grid, Group, HoverCard, Stack, Text, Timeline, Title } from "@mantine/core";
import { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";

const About: NextPage = () => {
  const breadItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
  ];

  const skills = [
    {
      kind: "Frontend development",
      details: ["TypeScript", "JavaScript", "React"],
    },
    {
      kind: "Backend development",
      details: ["PHP", "Laravel", "Golang", "Java", "Spring Framework"],
    },
    {
      kind: "Databases",
      details: ["MySQL", "PostgreSQL"],
    },
  ];

  const alsoKnow = ["Next.js", "AWS", "Linux", "Docker", "Python"];

  const licenses = [
    {
      name: "応用情報技術者",
      organization: "IPA 独立行政法人 情報処理推進機構",
      certification: "AP-2022-10-01303",
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      organization: "Amazon Web Services",
      certificationLink:
        "https://www.credly.com/badges/3433f8e3-3983-4fd8-b920-72144723c6a4/linked_in_profile",
    },
  ];

  const timelineItems = [
    {
      title: "システムエンジニア",
      position: "フリーランス",
      period: "2022.8 - 現在",
    },
    {
      title: "エンジニア",
      position: "株式会社アルジェブラテクノロジーズ",
      period: "2020.4 - 2022.7",
    },
    {
      title: "修士（理学・物質理学）",
      position: "名古屋大学 大学院理学研究科",
      period: "2018.4 - 2020.3",
    },
    {
      title: "学士（理学・物理学）",
      position: "名古屋大学 理学部",
      period: "2014.4 - 2018.3",
    },
  ];

  return (
    <>
      <Head>
        <title>About | ytakada.dev</title>
      </Head>
      <Layout activeMenu={MenuKind.About}>
        <Center>
          <Breadcrumbs>
            {breadItems.map((item, key) => (
              <Anchor size="sm" key={key} href={item.href}>
                {item.title}
              </Anchor>
            ))}
          </Breadcrumbs>
        </Center>
        <article className={styles["article"]}>
          <section>
            <div className={styles["introduction"]}>
              <HoverCard openDelay={300} radius="md">
                <HoverCard.Target>
                  <span>
                    <Logo width={120} height={120} cursor="pointer" />
                  </span>
                </HoverCard.Target>
                <HoverCard.Dropdown maw="50rem" mx="4rem" p="1.5rem">
                  <Text size="sm" fw="bold">
                    #6C9BD2（みそら色）
                  </Text>
                </HoverCard.Dropdown>
              </HoverCard>
              <div>
                <Text fw="bold" size="lg">
                  高田 勇気（Yuki Takada）
                </Text>
                <Text mt="1rem">
                  東京都在住のフリーランスエンジニアです。フロントエンド・サーバーサイドの開発業務を中心として、インフラ構築や各種クラウドサービス連携なども併せて対応可能です。
                </Text>
              </div>
            </div>
          </section>
          <section id="skills">
            <Title order={2}>SKILLS</Title>
            <Text component="h3" c="dimmed" fw="bold" mt="1rem">
              Primary skills
            </Text>
            <Grid mt="1rem">
              {skills.map((item, key) => (
                <Grid.Col key={key} span={{ sm: 6, md: 4 }}>
                  <Card h="100%" p="lg" withBorder={true}>
                    <Stack align="center">
                      <Text>{item.kind}</Text>
                      <Group justify="center">
                        {item.details.map((detail, key) => (
                          <Badge key={key}>{detail}</Badge>
                        ))}
                      </Group>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
            <Text component="h3" c="dimmed" fw={700} mt="1rem">
              Also know
            </Text>
            <Group mt="1rem">
              {alsoKnow.map((item, key) => (
                <Badge key={key}>{item}</Badge>
              ))}
            </Group>
          </section>
          <section>
            <Title order={2}>INTERESTS</Title>
            <ul>
              <li>ソフトウェアアーキテクチャ設計（DDD etc）</li>
              <li>プログラミング言語（F#）</li>
            </ul>
          </section>
          <section>
            <Title order={2}>LICENSES</Title>
            <Grid gutter="sm" mt="1rem">
              {licenses.map((license, key) => (
                <Grid.Col key={key} span={{ sm: 6, md: 4 }}>
                  <Card h="100%" withBorder={true}>
                    <Text>{license.name}</Text>
                    <Text c="dimmed" size="xs">
                      {license.organization}
                    </Text>
                    {license.certification && (
                      <Text c="dimmed" size="xs">
                        {license.certification}
                      </Text>
                    )}
                    {license.certificationLink && (
                      <Anchor c="dimmed" size="xs" href={license.certificationLink} display="block">
                        認定情報
                      </Anchor>
                    )}
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </section>
          <section>
            <Title order={2}>WORK / EDUCATION</Title>
            <Timeline mt="1.5rem" bulletSize={16} lineWidth={2}>
              {timelineItems.map((item, key) => (
                <Timeline.Item title={item.title} key={key}>
                  <Text c="dimmed" size="sm">
                    {item.position}
                  </Text>
                  <Text c="dimmed" size="xs" mt={4}>
                    {item.period}
                  </Text>
                </Timeline.Item>
              ))}
            </Timeline>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default About;
