import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Sheikh Mohin - Backend Developer (NodeJS)</title>
                <meta name="description" content="Professional portfolio of Sheikh Mohin, Backend Developer specializing in NodeJS, TypeScript, and cloud technologies." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}