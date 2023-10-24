import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

// Esto es una opcion de next para evitar que cachee de forma estatica la ruta y que seimpre se ejecute en el servidor
export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code !== null) {
    // usando el codigo que le hemos pasado por ulr
    const supabase = createRouteHandlerClient({ cookies })
    // nos devuelve la sesion del usuario
    await supabase.auth.exchangeCodeForSession(code)
  }

  return NextResponse.redirect(requestUrl.origin)
}
