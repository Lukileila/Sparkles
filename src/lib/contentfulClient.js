import { createClient } from 'contentful';

const client = createClient({
  space: "jyz1ikfaasvh",                                       
    /*  import.meta.env.VITE_SPACE_ID, */
  accessToken: "0akjngfXA8oIsxds9zLeodcqUT-VI2FMSAvnvunwAJk"                       
    /* import.meta.env.VITE_ACCESS_TOKEN, */
});

const getEntries = async () => {
  try {
    const getSomeEntries = await client.getEntries({
      content_type: 'pageProduct',
    });

    console.log(getSomeEntries.items);
    return getSomeEntries.items;
  } catch (error) {
    console.error(error.message);
  }
};

export { getEntries };