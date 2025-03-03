import { productSchema, type Product } from '@/schemas/product'
import {
  Button,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useCategories } from '@/hooks/categories/useCategories'

type EditProductModalProps = {
  product: Product
  isOpen: boolean
  onOpenChange: () => void
}
export const EditProductModal = (props: EditProductModalProps) => {
  const { newCategoriesValue } = useCategories()

  const form = useForm<Product>({
    shouldUnregister: true,
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: props.product.name,
      category_id: props.product.category_id,
      packaging: props.product.packaging,
      price: props.product.price,
    },
  })

  const errors = form.formState.errors

  const onSubmit = form.handleSubmit(async (values) => {
    console.log('form values', values)
  })

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onOpenChange={(isOpen) => {
          props.onOpenChange()
          if (!isOpen) form.reset()
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{props.product.name}</ModalHeader>
              <ModalBody>
                <Form className="gap-8" onSubmit={onSubmit}>
                  <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
                    <Input label="Name" placeholder="Ex. Milk" {...form.register('name')} isRequired />
                    {errors.name && <span>{errors.name.message}</span>}
                    <Select label="Category" {...form.register('category_id')} placeholder="Select a Category">
                      {newCategoriesValue.map((newValue) => (
                        <SelectItem key={newValue.key}>{newValue.label}</SelectItem>
                      ))}
                    </Select>
                    {errors.category_id && <span>This field is required</span>}
                    <Input label="Packaging" placeholder="Ex. 1 L bottle" {...form.register('packaging')} />
                    {errors.name && <span>This field is required</span>}
                    <Input
                      type="number"
                      label="Price"
                      placeholder="0.00"
                      startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-small text-default-400">$</span>
                        </div>
                      }
                      {...form.register('price')}
                    />
                    {errors.price && <span>{errors.price.message}</span>}
                  </div>
                  <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
                    <div />
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button type="submit" color="primary">
                        Save
                      </Button>
                    </ModalFooter>
                  </div>
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
