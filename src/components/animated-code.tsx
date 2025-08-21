'use client';

import { useState, useEffect } from 'react';

const colors = {
  keyword: 'text-pink-500',
  variable: 'text-sky-400',
  string: 'text-amber-400',
  function: 'text-fuchsia-500',
  boolean: 'text-purple-400',
  comment: 'text-gray-500',
  operator: 'text-gray-400',
  bracket: 'text-gray-400',
  value: 'text-emerald-400'
};

const codeString = (name: string, skills: string[]) => `
<span class="${colors.keyword}">const</span> <span class="${colors.variable}">coder</span> = {
  <span class="${colors.variable}">name</span>: <span class="${colors.string}">'${name}'</span>,
  <span class="${colors.variable}">skills</span>: [${skills.map(s => `<span class="${colors.string}">'${s}'</span>`).join(', ')}],
  <span class="${colors.variable}">hardWorker</span>: <span class="${colors.boolean}">true</span>,
  <span class="${colors.variable}">quickLearner</span>: <span class="${colors.boolean}">true</span>,
  <span class="${colors.variable}">problemSolver</span>: <span class="${colors.boolean}">true</span>,
  <span class="${colors.variable}">hireable</span>: <span class="${colors.keyword}">function</span>() {
    <span class="${colors.keyword}">return</span> (
      <span class="${colors.keyword}">this</span>.<span class="${colors.variable}">hardWorker</span> &&
      <span class="${colors.keyword}">this</span>.<span class="${colors.variable}">problemSolver</span> &&
      <span class="${colors.keyword}">this</span>.<span class="${colors.variable}">skills</span>.<span class="${colors.value}">length</span> >= <span class="${colors.value}">5</span>
    );
  }
};
`;

type AnimatedCodeProps = {
    name: string;
    skills: string[];
}

export function AnimatedCode({ name, skills }: AnimatedCodeProps) {
  const [displayedCode, setDisplayedCode] = useState('');
  
  const fullCode = codeString(name, skills.slice(0, 5));

  useEffect(() => {
    setDisplayedCode('');
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedCode(fullCode.substring(0, i));
      i++;
      if (i > fullCode.length) {
        clearInterval(intervalId);
      }
    }, 20); // Adjust typing speed here

    return () => clearInterval(intervalId);
  }, [fullCode]);

  return (
    <div className="bg-card border border-border rounded-lg shadow-2xl shadow-primary/10 w-full h-full">
      <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-t-lg">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="p-4 text-sm md:text-base font-mono whitespace-pre-wrap">
        <code dangerouslySetInnerHTML={{ __html: displayedCode }} />
        <span className="inline-block w-2 h-4 bg-foreground animate-pulse" />
      </pre>
    </div>
  );
}
