import Image from 'next/image'
import Link from 'next/link'
import CustomButton  from './CustomButton'

const Navbar = () => {
  return (
    <header>
        <nav className='px-10 py-5 flex justify-between'>
            <Link href='/'>
                <Image src='/logo.svg' alt='logo' className='object-contain' width={118} height={18} />
            </Link>
            <CustomButton title={'Sign In'}  />
        </nav>
    </header>    
)
}

export default Navbar
