import Head from 'next/head';
import Header from './header';

import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import $ from 'jquery';


export default function Home() {
    return (
        <div className="container">
            
            <Header/>

            <main>
                <h1>Hello This is Se7ven Heaven</h1>
                <Link href="/results">
                    <a>See Your Results</a>
                </Link>
            </main>

        </div>
    );
}
