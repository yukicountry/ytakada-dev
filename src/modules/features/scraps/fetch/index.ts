import { createApiClient } from "@/utils/api/apiClient";
import { notFound } from "next/navigation";
import { Scrap, ScrapPreview, Tag } from "../types";

export const fetchScraps = async ({ tags }: { tags?: string[] }): Promise<ScrapPreview[]> => {
  const client = createApiClient({
    path: "/scraps",
    method: "get",
    params: {
      query: {
        populate: "tags",
        filters: {
          tags: {
            name: {
              $contains: tags,
            },
          },
        },
      },
    },
  });

  const response = await client.sendRequest();

  if (response.result === "error") {
    throw new Error("Unexpected error.");
  }

  return response.data?.data?.map((scrap) => ScrapPreview.parse(scrap)) ?? [];
};

export const fetchSingleScrap = async (slug: string): Promise<Scrap> => {
  const client = createApiClient({
    path: "/scraps",
    method: "get",
    params: {
      query: {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: "tags",
      },
    },
  });

  const response = await client.sendRequest();

  if (response.result === "error") {
    throw new Error("Unexpected error.");
  }

  const data = response.data?.data;

  if (data == null || data.length < 1) {
    notFound();
  }

  return Scrap.parse(data[0]);
};

export const fetchTags = async (): Promise<Tag[]> => {
  const client = createApiClient({
    path: "/tags",
    method: "get",
    params: {},
  });

  const response = await client.sendRequest();

  if (response.result === "error") {
    throw new Error("Unexpected error.");
  }

  return response.data?.data?.map((tag) => Tag.parse(tag)) ?? [];
};
