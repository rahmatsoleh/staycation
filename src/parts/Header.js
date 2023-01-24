import React from 'react'
import { useLocation } from 'react-router-dom';
import Button from '../elements/Button'
import IconText from'./IconText'

export default function Header(props) {
  const location = useLocation();
  const getNavLinkClass = path => location.pathname === path ? ' active' : '';
  
  return (
    <header className='spacing-sm'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <IconText />
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            <li className={`navbar-item${getNavLinkClass('/')}`}>
              <Button className="navlink" type="link" href="/">Home</Button>
            </li>
            <li className={`navbar-item${getNavLinkClass('/browse-by')}`}>
              <Button className="navlink" type="link" href="/browse-by">Browse By</Button>
            </li>
            <li className={`navbar-item${getNavLinkClass('/stories')}`}>
              <Button className="navlink" type="link" href="/stories">Stories</Button>
            </li>
            <li className={`navbar-item${getNavLinkClass('/agents')}`}>
              <Button className="navlink" type="link" href="/agents">Agents</Button>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    </header>
  )
}
