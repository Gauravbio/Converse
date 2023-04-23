import { Inter } from 'next/font/google'
import Button from '@/components/ui/Button'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  return (
    <Button variant='ghost'>
      Hello
    </Button>
  )
}
