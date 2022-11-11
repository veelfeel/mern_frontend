// import React from 'react';

// export const InputMask = () => {
//   const [card, setCard] = React.useState<string>('');
//   const inputCard = React.useRef<HTMLInputElement>(null);

//   const handleChange = () => {
//     if (inputCard.current) {
//       const cardValue = Number(inputCard.current.value);

//       let formatter = new Intl.NumberFormat('ru', {
//         maximumSignificantDigits: 3,
//       });

//       const form = formatter.format(cardValue);
//       setCard(String(form));
//     }
//   };

//   React.useEffect(() => {
//     handleChange();
//   }, [card]);

//   return (
//     <>
//       <input type="text" ref={inputCard} value={card} onChange={handleChange} />
//     </>
//   );
// };
