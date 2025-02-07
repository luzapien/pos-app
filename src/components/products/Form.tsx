import { useState } from 'react'
import { Button, Form, Input } from '@heroui/react'

type FormData = {
  [k: string]: FormDataEntryValue
}
export const ProductsForm = () => {
  const [submitted, setSubmitted] = useState<FormData>()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.currentTarget))

    setSubmitted(data)
  }

  return (
    <Form className="w-full max-w-xs" validationBehavior="native" onSubmit={onSubmit}>
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
      />
      <Button type="submit" variant="bordered">
        Submit
      </Button>
      {submitted && (
        <div className="text-small text-default-500">
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>
  )
}
