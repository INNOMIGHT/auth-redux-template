# Getting Started

For detailed info you can visit https://vaibhavshrivastava.com/auth-redux-typescript-template-get-typescript-react-app-setup-with-login-and-registration-system/

Clone the repository using the git clone command.
git clone https://github.com/INNOMIGHT/auth-redux-template.git


### `File Structure`


### `Api Folder`
Api folder has an axios instance for you to use.

baseURL: BACKEND_BASE_URL: This option sets the base URL for all requests made with this Axios instance to the value of BACKEND_BASE_URL. This means that all requests made using axiosInstance will be prefixed with this URL. You can change the baseURL form the constants.ts file.
withCredentials: true: This option enables sending credentials (such as cookies or authorization headers) with the requests. This is useful for making requests to endpoints that require authentication or sessions.

### `Components Folder`
Components folder has your Login, Register and Home components ready to use.
You get ready to use Login and Registration forms designed in a simple way so you can change the look if you want easily and with state management for the forms.

### `Hooks Folder`
Hooks folder contain aliases for useDispatch and useSelector with type definitions so you can use it directly anywhere.
These aliases provide type safety by specifying the types of the dispatch function (AppDispatch) and the Redux state (RootState), making it easier to use Redux hooks in your components without needing to redefine their types each time.

### `Layouts Folder`
This folder contains the DefaultLayout and ProtectedLayout for your default and protected routes.

DefaultLayout:
Renders the child components (specified by the Outlet component from React Router) if the user is not authenticated.
Uses the useAppSelector hook to access the Redux state and check if basicUserInfo is available.
If basicUserInfo is present (indicating that the user is authenticated), it redirects the user to the homepage (/) using Navigate.
If basicUserInfo is not present, it renders the child components as usual.
ProtectedLayout:
Renders the child components if the user is authenticated.
Uses the useAppSelector hook to access the Redux state and check if basicUserInfo is available.
If basicUserInfo is not present (indicating that the user is not authenticated), it redirects the user to the login page (/login) using Navigate.
If basicUserInfo is present, it renders the child components as usual.
Both layouts abstract away the logic for checking the authentication status and handling redirects, allowing for cleaner and more maintainable code by centralizing this logic in reusable layout components.

### `Slices Folder`
This folder contain authSlice and userSlice. Slices are included in redux toolkit.
A slice is the portion of Redux code that relates to a specific set of data and actions within the store ‘s state.
authSlice manages authentication-related state and asynchronous actions for logging in, registering, logging out, and fetching user profile data.
You can edit it according to your usage.

### `Store File store.ts`
Here as usual the store is configured and reducers are defined.
RootState: Represents the overall state of the Redux store. It’s derived using ReturnType<typeof store.getState>, which infers the state type from the store’s getState function.
AppDispatch: Represents the type of the Redux store’s dispatch function. It’s inferred using typeof store.dispatch, which captures the type of the store’s dispatch function.

### `What this repository does for you?`
You do not need to create the login and registration again and again for your new projects. Just start from here with login and registration already embedded in your react application. This just makes it faster for you to begin with your project building.

By using the above repository, you start your project with a well defined login and registration system which you do not have to code again.

