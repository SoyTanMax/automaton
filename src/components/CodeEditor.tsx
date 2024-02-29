import { useEffect, useState } from 'react'
import React from 'react'
import { staticTemplate } from '../constants/StaticTemplate';

export const CodeEditor = () => {
    const [comp, setComp] = useState<any>();
    const [code, setCode] = useState(staticTemplate);
    const [snippet, setSnippet] = useState(staticTemplate);

    const handleInputChange = (event) => {
        setCode(event);
        setSnippet(event);
        localStorage.setItem('codeSnippet', event);
    };

    const Comps = comp;

    useEffect(() => {
        if (window) {
            import("@uiw/react-codemirror").then((obj) => {
                if (!comp) {
                    setComp(obj.default);
                }
            });
        }
    }, []);

    return (
        <div className='flex gap-2 items-start w-full'>
            {Comps && (
                <Comps className='text-black overflow-y-auto w-full'
                    value={staticTemplate}
                    height='700px'
                    theme='dark'
                    options={{
                        mode: "js",
                        editable: true,
                    }}
                    onChange={handleInputChange}
                />
            )}
            <iframe 
                className='w-full min-h-[700px]'
                srcDoc={snippet} 
            />
        </div >
    )
}

export default CodeEditor