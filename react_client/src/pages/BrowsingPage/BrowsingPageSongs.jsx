import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import GridLayout from '../../layouts/GridLayout/GridLayout';
import SongCard from '../../components/Cards/SongCard';
import spookifyAPI from '../../api/spookify';

const BrowsingPageSongs = () => {
  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      const { data } = await spookifyAPI.get('/songs');
      //TODO error handler
      setSongsData(data);
    };

    getSongs();
  }, []);

  return (
    <>
      <GridLayout>
        {songsData.map((data, index) => {
          return (
            <Grid key={data.id} item xs={12} lg={3}>
              <SongCard
                data={data}
                backgroundColor={index % 2 === 1 ? '#ff5050' : '#8D99AE'}
              />
            </Grid>
          );
        })}
      </GridLayout>
    </>
  );
};

export default BrowsingPageSongs;
