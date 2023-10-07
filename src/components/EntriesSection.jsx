import EntryCard from './EntryCard';

const EntriesSection = ({ allEntries }) => {
  return (
    <section id='entriesSection'>
      <h2 className='text-3xl text-center my-16 mb-10'>
        <span role='img' aria-label='two entries in a row'>
          {' '}
          ⬇️⬇️{' '}
        </span>
        Our Entries
        <span role='img' aria-label='two ducks in a row'>
          {' '}
          ⬇️⬇️{' '}
        </span>
      </h2>
      <div id='entryCards' className='flex flex-wrap gap-4 justify-center p-10'>
        {allEntries.map(({ fields }) => (
          <EntryCard key={crypto.randomUUID()} {...fields} />
        ))}
      </div>
    </section>
  );
};

export default EntriesSection;


/* Basically copied from the Duck example from the repo \wd-043\week6\demo-headlessCMS */