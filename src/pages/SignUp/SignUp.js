import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../components/Hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import signupimg from '../../images/photography.jpg'


const SignUp = () => {
    useTitle('signUp');
    const { createUser, signInGoogle, handleUpdateProfile } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const PhotoURl = form.PhotoURl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserProfile(name, PhotoURl);
            })
            .catch(err => console.error(err))
    };

    const updateUserProfile = (name, PhotoURl) => {
        const profile = { displayName: name, photoURL: PhotoURl }
        handleUpdateProfile(profile)
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignup = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="hero bg-base-200 w-full my-10">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='3/4' src={signupimg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto">
                    <h1 className="text-5xl font-bold text-center">SignUp now!</h1>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URl</span>
                            </label>
                            <input type="text" name='PhotoURl' placeholder="Your PhotoURl" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Submit" />
                        </div>
                    </form>
                    <input onClick={handleGoogleSignup} className="btn btn-primary w-3/4 mx-auto" type="submit" value="SignUp with Google" />
                    <p className='text-center font-semibold mb-5'>Allready have an account? <Link className='text-orange-700 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;