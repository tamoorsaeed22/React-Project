// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { reserveRocket, selectState } from '../app/features/rocketsReducer';

// const ReserveButton = (props) => {
//   // Grab the current state
//   const currentState = useSelector(selectState);
//   const dispatch = useDispatch();
//   // Use desructuring to get values passed by parent Element
//   const { btnText, rocketId, className } = props;

//   // Render this Button on the UI
//   return (
//     <button
//       type="button"
//       onClick={() => dispatch(reserveRocket({ list: currentState.list, id: rocketId }))}
//       className={className}
//     >
//       {btnText}
//     </button>
//   );
// };

// export default ReserveButton;
