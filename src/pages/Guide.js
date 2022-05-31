import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import styled from 'styled-components';
import { Text, Grid } from '../elements';
import { useNavigate } from 'react-router-dom';

export default function DotsMobileStepper() {
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
	const navigate = useNavigate();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	return (
		<>
			{activeStep === 0 && (
				<>
					<GuidImage src='images/guidfirst.svg' />
					<Grid signupFlex textAlign='center'>
						<Text bbold size='21px'>
							감정과 정보를 공유하는 <br />
							실시간 채팅 플랫폼
						</Text>
					</Grid>
					<Grid signupFlex textAlign='center' margin='26px auto' height='51px'>
						<Text bold>
							장소와 일정을 정하고 <br />
							익명으로 정보와 대화를 나눠 보세요.
						</Text>
					</Grid>
					<PassBtn
						onClick={() => {
							navigate('/');
						}}
					>
						건너뛰기
					</PassBtn>
				</>
			)}

			{activeStep === 1 && (
				<>
					<GuidImage src='images/guidsecond.svg' />
					<Grid signupFlex textAlign='center'>
						<Text bbold size='21px'>
							정해진 시간 안에서 <br />
							쫄깃하게 채팅을 즐겨 보세요.
						</Text>
					</Grid>
					<Grid signupFlex textAlign='center' margin='26px auto' height='51px'>
						<Text bold>
							특정 행사나 경기 스케줄을 기준으로 <br />
							생성되는 채팅방의 특성상, <br />
							약속된 시간이 되면 채팅방이 사라져요!
						</Text>
					</Grid>
					<PassBtn
						onClick={() => {
							navigate('/');
						}}
					>
						건너뛰기
					</PassBtn>
				</>
			)}
			{activeStep === 2 && (
				<>
					<GuidImage src='images/guidlast.svg' />
					<Grid signupFlex textAlign='center'>
						<Text bbold size='21px'>
							이브이챗에 오신 것을 <br />
							화영합니다!
						</Text>
					</Grid>
					<Grid signupFlex textAlign='center' margin='26px auto' height='51px'>
						<Text bold>
							채팅에 참여하고 싶으시다면,
							<br />
							로그인을 진행해 주세요
							<br />
							로그인을 하지 않아도 서비스를 둘러볼 수 있어요.
						</Text>
					</Grid>
					<StartBtn
						onClick={() => {
							navigate('/login');
						}}
					>
						시작하기
					</StartBtn>
				</>
			)}

			<MobileStepper
				variant='dots'
				steps={3}
				position='static'
				activeStep={activeStep}
				sx={{
					maxWidth: 400,
					flexGrow: 1,
					mb: 160,
					color: 'rgb(120, 121, 241)',
					marginBottom: 0,
				}}
				nextButton={
					<Button
						size='small'
						onClick={handleNext}
						disabled={activeStep === 2}
						sx={{ color: 'rgb(120, 121, 241)' }}
					>
						Next
						{theme.direction === 'rtl' ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button
						size='small'
						onClick={handleBack}
						disabled={activeStep === 0}
						sx={{ color: 'rgb(120, 121, 241)' }}
					>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
						Back
					</Button>
				}
			/>
		</>
	);
}

const GuidImage = styled.div`
	width: 292px;
	height: 284px;
	background-image: url('${(props) => props.src}');
	margin: 28px auto;
`;

const StartBtn = styled.div`
	width: 100px;
	height: 32px;
	background: #eb4c3f;
	border-radius: 20px;
	color: white;
	margin: 20px auto;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	display: flex;
`;

const PassBtn = styled.div`
	width: 100px;
	height: 34px;
	border: 1px solid #b9b9b9;
	align-items: center;
	color: #b9b9b9;
	cursor: pointer;
	border-radius: 20px;
	justify-content: center;
	display: flex;
	margin: 20px auto;
`;
