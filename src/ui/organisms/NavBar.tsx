import { ActiveLink } from "../atoms/ActiveLink"

export const NavBar = () => {  

    return (
        <nav className="flex-1">
            <ul>
               <ActiveLink href={'/'}>{'Home'}</ActiveLink>
               <ActiveLink href={'/products'}>{'Product'}</ActiveLink>
            </ul>
        </nav>
    )

}