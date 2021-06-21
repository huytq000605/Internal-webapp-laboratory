import React, { useState, useRef, useEffect } from "react";
import { Button, FormControl, InputGroup, Overlay } from "react-bootstrap";

const QueryOptions = ({
	setOptions = (value: string) => {
		// eslint-disable-next-line no-console
		console.log("Please insert props for this component");
		// eslint-disable-next-line no-console
		console.log(value);
	},
	options = "",
}) => {
	const [show, setShow] = useState(false);
	const [input, setInput] = useState(options);
	const target = useRef(null);
	const component = useRef(null);
	const overlay = useRef(null);
	const handleInput = (e: any) => {
		setInput(e.target.value);
	};
	useEffect(() => {
		const onBodyClick = (e: any) => {
			if (
				component.current &&
				(component as any).current.contains(e.target)
			)
				return;
			if (overlay.current && (overlay as any).current.contains(e.target))
				return;
			setShow(false);
		};
		document.body.addEventListener("click", onBodyClick);
		return () => {
			document.body.removeEventListener("click", onBodyClick);
		};
	}, []);
	useEffect(() => {
		if (show) {
			const change = setTimeout(() => {
				setOptions(input);
			}, 1000);
			return () => {
				clearTimeout(change);
			};
		}
	}, [input]);
	return (
		<>
			<div ref={overlay}>
				<Button ref={target} onClick={() => setShow(!show)}>
					Search
				</Button>
				<Overlay
					target={target.current}
					show={show}
					placement="top"
					container={overlay}
				>
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text>Contains</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							as="textarea"
							aria-label="With textarea"
							value={input}
							onChange={handleInput}
						/>
					</InputGroup>
				</Overlay>
			</div>
		</>
	);
};

export default QueryOptions;
