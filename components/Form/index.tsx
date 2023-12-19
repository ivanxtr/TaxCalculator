import { useState, useCallback, useMemo, useEffect } from 'react'
import { fetcher } from '@/utils/fetch'
import { URL } from '@/constants/'

import Input from '@/components/Input'
import Select from '@/components/Select'
import Button from '@/components/Button'
import TaxData from '@/components/TaxData'
import Loader from '@/components/Loader'
import ErrorUI from '@/components/ErrorUI'

const Form = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [amount, setAmount] = useState<number>(0)
  const [taxYear, setTaxYear] = useState<string>('')

  const [buttonIsLoading, setButtonIsLoading] = useState<boolean>(false)
  const [isTaxDataVisible, setTaxDataVisible] = useState<boolean>(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [showError, setShowError] = useState<boolean>(false)

  useMemo(async () => {
    if (!taxYear || !Number(taxYear)) return
    setButtonIsLoading(true)
    setIsDisabled(true)
    try {
      const response = await fetcher(URL + taxYear)
      console.log('response', response)
      setButtonIsLoading(false)
      setIsDisabled(false)
    } catch (error) {
      setIsDisabled(true)
      setButtonIsLoading(false)
      setShowError(true)
    }
  }, [taxYear])

  const calculateTaxes = useCallback(async () => {
    setIsLoading(true)
    setTaxDataVisible(false)
    // simulate tax processing
    setTimeout(() => {
      setIsLoading(false)
      setTaxDataVisible(true)
    }, 1000)
  }, [])

  useEffect(() => {
    setShowError(false)
    setTaxDataVisible(false)
    !buttonIsLoading && setIsDisabled(!Number(taxYear))
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
        <Button isDisabled={isDisabled} isLoading={buttonIsLoading} />
      </form>
      {isLoading && <Loader />}
      {isTaxDataVisible && <TaxData income={amount} />}
      {showError && <ErrorUI />}
    </div>
  )
}

export default Form
