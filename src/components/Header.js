import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Image, Text } from "../elements";

import SidebarMenu from "../assets/sidebarMenu.svg";
import Search from "../assets/Search.svg";
import Alarm from "../assets/alarm.svg";
import AlarmOn from "../assets/alarmOn.svg";

const Header = () => {
	const navigate = useNavigate();
	return (
		<React.Fragment>
			<Grid between height='80px' margin='0 22px'>
				<Image
					src={SidebarMenu}
					size='28'
					_onClick={() => {
						navigate("/Sidebar");
					}}
				/>
				<Text>EVChat</Text>
				<Grid between>
					<Image
						src={Search}
						size='28'
						_onClick={() => {
							navigate("/Search");
						}}
					/>
					<Image
						src={AlarmOn}
						size='28'
						_onClick={() => {
							navigate("/alarm");
						}}
					/>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Header;
