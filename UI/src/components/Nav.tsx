import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 20px;
    }

    li {
        text-decoration: none;
    }
    .left {
    margin-right: auto;
    }
`
function Nav() {
  return (
    <header>
        <Navigation>
            <div>
                <ul className="left">
                    <li className="Title">Quote Generator</li>
                </ul>
            </div>
            <div>
                <ul className="right">
                    <Link to="/Meigenlist">お気に入り名言リスト</Link>
                    <li>名言を作る</li>
                </ul>
            </div>
        </Navigation>
    </header>
  )
}

export default Nav