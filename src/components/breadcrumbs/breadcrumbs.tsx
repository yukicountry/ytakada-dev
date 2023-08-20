import React from "react";
import { BreadcrumbsProps, Breadcrumbs as MantineBreadcrumbs } from "@mantine/core";
import { TbChevronRight } from "react-icons/tb";

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  return <MantineBreadcrumbs separator={<TbChevronRight />} {...props} />;
};

export default Breadcrumbs;
