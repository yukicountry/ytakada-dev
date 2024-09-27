import { fetchScraps } from "../../fetch";
import { ScrapList as ScrapListPresentation } from "./presentation";

export const ScrapList = async ({ tags }: { tags: string[] }) => {
  const scraps = await fetchScraps({ tags });

  return <ScrapListPresentation scraps={scraps} />;
};
