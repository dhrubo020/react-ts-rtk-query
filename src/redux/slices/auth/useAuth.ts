import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { setCredentials } from './authSlice';

export const useAuth = () => {
	const dispatch = useDispatch()
    const {token, user, isAuthenticated} = useSelector((state: RootState) => state.auth);
	if(!isAuthenticated){
		const sessionToken = sessionStorage.getItem('token')
		if(sessionToken){
			console.log('checked from session')
			dispatch(setCredentials({token: sessionToken, user:{}}))
			return {token}
		}
	}
	console.log('checked from store')
    return { token, user, isAuthenticated };
};