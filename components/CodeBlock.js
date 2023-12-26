import React, { useState, useEffect } from 'react';
import styles from '../styles/codeBlock.module.css';

export default function CodeBlock() {
	const [code, setCode] = useState("");
	const [startLine2, setStartLine2] = useState(false);
	const [startLine3, setStartLine3] = useState(false);
	const [startLine4, setStartLine4] = useState(false);
	const [startLine5, setStartLine5] = useState(false);
	const [startLine6, setStartLine6] = useState(false);
	const [showCursor, setShowCursor] = useState(false);
	const [showLoaderCursor, setShowLoaderCursor] = useState(false);
	const newLine =
`
>  `;
	const line1 = `>  Hi! Welcome to my website.`;
	const line2 = `Thank you for visiting!`;
	const line3 = `Website loading...`;
	const line4 = `This website is currently under development.`;
	const line5 = `Please come back later...`;
	const line6 = `Contact: punit.suman1707@gmail.com`;

	function addLine(s, line, x = 0, prevLinesLength = 0, setThisLine = null, setNextLine = null) {
		const interval = setInterval(addChar, 75);
		function addChar() {
			s = s + line[s.length - (newLine.length * x) - prevLinesLength];
			setCode(s);
			if (s.length - (newLine.length * x) === (prevLinesLength + line.length)) {
				stopTimer();
				if (setThisLine) {
					setThisLine(false);
				}
				if (setNextLine) {
					setNextLine(true);
				}
			}
		}
		function stopTimer() {
			clearInterval(interval);
		}
	}

	useEffect(() => {
		setTimeout(() => {
			setShowCursor(true);
		}, 400);
		var s = "";
		setTimeout(() => {
			setShowLoaderCursor(false);
			addLine(s, line1, 0, 0, null, setStartLine2);
		}, 3000);
	}, []);

	useEffect(() => {
		if (startLine2) {
			var s = code;
			setTimeout(() => {
				s = s + newLine;
				setCode(s);
				addLine(s, line2, 1, line1.length, setStartLine2, setStartLine3);
			}, 1000);
		}
	}, [startLine2]);

	useEffect(() => {
		if (startLine3) {
			var s = code;
			setTimeout(() => {
				s = s + newLine;
				setCode(s);
				setShowLoaderCursor(true);
				setTimeout(() => {
					setShowLoaderCursor(false);
					s = s + newLine;
					setCode(s);
					addLine(s, line3, 3, (line1 + line2).length, setStartLine3, setStartLine4);
				}, 1000);
			}, 1000);
		}
	}, [startLine3]);

	useEffect(() => {
		if (startLine4) {
			var s = code;
			setTimeout(() => {
				s = s + newLine;
				setCode(s);
				setShowLoaderCursor(true);
				setTimeout(() => {
					setShowLoaderCursor(false);
					s = s + newLine;
					setCode(s);
					// eslint-disable-next-line @stylistic/js/max-len
					addLine(s, line4, 5, (line1 + line2 + line3).length, setStartLine4, setStartLine5);
				}, 5000);
			}, 1000);
		}
	}, [startLine4]);

	useEffect(() => {
		if (startLine5) {
			var s = code;
			setTimeout(() => {
				s = s + newLine;
				setCode(s);
				// eslint-disable-next-line @stylistic/js/max-len
				addLine(s, line5, 6, (line1 + line2 + line3 + line4).length, setStartLine5, setStartLine6);
			}, 1000);
		}
	}, [startLine5]);

	useEffect(() => {
		if (startLine6) {
			var s = code;
			setTimeout(() => {
				s = s + newLine;
				setCode(s);
				// eslint-disable-next-line @stylistic/js/max-len
				addLine(s, line6, 7, (line1 + line2 + line3 + line4 + line5).length, setStartLine6, null);
			}, 1000);
		}
	}, [startLine6]);

	return (
		<div className={styles.root}>
			<div className={styles.codeContainer}>
				{code}
				{showCursor ?
					(showLoaderCursor ?
						<span className={styles.loaderCursor}>|</span>
						: <span className={styles.cursorBlink}>{'_'}</span>
					) : <></>}
			</div>
		</div>
	);
}