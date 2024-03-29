import { taxYears } from '../../constants'

interface SelectProps {
  callBack: (taxYear: string) => void
}

const Select = ({ callBack }: SelectProps) => (
  <>
    <select
      id="taxYear"
      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-5"
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
