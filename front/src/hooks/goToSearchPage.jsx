// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from 'react'
// import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

// export default function goToSearch(values) {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [submitPressed, setSubmitPressed] = useState(false)
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const navigate = useNavigate();
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const location = useLocation()
//     // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
//     const [searchParams, setSearchParams] = useSearchParams();
    
//     setSearchParams(values)
//     setSubmitPressed(true)
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEffect(() => {
//         if (submitPressed) {
//             //go to SearchPage
//             navigate(
//                 '/search' + location.search, { replace: true });
//             setSubmitPressed(false);
//         }
//     }, [submitPressed, location.search, navigate]);

 
// }
