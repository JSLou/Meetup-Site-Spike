// Old THEME-UI Helper will build back out

// import React from 'react';
// import { useColorMode } from 'theme-ui';
// import { Button } from '@components';

// export default ({ sx }) => {
//   const [colorMode, setColorMode] = useColorMode();

//   const nextMode = currentMode => {
//     if (currentMode == 'light') return 'dark';
//     if (currentMode == 'dark') return 'deep';
//     if (currentMode == 'deep') return 'light';

//     return 'light';
//   };

//   return (
//     <Button
//       sx={sx}
//       onClick={e => {
//         setColorMode(nextMode(colorMode));
//       }}>
//       Toggle to {nextMode(colorMode)} Theme
//     </Button>
//   );
// };
