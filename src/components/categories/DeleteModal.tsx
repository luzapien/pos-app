import { deleteCategory } from '@/api/categories'
import { addToast, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react'
import { useQueryClient } from '@tanstack/react-query'

type CategoriesDeleteModalProps = {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
  categoryId: string
}

export const CategoriesDeleteModal = ({ isVisible, setIsVisible, categoryId }: CategoriesDeleteModalProps) => {
  const queryClient = useQueryClient()
  const handleDelete = async () => {
    try {
      await deleteCategory(categoryId)
      addToast({
        title: 'Success',
        description: 'Category deleted successfully',
        color: 'success',
      })
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    } catch (error) {
      console.log(error)
      addToast({
        title: 'Error',
        description: 'Something went wrong',
        color: 'danger',
      })
    }
  }
  return (
    <Modal isOpen={isVisible} onOpenChange={(isVisible) => setIsVisible(isVisible)}>
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1">Are you sure you want to Delete this product?</ModalHeader>
          <ModalBody>
            <p>This action cannot be undone.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={() => setIsVisible(false)}>
              Cancel
            </Button>
            <Button color="primary" onPress={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  )
}
