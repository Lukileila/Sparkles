/* components */
import NavbarLoggedIn from '../components/NavbarLoggedIn';
import Footer from '../components/Footer';
import { getEntries } from '../contentful';
import Spinner from '../components/Spinner';
import Tag from '../components/Tag';

import Card from '../components/Card';
/* functions */
import { getEntry } from '../contentful';
import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";



export default function ProductPage({allEntries}) {
  const { id } = useParams();
  const [singleEntry, setSingleEntry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log('all Entries',allEntries)

  useEffect(() => {
      getEntry(id)
        .then((entryData) => {
          setSingleEntry(entryData);
          console.log('entry data',entryData);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    
  }, [id]);

console.log("ProductPage rendered with id:", id);
console.log("Single Entry:", singleEntry);

  return (
    <>
      <NavbarLoggedIn />
      <div className='top-50'>
        <Breadcrumbs singleEntry={singleEntry} />
      </div>

      {isLoading ? (
        <div className='h-screen flex justify-center items-center'>
          <Spinner />
        </div>
      ) : singleEntry && singleEntry.fields && singleEntry.sys ? (
        <div className='bg-gray-100 h-screen flex flex-col items-center justify-center gap-10' style={{ height: '120vh' }}>
          <Steps />
          <div className='bg-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row' style={{ maxWidth: '80vw' }}>
            <div className='md:w-1/2 md:pr-8'>
              <img src={singleEntry.fields.image.fields.file.url} alt='Product' className='w-full h-auto rounded-md' />
            </div>
            <div className='md:w-1/2'>
              <h2 className='text-3xl font-semibold mb-4'>{singleEntry.fields.title}</h2>
              <p className='text-gray-600 mb-4'>{singleEntry.fields.description}</p>
              <div className='flex flex-col items-start justify-between mb-4'>
                <span className='text-2xl font-semibold'>${singleEntry.fields.price}</span>
                <button className='btn btn-primary mt-4'>Add to Cart</button>
              </div>
              <div className='flex flex-col items-start justify-between '>
                <span className='text-gray-700 flex items-center mt-1'>
                  <Review />: {singleEntry.fields.review}
                </span>
                <span className='text-gray-700 mt-1'>Publisher: {singleEntry.fields.publisher} </span>
                <span className='text-gray-700 mt-1'>Published At: {singleEntry.fields.publishedAt} </span>
                <div className='flex flex-wrap gap-2 p-2 justify-start'>
                  <Tag text={singleEntry.fields.tags[0]} color='blue' />
                  <Tag text={singleEntry.fields.tags[1]} color='blue' />
                  <Tag text={singleEntry.fields.tags[2]} color='blue' />
                </div>
              </div>
            </div>
          </div>
          <Share />
          <CommentSection singleEntry={singleEntry} />
          <h2 className='text-2xl font-semibold mb-4 ml-4'>You might also like...</h2>
          <CardSection />
        </div>
      ) : (
        <div className='text-red-500'>Sorry.</div>
      )}
      <Footer />

      {!(Object.keys(entry).length===0) && <Card   key={entry.sys.id}   blurb={entry.fields.blurb} image={entry.fields.image} title={entry.fields.title} id='1645XVOgL8cGdByh6e17Qh' /> }

    </>
  );
}
