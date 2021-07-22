import { GoogleLogin } from "react-google-login";
import actions from "../api";
import { useContext } from 'react';
import TheContext from '../TheContext'

function Auth(props) {
  
    let { getTheUser } = useContext(TheContext);
  
    const responseGoogle = async (response) => {
    //console.log(response);
    await actions.authenticate(response.profileObj);
    await getTheUser();
  };

  return (
    <div className="Auth">
      <h3>Sign in with Google</h3>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLEID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Auth;
