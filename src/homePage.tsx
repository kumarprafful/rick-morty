import React from 'react';
import {Store} from './store';

import {IEpisodeProps} from './interfaces'
import {fetchDataAction, toggleFavAction} from './actions';
const EpisodesList = React.lazy<any>(()=>import('./episodesList'))

export default function HomePage(){
  const {state, dispatch} = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch)
  })


  const props:IEpisodeProps = {
    episodes:state.episodes,
    store: {state, dispatch},
    toggleFavAction,
    favourites: state.favourites,

  }
  return (
    <div>
    <React.Suspense fallback={<div>Loading</div>}>
    <section className="episode-layout">
      <EpisodesList {...props} />
    </section>
    </React.Suspense>
    </div>
  );
}
