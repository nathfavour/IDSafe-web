import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Switch } from '@mui/material';
import Link from 'next/link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import 

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#3e2723',
    },
  },
});


interface DrawerPageProps {
  drawerOpen: boolean;
  toggleDrawer: () => void;
  handleNavigation: (index: number, path: string) => void;
}

// const handleNavigation = (_index: any, _path: any) => {
//   // Your navigation logic here
//   // For example, you can use the router to navigate to the path
//   // router.push(path);
//   toggleDrawer(); // Close the drawer after navigation
// };

// const DrawerPage = ({ drawerOpen, toggleDrawer, handleNavigation }) => {

const DrawerPage: React.FC<DrawerPageProps> = ({ drawerOpen, toggleDrawer, handleNavigation }) => {

  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            transition: 'transform 0.5s',
            transform: drawerOpen ? 'rotateY(0deg)' : 'rotateY(-90deg)',
          },
        }}
      >
        <List>
          <ListItem>
            <Switch checked={darkMode} onChange={handleThemeChange} />
            <ListItemText primary="Dark Mode" />
          </ListItem>
          {/* <ListItem component={Link} href="/" onClick={() => handleNavigation(0, '/')}>
            <ListItemText primary="Connect" />
          </ListItem> */}
          <ListItem component={Link} href="/info" onClick={() => handleNavigation(1, '/info')}>
            <ListItemText primary="Info" />
          </ListItem>
          <ListItem component={Link} href="/wallet" onClick={() => handleNavigation(2, '/wallet')}>
            <ListItemText primary="Wallet" />
          </ListItem>
          <ListItem component={Link} href="/settings" onClick={() => handleNavigation(3, '/settings')}>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem component={Link} href="/crosschaindaohub" onClick={() => handleNavigation(3, '/crosschaindaohub')}>
            <ListItemText primary="CrossChainDaoHub" />
          </ListItem>
        </List>
      </Drawer>
    </ThemeProvider>
  );
};

export default DrawerPage;


































// function toggleDrawer() {
//   throw new Error('Function not implemented.');
// }




// import React, { useState } from 'react';
// import { Drawer, List, ListItem, ListItemText, Switch } from '@mui/material';
// import Link from 'next/link';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import router from 'next/router';

// const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     background: {
//       default: '#ffffff',
//     },
//   },
// });

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     background: {
//       default: '#3e2723',
//     },
//   },
// });

// const [drawerOpen, setDrawerOpen] = useState(false);
// //   const router = useRouter();


// const handleNavigation = (index: number, path: string) => {
//     router.push(path);
//   };

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };


// const DrawerPage = ({ drawerOpen, toggleDrawer, handleNavigation }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   const handleThemeChange = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={toggleDrawer}
//         PaperProps={{
//           sx: {
//             transition: 'transform 0.5s',
//             transform: drawerOpen ? 'rotateY(0deg)' : 'rotateY(-90deg)',
//           },
//         }}
//       >
//         <List>
//           <ListItem>
//             <Switch checked={darkMode} onChange={handleThemeChange} />
//             <ListItemText primary="Dark Mode" />
//           </ListItem>
//           <ListItem component={Link} href="/" onClick={() => handleNavigation(0, '/')}>
//             <ListItemText primary="Connect" />
//           </ListItem>
//           <ListItem component={Link} href="/info" onClick={() => handleNavigation(1, '/info')}>
//             <ListItemText primary="Info" />
//           </ListItem>
//           <ListItem component={Link} href="/wallet" onClick={() => handleNavigation(2, '/wallet')}>
//             <ListItemText primary="Wallet" />
//           </ListItem>
//           <ListItem component={Link} href="/settings" onClick={() => handleNavigation(3, '/settings')}>
//             <ListItemText primary="Settings" />
//           </ListItem>
//           <ListItem component={Link} href="/settings" onClick={() => handleNavigation(3, '/settings')}>
//             <ListItemText primary="CrossChainDaoHub" />
//           </ListItem>
//         </List>
//       </Drawer>
//     </ThemeProvider>
//   );
// };

// export default DrawerPage;