import HeroBanner from '../components/HeroBanner';
import Search from '../components/Search';
import CardSection from '../components/CardSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getEntries } from '../contentful';
import {useState, useEffect} from 'react';


export default function Home(){   
    const [allEntries,setAllEntries] = useState([]);

    useEffect(() => {
        getEntries()
          .then((entriesData) => setAllEntries(entriesData))
          .catch((error) => console.error(error));
      }, []);

    return (
    <>
    <Navbar/>
    <HeroBanner/>
    <Search/>
    <h2 className="text-2xl font-semibold mb-4 ml-12">Shop</h2>
    <CardSection allEntries={allEntries}/>
    <Footer/>
    </>
    )
}
