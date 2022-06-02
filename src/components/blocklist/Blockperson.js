import React from 'react';

import { Grid, Text, Button } from '../../elements';
const Blockperson = (props) => {
	return (
		<Grid flex margin='8px 26px'>
			<img src={'/images/blockuser.svg'} />
			<Text bold width='160px' margin='auto 11px'>
				user name
			</Text>
			<Button color='#767676'>해제</Button>
		</Grid>
	);
};

export default Blockperson;
