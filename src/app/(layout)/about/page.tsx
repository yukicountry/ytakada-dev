import { Anchor } from "@/modules/common/components/anchor";
import { Badge } from "@/modules/common/components/badge";
import { Breadcrumbs } from "@/modules/common/components/breadcrumbs";
import { Logo } from "@/modules/common/components/logo";
import {
  Card,
  Center,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Timeline,
  TimelineItem,
  Title,
} from "@mantine/core";
import styles from "./page.module.css";

const Page = () => {
  const breadItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
  ];

  const skills = [
    {
      kind: "System Design",
      details: ["システム設計", "アーキテクチャ設計", "データベース設計"],
    },
    {
      kind: "Frontend development",
      details: ["TypeScript", "JavaScript", "React", "Next.js"],
    },
    {
      kind: "Backend development",
      details: ["PHP", "Laravel", "Golang", "Java", "Spring Framework"],
    },
    {
      kind: "Databases",
      details: ["PostgreSQL", "MySQL"],
    },
    {
      kind: "Infrastructures",
      details: ["AWS"],
    },
  ];

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
      title: "システムエンジニア",
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
            <Logo width={120} height={120} />
            <div>
              <Text fw="bold" size="lg">
                高田 勇気（Yuki Takada）
              </Text>
              <Text mt="1rem">
                システムエンジニア、バックエンドエンジニア、フロントエンドエンジニア
              </Text>
              <Text mt="1rem">東京都在住</Text>
            </div>
          </div>
        </section>
        <section id="skills">
          <Title order={2}>SKILLS</Title>
          <Grid mt="1rem">
            {skills.map((item, key) => (
              <GridCol key={key} span={{ sm: 6, md: 4 }}>
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
              </GridCol>
            ))}
          </Grid>
        </section>
        <section>
          <Title order={2}>LICENSES</Title>
          <Grid gutter="sm" mt="1rem">
            {licenses.map((license, key) => (
              <GridCol key={key} span={{ sm: 6, md: 4 }}>
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
              </GridCol>
            ))}
          </Grid>
        </section>
        <section>
          <Title order={2}>WORK / EDUCATION</Title>
          <Timeline mt="1.5rem" bulletSize={16} lineWidth={2}>
            {timelineItems.map((item, key) => (
              <TimelineItem title={item.title} key={key}>
                <Text c="dimmed" size="sm">
                  {item.position}
                </Text>
                <Text c="dimmed" size="xs" mt={4}>
                  {item.period}
                </Text>
              </TimelineItem>
            ))}
          </Timeline>
        </section>
      </article>
    </>
  );
};

export default Page;
