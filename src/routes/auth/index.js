import SignIn from 'views/auth/SignIn';

const contextPath = '/auth/';

const authRoutes = [
    {
        path: contextPath + 'signIn',
        name: 'Sign In',
        component: SignIn
    }
]

export default authRoutes;