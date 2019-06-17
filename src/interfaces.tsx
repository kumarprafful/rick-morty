export type Dispatch = React.dispatch<IAction>

export interface IProps {
  episodes: Array<IEpisode>
  toggleFavAction: FavAction
  favourites: Array<IEpisode>
  store: { state: IState; dispatch: Dispatch }
}

export interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: {medium: string, original:string}
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  url: string

}
export interface IState {
  episodes: Array<IEpisode>
  favourites: Array<IEpisode>
}
export interface IAction {
  type: string
  payload: Array<IEpisode> |any
}
export interface IEpisodeProps {
  episodes: IEpisode[],
  store: {state:IState, dispatch: Dispatch},
  toggleFavAction: (state: IState, dispatch:Dispatch, episode:IEpisode) => IAction,
  favourites: IEpisode[],
}
