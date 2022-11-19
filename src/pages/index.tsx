import React from "react";
import { Top, TopProps } from "../components/templates/Top";
import { client } from "../api/client";
import { GetStaticProps } from "next";
import { useState } from "react";
import Head from "next/head";

export type TopPageProps = {
  contents: {
    defaultSchedules: TopProps["schedules"];
    pastSchedules: TopProps["schedules"];
    config: {
      fixedContents?: TopProps["fixedContents"];
      title?: string;
    };
  };
};

export const TopPage: React.FC<TopPageProps> = ({ contents }) => {
  const [isDefaultView, setIsDefaultView] = useState<boolean>(true);
  const { defaultSchedules, pastSchedules, config } = contents;
  return (
    <>
      <Head>
        <title>{config.title ? config.title : "Schedule It"}</title>
      </Head>
      <Top
        schedules={isDefaultView ? defaultSchedules : pastSchedules}
        fixedContents={config.fixedContents}
        title={config.title}
        onClick={() => {
          setIsDefaultView(!isDefaultView);
        }}
        isDefaultView={isDefaultView}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const nowISOString = new Date().toISOString();
  const defaultData = await client
    .get({
      endpoint: "schedules",
      queries: {
        filters: `startDate[greater_than]${nowISOString}`,
        orders: `startDate`,
      },
    })
    .catch((err) => console.error(err));
  const pastData = await client
    .get({
      endpoint: "schedules",
      queries: {
        filters: `startDate[less_than]${nowISOString}`,
        orders: `-startDate`,
      },
    })
    .catch((err) => console.error(err));
  const config = await client
    .get({
      endpoint: "config",
    })
    .catch((err) => console.error(err));

  return {
    props: {
      contents: {
        defaultSchedules: defaultData.contents,
        pastSchedules: pastData.contents,
        config: {
          fixedContents: config.fixedContents,
          title: config.title,
        },
      },
    },
  };
};

export default TopPage;
