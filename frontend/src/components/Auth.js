import { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import actions from '../api'
import TheContext from '../TheContext'


function Auth(props) {

    let { getTheUser } = useContext(TheContext)
    const responseGoogle = async (response) => {
        console.log(response)
        await actions.authenticate(response.profileObj)
        await getTheUser()
    }

    // for log out
    let { user, setUser } = useContext(TheContext)

    const logOut = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
        <div>
            <h3>Auth</h3>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLEID}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

<div>
    
    <button onClick={logOut}>Log out</button>
</div>

        </div>
    );
}

export default Auth;