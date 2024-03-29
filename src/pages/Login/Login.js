import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import loginimg from '../../images/login.jpg';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useTitle from '../../components/Hooks/useTitle';


const Login = () => {
    useTitle('login')

    const { signIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                navigate(from, { replace: true })

            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="hero bg-base-200 w-full my-10">
                <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                    <div className="text-center lg:text-left p-5">
                        <img className='3/4' src={loginimg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Submit" />
                            </div>
                        </form>
                        <p className='text-center font-semibold mb-5'>If you have no account? Please <Link className='text-orange-700 font-bold' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;