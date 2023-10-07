import {useState, useEffect} from "react";
import {getEntries} from '.././lib/contentfulClient';
import EntriesSection from '.././components/EntriesSection';

export default function Home(){ 
    const [allEntries, setAllEntries] = useState([]);   

    useEffect(() => {
        getEntries()
          .then((entriesData) => setAllEntries(entriesData))
          .catch((error) => console.error(error));
      }, []);


/* Basically copied from the Duck example from the repo \wd-043\week6\demo-headlessCMS */


    return (
    <>
    <div>
    <EntriesSection allEntries={allEntries} />
    <p>something home</p>
    </div>
    </>
    )
}
