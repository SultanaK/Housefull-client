import React from 'react';
import './contact.css';
export default function Contact() {
	return (
		<div id='contact_container'>
			<h4 id='contact_text'>Let us know how to improve</h4>
			<iframe
				title='contact-us'
				src='https://docs.google.com/forms/d/e/1FAIpQLSc-uHUPImmRxscZCq_p8aGZW-ewN2Q4O2-Ad1hKPhJTB0ksZw/viewform?embedded=true'
				width='640'
				height='1152'
				frameBorder='0'
				marginHeight='0'
				marginWidth='0'>
				Loading…
			</iframe>
		</div>
	);
}
