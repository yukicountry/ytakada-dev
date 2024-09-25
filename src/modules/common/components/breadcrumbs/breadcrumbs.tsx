import React from "react";
import { BreadcrumbsProps, ElementProps, Breadcrumbs as MantineBreadcrumbs } from "@mantine/core";
import { TbChevronRight } from "react-icons/tb";

interface Props extends BreadcrumbsProps, ElementProps<"div", keyof BreadcrumbsProps> {}

export const Breadcrumbs = (props: Props) => {
  return <MantineBreadcrumbs separator={<TbChevronRight />} {...props} />;
};
