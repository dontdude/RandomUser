import Head from 'next/head'   //Head section of HTML
import Card from "../components/Card.js";

export default function Home({user}) {
  return (
    <div>
      <Head>
        <title>Random User</title>
        <meta name="description" content="Generates random user details using API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>
         RandomUser API
        </h1>
      </header>

      <main>
        <Card user={user}/>
        <footer>ⓒ dontDude</footer>
      </main>

    </div>
  )
}

//getStaticProps which first fetches data and than renders this page with data as props
export const getStaticProps = async () => {                        //API call here, so that it make new request every time Home page renders
  const response = await fetch("https://randomuser.me/api/");       //contains response like status 200

  const data = await response.json();
 // console.log(data);                                                //data from API

  const user = data.results[0];

  return{
    props : { user, },                                            // will be passed to the page component as props
  }
}