import {Top, TopProps} from "../components/templates/Top";
import {GetStaticProps} from "next"

export type TopPageProps = {
  data: TopProps
}

export const TopPage:React.FC<TopPageProps> = ({data}) => {
  return (
    <>
      <style global jsx>{`
        body {
          background-color: #2b2a33;
          color: white;
        }
      `}
      </style>
      <Top
        schedules={data.schedules}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const res = await fetch("http://localhost:30000/schedules")
  const schedules: TopProps = await res.json()

  return {
    props: {
      data: {
        schedules,
      },
    }
  }
}

export default TopPage
