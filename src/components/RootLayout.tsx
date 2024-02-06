import type { Metadata } from 'next'
import TheNavbar from './TheNavbar'
import { Kanit } from 'next/font/google'
import TheFooter from './TheFooter';

const kanit = Kanit({
  weight: '400',
  subsets: ['latin'],
})

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`${kanit.className} `}>
      <TheNavbar />
      {children}
      <TheFooter/>
    </div>
  )
}
export default RootLayout;