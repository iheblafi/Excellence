import React, { useState } from 'react';
import Footer from '../../components/Footer';
import { NavLink, useNavigate } from 'react-router-dom';
import Languages from '../../utils/Languages';
import { useDispatch } from 'react-redux';
import { useLoginMutation, useRegisterMutation } from '../../slices/userApiSlice';
import { setCredentials } from '../../slices/authSlice';

function Login() {
	const [isSignIn, setIsSignIn] = useState(true);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [alert, setAlert] = useState({ show: false, type: '', message: '' });
	const navigate = useNavigate();
	const [countryCode, setCountryCode] = useState();

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};
	const toggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	const dispatch = useDispatch();
	const [login] = useLoginMutation();
	const [register] = useRegisterMutation();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const user = await login({ email, password }).unwrap();
			dispatch(setCredentials(user));
			setAlert({ show: true, type: 'success', message: 'Login successful!' });

			setTimeout(() => {
				navigate("/");
				window.location.reload();
			}, 2000);

		} catch (err) {
			setAlert({ show: true, type: 'danger', message: err?.data?.message || "Login failed." });
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setAlert({ show: true, type: 'danger', message: "Passwords do not match!" });
			return;
		}
		try {
			const user = await register({ name, email, password, phoneNumber }).unwrap();
			dispatch(setCredentials(user));
			setAlert({ show: true, type: 'success', message: 'Registration successful! Redirecting to role selection.' });
			setTimeout(() => {
				navigate("/");
				window.location.reload();
			}, 2000);



		} catch (err) {
			setAlert({ show: true, type: 'danger', message: err?.data?.message || "Registration failed." });
		}

	};

	const toggleForm = () => setIsSignIn(!isSignIn);

	return (
		<div className="container-xxl bg-white p-0">
			<div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
				<div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>

			<div className="container-xxl position-relative p-0">
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-4 py-3 py-lg-0">
					<NavLink to="/" className="navbar-brand p-2">
						<h1 className="text-primary m-0">
							<i className="fa fa-plane me-1"></i>Excellence Airport
						</h1>
					</NavLink>
					<div className="d-none d-lg-block px-2">
						<Languages />
					</div>
				</nav>

				<div className="container-xxl py-5 bg-dark hero-header mb-5">
					<div className="container my-5 py-5">
						<div className="row justify-content-center align-items-center">
							<div className="col-md-6 bg-dark d-flex align-items-center">
								<div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
									<h5 className="section-title ff-secondary text-start text-primary fw-normal">
										{isSignIn ? 'Sign In' : 'Sign Up'}
									</h5>
									<h1 className="text-white mb-4">
										{isSignIn ? 'Welcome Back, Traveler' : 'Create an Account, Traveler'}
									</h1>
									{alert.show && (
										<div className={`alert alert-${alert.type}`} role="alert">
											{alert.message}
										</div>
									)}
									<form className="row g-3" onSubmit={isSignIn ? handleLogin : handleRegister}>
										{!isSignIn && (
											<div className="form-floating col-6 mb-3">
												<input
													type="text"
													className="form-control"
													id="name"
													placeholder="Your Name"
													value={name}
													onChange={(e) => setName(e.target.value)}
													required
												/>
												<label htmlFor="name">Your Name</label>
											</div>
										)}
										<div className="form-floating col-6 mb-3">
											<input
												type="email"
												className="form-control"
												id="email"
												placeholder="Your Email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
											<label htmlFor="email">Your Email</label>
										</div>
										<div className="form-floating  col-6 ">
											<input
												type={showPassword ? "text" : "password"}
												className="form-control"
												id="password"
												placeholder="Password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
												required
											/>
											<span className="input-group-text" onClick={togglePasswordVisibility} style={{ border: '1px solid transparent' }}>
												<i className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"} aria-hidden="true" style={{ cursor: 'pointer', position: 'absolute', right: '11px', top: '22px' }}></i>
											</span>
											<label htmlFor="password">Password</label>
											{/* <div className="input-group">
												<input
													type={showPassword ? "text" : "password"} // Toggle input type
													className="form-control"
													id="password"
													placeholder="Password"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
													required
												/>
												<span
													className="input-group-text"
													onClick={togglePasswordVisibility}
													style={{ cursor: 'pointer' }}
												>
													<i className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"} aria-hidden="true"></i>
												</span>
												<label htmlFor="password">Password</label>
											</div> */}
										</div>
										{!isSignIn && (
											<div className="form-floating  col-6">
												<input
													type={showConfirmPassword ? "text" : "password"}
													className="form-control"
													id="confirmPassword"
													placeholder="Confirm Password"
													value={confirmPassword}
													onChange={(e) => setConfirmPassword(e.target.value)}
													required
												/>
												<span
													className="input-group-text"
													onClick={toggleConfirmPasswordVisibility}
													style={{ border: '1px solid transparent' }}>
													<i className={showConfirmPassword ? "fas fa-eye" : "fas fa-eye-slash"} aria-hidden="true" style={{ cursor: 'pointer', position: 'absolute', right: '11px', top: '22px' }}></i>
												</span>
												<label htmlFor="confirmPassword">Confirm Password</label>
											</div>
										)}
										{!isSignIn && (
											<div className='form-floating mb-3 col-md-4 '>
												<select
													className="form-select"
													id="countryCode"
													//S	style={{ marginRight: '10px' }}
													required
													onChange={(e) => setCountryCode(e.target.value)}
												>
													<option value="" disabled selected>
														Select
													</option>

													<option value="+216">+216 (Tunisia)</option>
													<option value="+33">+33 (France)</option>
													<option value="+1">+1 (USA)</option>
													<option value="+44">+44 (UK)</option>
													<option value="+91">+91 (India)</option>
													{/* Add more country codes as needed */}
												</select>
												<label htmlFor="countryCode" className="form-label">
													Code
												</label>
											</div>
										)}

										{!isSignIn && (

											<div className="form-floating mb-3 col-md-8">
												<input
													type="tel"
													className="form-control"
													id="phoneNumber"
													placeholder="Phone Number"
													value={phoneNumber}
													onChange={(e) => setPhoneNumber(e.target.value)}
													required
												/>
												<label htmlFor="phoneNumber">Phone Number</label>
											</div>
										)}
										<div className="d-flex justify-content-center gap-2">
											<button className="btn btn-primary py-3 px-4" type="submit">
												{isSignIn ? 'Sign In' : 'Sign Up'}
											</button>
											<button
												type="button"
												className="btn btn-secondary py-3 px-4"
												onClick={() => navigate('/')}
											>
												Cancel
											</button>
										</div>
									</form>
									<div className="mt-3 text-start">
										<small>
											{isSignIn
												? 'If you do not have an account, '
												: 'If you already have an account, '}
											<span
												className="text-primary"
												style={{ cursor: 'pointer' }}
												onClick={() => setIsSignIn(!isSignIn)}
											>
												{isSignIn ? 'Sign Up' : 'Sign In'}
											</span>
											.
										</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
}

export default Login;
