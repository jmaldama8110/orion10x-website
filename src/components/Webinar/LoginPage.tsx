import { Form, LoaderFunctionArgs, redirect, useActionData, useLocation, useNavigation, useRouteLoaderData } from "react-router-dom";
import { fakeAuthProvider } from "../../api/api";
import iconBenefits from '../../../src/assets/icons/sm/12.svg';
import iconFaces from '../../../src/assets/faces/2.jpg';


export async function loginAction({ request }: LoaderFunctionArgs) {
  let formData = await request.formData();
  let firstName = formData.get("first_name") as string;
  let email = formData.get("email") as string | null;

  // Validate our form inputs and return validation errors via useActionData()
  if (!email || !firstName) {
    return {
      error: "Debe proporcionar Nombre y Correo para continuar...",
    };
  }

  // Sign in and redirect to the proper destination if successful.
  try {
    await fakeAuthProvider.signin(firstName);
  } catch (error) {
    // Unused as of now but this is how you would handle invalid
    // username/password combinations - just like validating the inputs
    // above
    return {
      error: "Intento de sesion no valido",
    };
  }

  let redirectTo = formData.get("redirectTo") as string | null;

  return redirect(redirectTo || "/");
}

export async function loginLoader() {
  if (fakeAuthProvider.isAuthenticated) {
    console.log("login loader ")
    return redirect("/");
  }
  return null;
}


export const LoginPage = () => {

  let { webinarElement } = useRouteLoaderData("webinar-element") as { webinarElement: any };
  let location = useLocation();
  let params = new URLSearchParams(location.search);
  let from = params.get("from") || `/webinar/${webinarElement.id}/protected`;

  let navigation = useNavigation();
  let isLoggingIn = navigation.formData?.get("first_name") != null;

  let actionData = useActionData() as { error: string } | undefined;

  return (

    <Form id="formEvent" method="post" className="mil-event-form" replace>
      <h4 className="mil-mb-60 mil-text-center">Reserva tu Lugar!</h4>
      <input type="hidden" name="redirectTo" value={from} />
      <div className="mil-input-frame mil-dark-input mil-mb-30">
        <label className="mil-h6 mil-dark"><span>Nombre</span><span className="mil-accent"></span></label>
        <input type="text" name="first_name" required placeholder="John"/>
      </div>

      <div className="mil-input-frame mil-dark-input mil-mb-30">
        <label className="mil-h6 mil-dark"><span>Correo electrónico</span><span className="mil-accent"></span></label>
        <input type="email" name="email" required placeholder="email@mydomain.com"/>
      </div>

      <div className="mil-checbox-frame mil-dark-input mil-mb-30">
        <input className="mil-checkbox" id="checkbox-1" type="checkbox" name="agree" value="1" required/>
          <label htmlFor="checkbox-1" className="mil-text-sm">I agree to receive other communications from <span className="mil-accent">Orion Digital.</span></label>
      </div>

         <button type="submit" disabled={isLoggingIn} className="mil-button mil-border mil-fw">
           <span>{isLoggingIn ? "Iniciando..." : "Iniciar Ahora!"}</span>
       </button>
       {actionData && actionData.error ? (
         <p style={{ color: "red" }}>{actionData.error}</p>
       ) : null}

    </Form>



  );
}