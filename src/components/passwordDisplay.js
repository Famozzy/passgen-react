import ClipboardIcon from './icons/clipboard';

export default function PasswordDisplay({ password }) {
  const copyToClipboardHandler = () => navigator.clipboard.writeText(password);

  return (
    <div className="flex shadow-md text-lg rounded-lg overflow-hidden">
      <input
        className="w-11/12 p-5 font-mono text-2xl outline-none dark:bg-slate-800"
        type="text"
        readOnly={true}
        value={password}
      />
      <button
        onClick={copyToClipboardHandler}
        className="bg-white px-6 text-slate-400 active:text-slate-500 outline-none dark:bg-slate-800"
      >
        <ClipboardIcon />
      </button>
    </div>
  );
}
