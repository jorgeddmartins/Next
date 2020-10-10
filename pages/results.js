import Head from 'next/head';
import Header from './header';

import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import $ from 'jquery'


function Results() {
	return (

		<div className="aboutApp">
			
			<Header/>
			<div>
			    <h1>This is the Result page</h1>
		      	<Link href="/">
		        	<a>Go home</a>
		      	</Link>
		    </div>
	    </div>
	);
}

export default Results;