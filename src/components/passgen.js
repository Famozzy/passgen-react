import { useState } from 'react';
import Switch from './switch';
import PasswordDisplay from './passwordDisplay';

export default function PassGen() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [option, setOption] = useState({
    uppercase: false,
    number: false,
    symbol: false,
  });

  const generateRandomPassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = lowercase.toUpperCase();
    const number = '0123456789';
    const symbol = '!@#$%^&*?_';

    const availableCharacters = [...lowercase];
    option.uppercase && availableCharacters.push(...uppercase);
    option.number && availableCharacters.push(...number);
    option.symbol && availableCharacters.push(...symbol);

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * availableCharacters.length
      );
      const character = availableCharacters[randomIndex];
      password += character;
    }

    setPassword(password);
  };

  const switchHandler = e => {
    const { name, checked } = e.target;
    setOption({ ...option, [name]: checked });
  };

  return (
    <main className="max-w-lg mx-auto min-h-screen px-3 flex flex-col justify-center gap-y-4">
      <h1 className="text-4xl font-medium ">Generate Your Password</h1>
      <PasswordDisplay password={password} />

      <hr className="my-3 dark:border-gray-700" />

      <div className="bg-white shadow p-4 rounded-md dark:bg-slate-800">
        <h1>{length} length password</h1>
        <input
          className="w-full appearance-none h-2 bg-purple-200 accent-purple-500 rounded-full outline-none"
          type="range"
          name="range"
          id="range"
          onChange={e => setLength(e.target.value)}
          value={length}
          min={8}
          max={24}
        />
      </div>

      <div className="bg-white shadow p-4 flex justify-between rounded-md dark:bg-slate-800">
        <label htmlFor="uppercaseCheckbox">Include uppercase Character</label>
        <Switch
          name="uppercase"
          id="uppercaseCheckbox"
          handler={switchHandler}
        />
      </div>

      <div className="bg-white shadow p-4 flex justify-between rounded-md dark:bg-slate-800">
        <label htmlFor="numberCheckbox">Include numbers</label>
        <Switch name="number" id="numberCheckbox" handler={switchHandler} />
      </div>

      <div className="bg-white shadow p-4 flex justify-between rounded-md dark:bg-slate-800">
        <label htmlFor="symbolCheckbox">Include symbols</label>
        <Switch name="symbol" id="symbolCheckbox" handler={switchHandler} />
      </div>

      <button
        onClick={generateRandomPassword}
        className="bg-purple-500 hover:bg-purple-600 active:bg-purple-700 outline-none shadow-sm text-white p-2 rounded-md"
      >
        Generate Password
      </button>
    </main>
  );
}
