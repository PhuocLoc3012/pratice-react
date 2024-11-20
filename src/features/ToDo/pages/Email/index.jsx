import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function EmailConfirm() {
    const [status, setStatus] = useState('loading'); // 'loading', 'success', 'error'
    const location = useLocation();

    useEffect(() => {
        // Extract query parameters
        const queryParams = new URLSearchParams(location.search);
        const userId = queryParams.get('userId');
        const token = queryParams.get('token');

        if (!userId || !token) {
            setStatus('error');
            return;
        }

        // Call the backend API to confirm email
        axios
            .get(`https://your-api-url.com/api/confirm-email`, {
                params: { userId, token },
            })
            .then(() => {
                setStatus('success');
            })
            .catch(() => {
                setStatus('error');
            });
    }, [location.search]);

    return (
        <div>
            {status === 'loading' && <p>Confirming your email, please wait...</p>}
            {status === 'success' && (
                <p>Your email has been successfully confirmed. You can now log in!</p>
            )}
            {status === 'error' && (
                <p>
                    There was an error confirming your email. The link may be invalid or expired.
                    Please try registering again or contact support.
                </p>
            )}
        </div>
    );
}

export default EmailConfirm;
