import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { fakeAuthProvider } from "../../api/api";

export function protectedLoader({ request, params }: LoaderFunctionArgs) {
    // If the user is not logged in and tries to access `/protected`, we redirect
    // them to `/login` with a `from` parameter that allows login to redirect back
    // to this page upon successful authentication
    
    if (!fakeAuthProvider.isAuthenticated) {
      let paramsUrl = new URLSearchParams();
      paramsUrl.set("from", new URL(request.url).pathname);
      return redirect(`/webinar/${params.id}/login?` + params.toString());
    }
    return null;
  }
  
export function ProtectedPage() {
    return <>
      <h1>Video intro aqui!</h1>
      <p>Contador de nuevo aqui</p>
      <button>Agregar al Calendario</button>
    </>;
  }
  