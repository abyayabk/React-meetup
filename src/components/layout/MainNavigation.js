import { Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Logo</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/Favorites'>Favorites</Link>
                    </li>
                    <li>
                        <Link to='/NewMeetup'>New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;