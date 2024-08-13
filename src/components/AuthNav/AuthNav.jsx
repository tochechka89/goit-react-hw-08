import css from './AuthNav.module.css'
import { NavLink } from 'react-router-dom'

export default function AuthNav() {
    return (
        <div>
            <NavLink to='/register' className={css.link}>SignIn</NavLink>
            <NavLink to='/login' className={css.link}>LogIn</NavLink>
        </div>
    )
}