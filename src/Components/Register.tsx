import { ChangeEvent, FormEvent, useState } from "react"
import { Link } from "react-router-dom";
import { useAppDispatch } from "../Hooks/redux-hooks";
import { register } from "../Slices/authSlice";

export const Register = () => {

    const dispatch = useAppDispatch();

    interface FormValues {
        name: string;
        email: string;
        password: string;
    }

    const [values, setValues] = useState<FormValues>({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value})
        console.log(values)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await dispatch(register({
                name: values.name,
                email: values.email,
                password: values.password
            })).unwrap();
        } catch (e) {
            console.log(e)
        }
        console.log(values);
        setValues({name: '', password: '', email: ''})
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center mb-4">Register</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={values.name} 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Enter your name" 
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
                                        placeholder="Enter your password" 
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p className="mt-3 text-center">
                                Already have an account? <Link to="/login">Login Here!</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}