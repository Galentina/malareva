import './layout.scss'
import { Divider } from 'antd'
import { AlbumsPage } from '../pages/AlbumsPage'

export const Header = () => {

  return (
    <div className="header">
      <div className="header__title">
        <p>Galina Malareva</p>
        <p className="header__sub-title">Photo galleries</p>
      </div>
      <Divider/>
      <AlbumsPage />
      <Divider/>
    </div>
  )
}