import { Grid, GridCol } from "@mantine/core";
import { ScrapPreview as ScrapPreviewModel } from "../../types";
import { ScrapPreview } from "../scrap-preview";

export const ScrapList = ({ scraps }: { scraps: ScrapPreviewModel[] }) => {
  return (
    <Grid gutter="xl">
      {scraps.map((scrap, index) => (
        <GridCol span={{ base: 12, md: 6 }} key={index}>
          <ScrapPreview scrap={scrap} />
        </GridCol>
      ))}
    </Grid>
  );
};
