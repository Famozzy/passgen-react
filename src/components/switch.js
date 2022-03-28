export default function Switch({ name, id, handler }) {
  return (
    <div className="relative block w-11">
      <input
        type="checkbox"
        onChange={handler}
        name={name}
        id={id}
        className="block absolute w-5 h-5 m-0.5 shadow-sm bg-white appearance-none rounded-full checked:right-0 outline-none cursor-pointer peer"
      />
      <label
        htmlFor={id}
        className="block h-6 rounded-full shadow-inner bg-gray-300 cursor-pointer peer-checked:bg-purple-500 dark:bg-slate-500"
      ></label>
    </div>
  );
}
