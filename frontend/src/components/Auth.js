import { GoogleLogin } from "react-google-login";
import actions from "../api";
import { useContext } from "react";
import TheContext from "../TheContext";

function Auth(props) {
  let { getTheUser } = useContext(TheContext);

  const responseGoogle = async (response) => {
    //console.log(response);
    await actions.authenticate(response.profileObj);
    await getTheUser();
    props.history.push("/profile");
  };

  return (
    <div className="log-in">
      <span className="Auth">
        <h3>Please sign in to like and learn about your favorite plants!</h3>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLEID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </span>
    </div>
  );
}

export default Auth;
