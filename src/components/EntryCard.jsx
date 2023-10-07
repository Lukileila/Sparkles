const EntryCard = (
    {description, featuredProductImage, name}
  
  
/*   {
    duckName,
    imgSrc,
    owner: {
      fields: { firstName, lastName },
    },
  }
   */
  
  ) => {
    return (<>
    <div className='card w-96 text-white bg-gray-900 h-[32rem] hover:scale-[1.02] hover:cursor-pointer transition-all'>
        <figure className='h-[70%] overflow-hidden'>
          <img src={featuredProductImage.fields.file.url} alt='A rubber duck' className='object-cover' />
        </figure>
        <div className='card-body gap-6 text-center'>
          <h2 className='card-title, font-bold'  >{name}</h2>
            <p>
              {description}
            </p>
        </div>
      </div> 
    </>


/* 
      <div className='card w-96 bg-gray-900 h-[32rem] hover:scale-[1.02] hover:cursor-pointer transition-all'>
        <figure className='h-[70%] overflow-hidden'>
          <img src={imgSrc} alt='A rubber duck' className='object-cover' />
        </figure>
        <div className='card-body gap-6 text-center'>
          <h2 className='card-title'>
            {duckName === 'HRM The queen'
              ? `I am The queen! Tell me of your struggles, peasant.`
              : `My name is ${duckName}! Do you need my help with debugging?`}
          </h2>
          {duckName !== 'HRM The queen' && (
            <p>
              I am one of {firstName} {lastName}&apos;s trusty confidantes.
            </p>
          )}
        </div>
      </div> */




    );
  };
  
  export default EntryCard;
  

  /* Basically copied from the Duck example from the repo \wd-043\week6\demo-headlessCMS */