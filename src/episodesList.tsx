import React from 'react';
import {IEpisode, IProps} from './interfaces'

export default function EpisodesList(props:IProps):JSX.Element[] {
  const {episodes, toggleFavAction, favourites, store} = props
  const {state, dispatch} = store
  return episodes.map((episode:IEpisode) => {
    return (
      <section key={episode.id}>
        <img src={episode.image?episode.image.medium:''} alt={episode.name} />
        <div>{episode.name}</div>
        <section style={{display:'flex', justifyContent: 'space-between'}}>
          Season: {episode.season} Number: {episode.number}
          <button onClick={()=> toggleFavAction(state, dispatch, episode)}>{favourites.find((fav:IEpisode)=>fav.id === episode.id)?'Unfav': 'Fav'}</button>
        </section>
      </section>
    );
  })
}
