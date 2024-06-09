import React, { useEffect, useState } from 'react'

interface AlertProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
}

export default function Alert(props: any) {
    const { message, type, onClose } = props;
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAlert(false);
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <>
            {showAlert && (
                <div className={`absolute top-1 left-1 bg-opacity-50 z-50 p-4 mb-4 text-sm 
                text-${type === 'success' ? 'green' : 'red'}-800 rounded-lg 
                bg-${type === 'success' ? 'green' : 'red'}-50 dark:bg-gray-800 
                dark:text-${type === 'success' ? 'green' : 'red'}-400`} role="alert">
                    <span className="font-medium">
                        {type === 'success' ? 'Success! ' : 'Error! '}
                    </span>
                    {message}
                </div>
            )}
        </>
    );
};