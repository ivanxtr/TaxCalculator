interface TaxDataProps {
  income?: number
}

const TaxData = ({ income = 0 }: TaxDataProps) => (
  <div className="sm:w-auto md:w-96 py-5">
    <div className="py-4 flex justify-between">
      <span className="">Taxable income</span>
      <span className="font-bold">${income}</span>
    </div>
    <div className="py-4 flex justify-between">
      <span className="">Effective tax rate</span>
      <span className="font-bold">16.6%</span>
    </div>
    <div className="py-4 flex justify-between border-t-[2px]">
      <span className="text-xl">We estimate you will owe</span>
      <span className="text-xl font-bold text-red-700">$14,260</span>
    </div>
  </div>
)

export default TaxData
