import { ActiveLink } from "../atoms/ActiveLink"

export const NavBar = () => {  

    return (
        <nav className="flex-1 p-5">
            <ul className="flex justify-center ">
               <ActiveLink href={'/'}>{'Home'}</ActiveLink>
               <ActiveLink href={'/products'}>{'Product'}</ActiveLink>
            </ul>
        </nav>
    )
}