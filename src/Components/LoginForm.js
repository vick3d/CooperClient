import React from 'react';
import { Form, Button, Header } from 'semantic-ui-react';

const LoginForm = (props) => {
	return (
		<>
		<Form type="large">
			<Header as="h1"
			>
				Login
			</Header>
			<Form.Input
				fluid
				id="email"
				placeholder="Email"
				onChange={props.inputChangeHandler}
			/>

			<Form.Input
				fluid
				icon='lock'
				iconPosition='left'
				placeholder='Password'
				type='password'
				id="password"
				onChange={props.inputChangeHandler}
			/>

			<Button
				id="submit"
				color="green"
				onClick={(e) => props.loginHandler(e)}
			>
				Submit
			</Button>
		</Form>
		</>
		)
	}

	export default LoginForm;