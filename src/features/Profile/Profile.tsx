import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

const Profile = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <div className="p-6 max-w-sm mx-auto">
            <h1 className="text-xl font-bold mb-2">Profile</h1>
            <p className="mb-4">
                Welcome, <strong>{user?.email}</strong>
            </p>
        </div>
    );
};

export default Profile;
