import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-2xl w-full glass-panel p-10 md:p-14 text-center space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-4">
            <span className="text-4xl">🚀</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-500">
            Flyrank Capstone
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
            A modern, lightning-fast React starter powered by Vite, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-full sm:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-xl shadow-lg shadow-primary-500/30 transition-all active:scale-95 focus:ring-4 focus:ring-primary-500/20"
          >
            Count is {count}
          </button>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 transition-all active:scale-95"
          >
            Learn React
          </a>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-700/50 flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
          <span className="flex items-center gap-2">⚡️ Vite</span>
          <span className="flex items-center gap-2">💎 React</span>
          <span className="flex items-center gap-2">📘 TypeScript</span>
          <span className="flex items-center gap-2">🎨 Tailwind v4</span>
        </div>
      </div>
    </div>
  );
}

export default App;
