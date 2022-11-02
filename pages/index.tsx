import {ScheduleList} from "../src/components/molecules/ScheduleList";
import {Top} from "../src/components/templates/Top";

function HomePage({data}) {
  const {error} = data

  if (error) {
    return (
      <div>{error}</div>
    )
  }

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
        schedules={data}
      />
    </>
  )
}

export const getStaticProps = async() => {
  const res = await fetch("http://localhost:30000/schedules")
  const schedules = await res.json()

  if (res.status >= 400) {
    return {
      props: {
        data: null,
        error: "error!!",
      }
    }
  }

  return {
    props: {
      data: {
        schedules,
      },
      error: null,
    }
  }
}

export default HomePage
