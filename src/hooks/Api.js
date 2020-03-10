// import { useEffect, useState } from 'react';

// export const useDataApi = resource => {
//   const [data, setData] = useState({ data: [], isFetching: false });
//   const [endpointUrl] = useState(resource);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setData({ ...data, isFetching: true });
//         const response = await axios.get(endpointUrl);
//         setData({
//           data: response.data,
//           isFetching: false,
//         });
//       } catch (e) {
//         setData({ ...data, isFetching: false });
//       }
//     };

//     fetchData();
//   }, []);

//   return [data];
// };
