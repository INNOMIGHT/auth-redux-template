import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../Hooks/redux-hooks";
import { login } from "../Slices/authSlice";

export const Login = () => {

    const dispatch = useAppDispatch();

    interface FormValues {
        email: string,
        password: string
    }

    const [values, setValues] = useState<FormValues>({
        email: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value });
        console.log(values);
    };

    const handleSubmit = async (e: any) => {
        if (values.email && values.password) {
            try {
              await dispatch(
                login({
                    email: values.email,
                    password: values.password,
                })
              ).unwrap();
            } catch (e) {
              console.error(e);
            }
          } 
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center mb-4">Login</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={values.email} 
                                        className="form-control" 
                                        id="email" 
                                        placeholder="Enter Email" 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        value={values.password} 
                                        className="form-control" 
                                        id="password" 
                                        placeholder="Enter Password" 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className="mt-3 text-center">
                                Don't have an account? <Link to="/register">Register Here!</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}