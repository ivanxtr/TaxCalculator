interface InputProps {
  placeholder?: string
  callBack: (amount: number) => void
}

const Input = ({ placeholder, callBack }: InputProps) => (
  <div className="relative w-full">
    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        />
      </svg>
    </div>
    <input
      type="number"
      id="currency-input"
      className="bg-white block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 rounded-lg border-gray-300 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder || 'Annual Income'}
      required
      onChange={(e) => callBack(parseInt(e.target.value))}
    />
  </div>
)

export default Input
