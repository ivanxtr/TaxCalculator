interface TaxDataProps {
  income?: number
  taxes?: number
}

const TaxData = ({ income = 0, taxes }: TaxDataProps) => (
  <div className="sm:w-auto md:w-96 py-5">
    <div className="py-4 flex justify-between">
      <span className="">Taxable income</span>
      <span className="font-bold">${income}</span>
    </div>
    <div className="py-4 flex justify-between border-t-[2px]">
      <span className="text-xl">We estimate you will owe</span>
      <span className="text-xl font-bold text-red-700">
        ${taxes?.toFixed(2)}
      </span>
    </div>
  </div>
)

export default TaxData
