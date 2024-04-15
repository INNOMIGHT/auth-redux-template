# Getting Started

Clone the repository using the git clone command.
git clone https://github.com/INNOMIGHT/auth-redux-template.git

## Available Scripts


### `File Structure`
You get src and public folder. Bootstrap is embedded using cdn. 
You get API folder where axiosInstance is created for you. (withCredentials is set to true to automatically send cookies)
You get Components folder where Home, Login and Registration pages are provided.
You get Hooks folder where you can find useDispatch and useSelect aliases with type definitions so you can use it directly everytime.
You get the Layouts folder where you can find the default routes layout and protected routes layout which is used in routing of default and protected routes in App.tsx.
You get the Slices folder where you have the authSlice and userSlice. authSlice is responsible for handling authentication login, register etc.
You have your store.ts where your redux store is defined.
In App.tsx you have your routes.

So you get the project setup in which you want to use login and registration. You can modify your routes or anything you want accordingly.


### `How to use?`

Wherever you want to use actions you can dispatch actions in this way - 
const dispatch = useAppDispatch(); 
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

Directly just call dispatch(actionName).unwrap() and you are good to go.



### `What this repository does for you?`
You do not need to create the login and registration again and again for your new projects. Just start from here with login and registration already embedded in your react application. This just makes it faster for you to begin with your project building.



