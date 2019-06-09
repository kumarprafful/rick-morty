import React from 'react';
import {IEpisodeProps} from './interfaces'

import {Store} from './store';
import {toggleFavAction} from './actions';

const EpisodesList = React.lazy<any>(()=>import('./episodesList'))

export default function FavPage(){
  const {state, dispatch} = React.useContext(Store);
  const props:IEpisodeProps = {
    episodes: state.favourites,
    store: {state, dispatch},
    toggleFavAction,
    favourites: state.favourites,
  }
  return (
    <div>
      <React.Suspense fallback={<div>Loading</div>}>
        <div className="episode-layout">
          <EpisodesList {...props} />
        </div>
      </React.Suspense>
    </div>
  );
}
