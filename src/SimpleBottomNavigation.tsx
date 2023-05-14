import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

interface NavigationProps {
	dibujarHojaRandom: () => void;
	dibujarAcordes: () => void;
	dibujarModos: () => void;
	dibujarIntervalos: () => void;
}

export default function SimpleBottomNavigation(
	{ dibujarHojaRandom, dibujarAcordes, dibujarModos, dibujarIntervalos }: NavigationProps) {
	const [value, setValue] = React.useState(0);

	React.useEffect(() => {
		switch (value) {
			case 1: {
				dibujarAcordes();
				break;
			}
			case 2: {
				dibujarModos();
				break;
			}
			case 3: {
				dibujarIntervalos();
				break;
			}
			default: {
				dibujarHojaRandom();
				break;
			}
		}
	}, [value, dibujarAcordes, dibujarHojaRandom, dibujarModos, dibujarIntervalos]);

	return (
		<div className="center">
			<Box sx={{ width: 500 }}>
				<BottomNavigation
					showLabels
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction label="Hoja random" />
					<BottomNavigationAction label="Acordes" />
					<BottomNavigationAction label="Modos" />
					<BottomNavigationAction label="Intervalos y acordes" />
				</BottomNavigation>
			</Box>
		</div>
	);
}