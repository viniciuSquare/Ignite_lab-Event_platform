import { gql, useQuery } from "@apollo/client"

import { useEffect } from "react"

import { Header } from "./components/Header";
import { Lesson } from "./components/Lesson";
import { Sidebar } from "./components/Sidebar";
import { Video } from "./components/Video";

import { client } from "./lib/apollo"
import { Event } from "./pages/Event";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        id
        name
      }
    }
  }
`

function App() {

  const { data } = useQuery(GET_LESSONS_QUERY);  

  return (  
    <Event/>
  )
}

export default App
