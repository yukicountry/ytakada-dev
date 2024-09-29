import { fetchTags } from "../../fetch";
import { TagList as TagListPresentation } from "./presentation";

export const TagList = async () => {
  const tags = await fetchTags();

  return <TagListPresentation tags={tags} />;
};
