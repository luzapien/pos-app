import { Button, useDisclosure } from '@heroui/react'
import { CategoriesTable } from '@/components/categories/Table'
import { UpsertCategoryModal } from '@/components/categories/UpsertModal'

export const Categoriesiew = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1>Products</h1>
        <Button color="primary" size="sm" onPress={onOpen}>
          Add New Category
        </Button>
        <UpsertCategoryModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </div>
      <CategoriesTable />
    </div>
  )
}
