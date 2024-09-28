import { fetchSingleScrap } from "@/modules/features/scraps/fetch";
import { convertMarkdownToHtml } from "@/modules/features/scraps/functions";
import { Box, Title } from "@mantine/core";
import { BackButton } from "./_components/back-button";
import styles from "./page.module.css";

const Page = async ({ params }: { params: { slug: string } }) => {
  const scrap = await fetchSingleScrap(params.slug);
  const body = await convertMarkdownToHtml(scrap.body);

  return (
    <Box component="main" className={styles["container"]}>
      <BackButton />
      <Box component="article" mt="xl">
        <Title order={1}>{scrap.title}</Title>
        <Box
          dangerouslySetInnerHTML={{ __html: body.toString() }}
          className={styles["scrap-body"]}
        />
      </Box>
    </Box>
  );
};

export default Page;
