import Link from 'next/link'
 
export const runtime = 'edge';

export default function NotFound() {
  return (
    <main className='w-full justify-center text-center grid gap-4 pt-8'>
      <h1 className="h1">404 - Page not found</h1>

      <div>
        <p>This page does not exist</p>
        <Link href="/" className='link'>Return Home</Link>
      </div>
    </main>
  )
}