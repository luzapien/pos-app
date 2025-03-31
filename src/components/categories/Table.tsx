import { useState } from 'react'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, useDisclosure } from '@heroui/react'
import { EditIcon, Trash2Icon } from 'lucide-react'
import type { Category } from '@/types/categories'
import { useCategories } from '@/hooks/categories/useCategories'
import { CategoriesDeleteModal } from './DeleteModal'
import { UpsertCategoryModal } from './UpsertModal'

const columns = [
  { name: 'CATEGORY', uid: 'category' },
  { name: 'ACTIONS', uid: 'actions' },
]

interface TableCellProps {
  category: Category
  columnKey: string | number
}

const TableCellContent = ({ columnKey, category }: TableCellProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [isVisible, setIsVisible] = useState(false)

  switch (columnKey) {
    case 'category':
      return (
        <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">{category.name}</p>
        </div>
      )
    case 'actions':
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Edit category">
            <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
              <EditIcon size={16} onClick={onOpen} />
              <UpsertCategoryModal isOpen={isOpen} onOpenChange={onOpenChange} category={category} />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete category">
            <span className="cursor-pointer text-lg text-danger active:opacity-50">
              <Trash2Icon
                size={16}
                onClick={() => {
                  setIsVisible(true)
                }}
              />
              <CategoriesDeleteModal isVisible={isVisible} setIsVisible={setIsVisible} categoryId={category.id} />
            </span>
          </Tooltip>
        </div>
      )
    default:
      return columnKey
  }
}

export const CategoriesTable = () => {
  const { data: categories } = useCategories()

  return (
    <>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
        </TableHeader>
        <TableBody items={categories || []}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  <TableCellContent columnKey={columnKey} category={item} />
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}
