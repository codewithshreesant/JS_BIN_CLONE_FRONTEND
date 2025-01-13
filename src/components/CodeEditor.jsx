import React, { useState, useRef, useEffect, useContext } from 'react';
import * as monaco from 'monaco-editor';
import { contextApi } from '../Context/NavContext';
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import { CssDropdown, HtmlDropdown, JsDropdown } from './Navbar/HomeNav/Dropdown/Dropdowns';

const CodeEditor = () => {
  const { showCss, setShowCss, showJs, setShowJs, showHtml, setShowHtml } = useContext(contextApi);
  const [htmlCode, setHtmlCode] = useState(`
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>`);
  const iframeRef = useRef(null);
  const htmlEditorRef = useRef(null);
  const cssEditorRef = useRef(null);
  const jsEditorRef = useRef(null);
  const { showLogin, setShowLogin } = useContext(contextApi);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showHtmlDropdown, setShowHtmlDropdown] = useState(false);
  const [showCssDropdown, setShowCssDropdown] = useState(false);
  const [showJsDropdown, setShowJsDropdown] = useState(false);
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const githubAuthUrl = 'https://github.com/login/oauth/authorize';
      const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
      const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URL;
      console.log('Client ID:', clientId);
      console.log('Redirect URI:', redirectUri);
      window.location.href = `${githubAuthUrl}?client_id=${clientId}&redirect_uri=${redirectUri}`;
      const code = new URLSearchParams(window.location.search).get('code');
      const accessToken = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
          code: code,
        }),
      }).then(response => response.json()).then(data => data.access_token);

      localStorage.setItem('githubAccessToken', accessToken);

      setIsLoggedIn(true);
      navigate('/');
    } catch (error) {
      console.error('Error during GitHub login:', error);
    }
  };

  useEffect(() => {
    if (htmlEditorRef.current) {
      const htmlEditor = monaco.editor.create(htmlEditorRef.current, {
        value: htmlCode,
        language: 'html',
      });
      htmlEditor.onDidChangeModelContent(() => {
        setHtmlCode(htmlEditor.getValue());
      });
      htmlEditorRef.current.editorInstance = htmlEditor;
    }

    if (cssEditorRef.current) {
      const cssEditor = monaco.editor.create(cssEditorRef.current, {
        value: cssCode,
        language: 'css',
      });
      cssEditor.onDidChangeModelContent(() => {
        setCssCode(cssEditor.getValue());
      });
      cssEditorRef.current.editorInstance = cssEditor;
    }

    if (jsEditorRef.current) {
      const jsEditor = monaco.editor.create(jsEditorRef.current, {
        value: jsCode,
        language: 'javascript',
      });
      jsEditor.onDidChangeModelContent(() => {
        setJsCode(jsEditor.getValue());
      });
      jsEditorRef.current.editorInstance = jsEditor;
    }

    return () => {
      if (htmlEditorRef.current?.editorInstance) {
        htmlEditorRef.current.editorInstance.dispose();
      }
      if (cssEditorRef.current?.editorInstance) {
        cssEditorRef.current.editorInstance.dispose();
      }
      if (jsEditorRef.current?.editorInstance) {
        jsEditorRef.current.editorInstance.dispose();
      }
    };
  }, [showHtml, showCss, showJs]);

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      const iframeHead = iframeDocument.head;
      const iframeBody = iframeDocument.body;

      iframeHead.innerHTML = '';
      iframeBody.innerHTML = '';

      const style = iframeDocument.createElement('style');
      style.innerHTML = cssCode;
      iframeHead.appendChild(style);

      const script = iframeDocument.createElement('script');
      script.innerHTML = jsCode;
      iframeBody.appendChild(script);

      iframeBody.innerHTML = htmlCode;
    }
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4"> 
      <div className="flex flex-col border p-2 relative"> 
        <button className='h-[6vh] flex items-center cursor-pointer' onClick={() => setShowHtmlDropdown(!showHtmlDropdown)}>
          <span>HTML</span>
          <IoMdArrowDropdown className='h-[2vh] w-[1vw]' />
        </button>
        {showHtmlDropdown && <HtmlDropdown />}
        <div id="htmlEditor" ref={htmlEditorRef} style={{ height: '400px' }} />
      </div>
      {showCss && (
        <div className="flex flex-col border p-2 relative"> 
          <button className='h-[6vh] flex items-center cursor-pointer' onClick={() => setShowCssDropdown(!showCssDropdown)}>
            <span>CSS</span>
            <IoMdArrowDropdown className='h-[2vh] w-[1vw]' />
          </button>
          {showCssDropdown && <CssDropdown />}
          <div id="cssEditor" ref={cssEditorRef} style={{ height: '400px' }} />
        </div>
      )}
      {showJs && (
        <div className="flex flex-col border p-2 relative"> 
          <button className='h-[6vh] flex items-center cursor-pointer' onClick={() => setShowJsDropdown(!showJsDropdown)}>
            <span>JavaScript</span>
            <IoMdArrowDropdown className='h-[2vh] w-[1vw]' />
          </button>
          {showJsDropdown && <JsDropdown />}
          <div id="jsEditor" ref={jsEditorRef} style={{ height: '400px' }} />
        </div>
      )}
      <iframe ref={iframeRef} title="Preview" style={{ width: '100%', height: '400px' }} />
      {showLogin && (
        <div className="absolute right-[1rem] h-[20vh] flex flex-col justify-center items-center bg-white w-[25vw] border-slate-200 border-solid border-[0.1rem] z-10">
          <li>
            <button className="github-button flex items-center gap-2" onClick={handleLogin}>
              <FaGithub />
              <span>Login or Register via GitHub</span>
            </button>
          </li>
          <li>
            Or <span className="underline">
              <Link to='/register'>use your email address</Link>
            </span>
          </li>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
