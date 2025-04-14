import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = 'https://67f581bf913986b16fa4d131.mockapi.io/api/v1/';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const useUsers = () => {

    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUsersAPI();
    }, []);

    const getUsersAPI = async () => {
        try {
            
            setLoading(true);
            
            const response = await api.get('/users');
            
            setUsers(response.data);
            
            setError(null);

        } catch (err) {
            setError('Error al cargar los usuarios');
            console.error('Error fetching users:', err);

        } finally {
            setLoading(false);
        }
    };

    const login = (username, password) => {
        
        const user = users.find(user => user.usuario === username && user.password === password);
        
        if (user) {
            setCurrentUser(user);
            setError(null);
            return user;
        } else {
            setError('Credenciales incorrectas');
            return null;
        }
    };

    const logout = () => {
        setCurrentUser(null);
    };

    const isAdmin = () => {
        return currentUser?.admin === true;
    };

    return {
        users,
        currentUser,
        loading,
        error,
        login,
        logout,
        isAdmin
    };
};