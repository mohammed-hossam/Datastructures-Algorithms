// import React, { useCallback } from 'react';

// // Create the Label React component​​​​​​‌​​‌‌​‌‌‌​‌‌​​​​‌​​‌​​‌‌‌ here
// function ListUsers({ users }) {
//   const sortedUsers = useCallback(() => {
//     //i think this will be created(called) at every render as users is a reference type every time, and we should have another optimized solution but for sake of the time i used this

//     return users.sort((a, b) => {
//       if (a.lastName < b.lastName) {
//         return -1;
//       }
//       if (a.lastName > b.lastName) {
//         return 1;
//       }
//       return 0;
//     });
//   }, []);

//   return (
//     <div>
//       <div className="user-count">
//         Users: {users.length > 0 ? users.length : 0}
//       </div>

//       {users.length > 0 && (
//         <ul className="user-list">
//           {sortedUsers().map((user, i) => {
//             return <li key={i}>{user.firstName + ' ' + user.lastName}</li>;
//           })}
//         </ul>
//       )}
//     </div>
//   );
// }

// // Modify this function if you want to change the preview
// // It will not be evaluated as part of the assessment
// export function Preview() {
//   return (
//     <ListUsers
//       users={[
//         { firstName: 'Donald', lastName: 'Knuth' },
//         { firstName: 'Ada', lastName: 'Lovelace' },
//       ]}
//     />
//   );
// }

// // Do not change
// export default ListUsers;
