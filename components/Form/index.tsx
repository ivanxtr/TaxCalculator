import { useState, useCallback, useMemo } from 'react'
import { fetcher } from '@/utils/fetch'
import { URL } from '@/constants/'

import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import TaxData from '../TaxData'

const Form = () => {
  const [isTaxDataVisible, setTaxDataVisible] = useState<boolean>(false)
  const [amount, setAmount] = useState<number>(0)
  const [taxYear, setTaxYear] = useState<string>('')
  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true)

  const getTaxYear = useMemo(async () => {
    setButtonIsDisabled(true)
    if (!taxYear) return
    try {
      const response = await fetcher(URL + taxYear)
      console.log('response', response)
      setButtonIsDisabled(false)
    } catch (error) {
      console.log('error', error)
      setButtonIsDisabled(true)
    }
  }, [taxYear])

  const calculateTaxes = useCallback(async () => {
    if (!amount || !taxYear) return
    setTaxDataVisible(true)
  }, [amount, taxYear])

  return (
    <div className="flex flex-col sm:justify-start lg:justify-center sm:items-start md:items-center h-fit">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          calculateTaxes()
        }}
        className="sm:w-auto md:w-96"
      >
        <Input callBack={setAmount} />
        <Select callBack={setTaxYear} />
        <Button isDisabled={buttonIsDisabled} />
      </form>
      {isTaxDataVisible && <TaxData />}
    </div>
  )
}

export default Form
