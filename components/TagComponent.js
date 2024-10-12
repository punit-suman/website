export const TagComponent = ({ text = '', percent = 0 }) => {
	return (
		<span style={{display: 'inline-block', fontSize: '14px', margin: '10px', backgroundColor: 'rgb(211, 211, 211)', borderRadius: '5px'}}>
			<div style={{display: 'inline-block', padding: '5px 15px', margin: '0', minWidth: '0px', textAlign: 'center'}}>
				{text}
			</div>
			{percent > 0 &&
			<div style={{height: '4px', backgroundColor: '#50C878', borderRadius: `0 0 ${percent == 100 ? '5px' : '0'} 5px`, width: `${percent}%`}}></div>}
		</span>
	);
};