import { deleteProduct } from '@/api/products'
import { addToast, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react'
import { useQueryClient } from '@tanstack/react-query'
import type { Product } from '@/types/products'

type DeleteAlertProps = {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
  product: Product
}

export const DeleteProductModal = ({ isVisible, setIsVisible, product }: DeleteAlertProps) => {
  const queryClient = useQueryClient()
  const handleDelete = async () => {
    if (product.id) {
      try {
        await deleteProduct(product.id)
        addToast({
          title: 'Success',
          description: 'Product deleted successfully',
          color: 'success',
        })
        queryClient.invalidateQueries({ queryKey: ['products'] })
      } catch (error) {
        console.log(error)
        addToast({
          title: 'Error',
          description: 'Something went wrong',
          color: 'danger',
        })
      }
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
