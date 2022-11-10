import {Top, TopProps} from "../components/templates/Top";
import {GetStaticProps} from "next"
import {createClient} from 'microcms-js-sdk';
import {useState} from "react"
import {sortByDecsDate} from "../utils/time/sort-by-decs-date";
import {isAfterTime} from "../utils/time/is-after-time";
import Head from 'next/head'

export type TopPageProps = {
  contents: {
    schedules: TopProps["schedules"],
    config: {
      fixedContents?: TopProps["fixedContents"],
      title?: string,
    },
  }
  totalCount: number,
  offset: number,
}

const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export const TopPage:React.FC<TopPageProps> = ({contents}) => {
  const [isDefaultView, setIsDefaultView] =useState<boolean>(true)
  const {schedules, config} = contents
  const nowISOString = new Date().toISOString()
  const pastSchedules = schedules
    .filter((s) => !isAfterTime(s.startDate, nowISOString))
    .sort((a, b) => sortByDecsDate(b.startDate, a.startDate))
  const defaultSchedules = schedules
    .filter((s) => isAfterTime(s.startDate, nowISOString))
    .sort((a, b) => sortByDecsDate(a.startDate, b.startDate))
  return (
    <>
      <Head>
        <title>{config.title ? config.title : "Schedule It"}</title>
      </Head>
      <style global jsx>{`
        body {
          background-color: #2b2a33;
          color: white;
        }
      `}
      </style>
      <Top
        schedules={isDefaultView ? defaultSchedules : pastSchedules}
        fixedContents={config.fixedContents}
        title={config.title}
        onClick={() => {
          setIsDefaultView(!isDefaultView)
        }}
        isDefaultView={isDefaultView}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const data = await client
    .get({
      endpoint: 'schedules',
    })
    .catch((err) => console.error(err));
  const config = await client
    .get({
      endpoint: 'config',
    })
    .catch((err) => console.error(err));

  return {
    props: {
      ...data,
      contents: {
        schedules: data.contents,
        config: {
          fixedContents: config.fixedContents,
          title: config.title,
        },
      }
    }
  }
}

export default TopPage
