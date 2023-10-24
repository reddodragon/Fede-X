import { AuthButtonServer } from '@/components/authButtonServer'

export default function Login () {
  return (
    <section className='grid place-content-center min-h-screen'>
        <h1 className='text-xl font-bold mb-4 '>Inicia sesión en Fede-X</h1>
        <AuthButtonServer/>
    </section>
  )
}
