import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Portrait from './assets/Portrait.jpg'
import './styles/App.css';
import { HelmetProvider } from 'react-helmet-async';

import Home from './components/Home';
import Resume from './components/Resume';
import Publications from "./components/Publications";
import GitHub from "./components/GitHub.jsx"
import ProjectHighlights from './components/ProjectHighlights';
import ProjectPage from './components/ProjectPage';
import Contact from './components/Contact';

export default function App() {
    return (
        <HelmetProvider>
            <div>
                <a href="./" rel="noopener noreferrer">
                    <img src={Portrait} className="logo" alt="Portrait" />
                </a>
            </div>
            <h1>Travis Munyer</h1>
            <nav style={{ margin: '2em 0' }}>
                <Link to="/"><button>Home</button></Link>
                <Link to="/resume"><button>Resume</button></Link>
                {/*<Link to="/projects"><button>Project Highlights</button></Link>*/}
                <Link to="/publications"><button>Publications</button></Link>
                <Link to="/github"><button>GitHub</button></Link>
                <Link to="/contact"><button>Contact</button></Link>
            </nav>
            <Routes>
                <Route path="/" element={
                    <div className="card"><Home /></div>
                } />
                <Route path="/resume" element={
                    <div className="card"><Resume /></div>
                } />
                <Route path="/publications" element={
                    <div className="card"><Publications /></div>
                } />
                <Route path="/github" element={
                    <div className="card"><GitHub /></div>
                } />
                <Route path="/projects" element={
                    <div className="card"><ProjectHighlights /></div>
                } />
                <Route path="/projects/:slug" element={
                    <div className="card"><ProjectPage /></div>
                }/>
                <Route path="/contact" element={
                    <div className="card"><Contact /></div>
                } />
            </Routes>
        </HelmetProvider>
    );
}