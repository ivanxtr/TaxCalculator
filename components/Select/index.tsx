import { taxYears } from '@/constants'

interface SelectProps {
  callBack: (taxYear: string) => void
}

const Select = ({ callBack }: SelectProps) => (
  <>
    <label
      htmlFor="taxYear"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Select an option
    </label>
    <select
      id="taxYear"
      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      onChange={(e) => callBack(e.target.value)}
    >
      <option selected>Choose a Tax Year</option>
      {taxYears.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  </>
)

export default Select
