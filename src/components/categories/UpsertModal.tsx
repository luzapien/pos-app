import { createNewCategory, editCategory } from '@/api/categories'
import { categorySchema } from '@/schemas/categories'
import { addToast, Button, Form, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import type { Category } from '@/types/categories'

type CreateCategoryModalProps = {
  isOpen: boolean
  onOpenChange: () => void
  category?: Category
}
export const UpsertCategoryModal = ({ isOpen, onOpenChange, category }: CreateCategoryModalProps) => {
  const queryClient = useQueryClient()
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: category?.name || '',
    },
  })
  const errors = form.formState.errors

  const onSubmit = form.handleSubmit(async (value) => {
    try {
      if (!category) {
        await createNewCategory(value)
        addToast({
          title: 'Success',
          description: 'Category Created successfully',
          color: 'success',
        })
      } else {
        await editCategory(category.id, value)
        addToast({
          title: 'Success',
          description: 'Category Updated successfully',
          color: 'success',
        })
      }
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      form.reset()
    } catch (error) {
      console.log(error)
    }
  })
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={(isOpen) => {
          onOpenChange()
          if (!isOpen) form.reset()
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">New Category</ModalHeader>
              <ModalBody>
                <Form className="gap-8" onSubmit={onSubmit}>
                  <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
                    <Input label="Name" placeholder="Ex. dairy " {...form.register('name')} isRequired />
                    {errors.name && <span>{errors.name.message}</span>}
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
