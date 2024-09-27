import { fetchSingleScrap } from "@/modules/features/scraps/fetch";
import { convertMarkdownToHtml } from "@/modules/features/scraps/functions";
import { Box, Title } from "@mantine/core";
import { BackButton } from "./_components/back-button";

const Page = async ({ params }: { params: { slug: string } }) => {
  const scrap = await fetchSingleScrap(params.slug);

  const body = await convertMarkdownToHtml(scrap.body);

  return (
    <Box component="main">
      <BackButton />
      <Box component="article" mt="xl">
        <Title order={1}>{scrap.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: body.toString() }}></div>
      </Box>
    </Box>
  );
};

export default Page;
