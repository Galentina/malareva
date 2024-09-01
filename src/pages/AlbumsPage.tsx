import React from 'react'
import './albumsPage.scss'
import { ALL_ALBUMS1 } from '../constants/AllAlbumsConstant'

export const AlbumsPage = () => {

  return (
    <div className="albums-page">
      <div className="albums-page__albums-set-box">
        { ALL_ALBUMS1?.map(item => {
          return (
            <div key={item.id} className="albums-page__album-box">
              <div className="albums-page__albumtitles">{item.name}</div>
              <a href={item.link}>
                <img src={item.cover} alt={item.name} className="albums-page__cover"/>
              </a>

            </div>
          )
        })}
      </div>
    </div>
  )
}