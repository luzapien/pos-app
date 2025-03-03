import {  useEffect, useState } from 'react'
import { getAllProducts } from '@/api/products'
import {
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure,
} from '@heroui/react'
import { EditIcon, Trash2Icon } from 'lucide-react'
import type { Product } from '@/types/products'
import { EditProductModal } from './EditModal'

const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'CATEGORY', uid: 'category' },
  { name: 'PACKAGING', uid: 'packaging' },
  { name: 'ACTIONS', uid: 'actions' },
]

interface TableCellProps {
  product: Product
  columnKey: string | number
}

const TableCellContent = ({ columnKey, product }: TableCellProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  switch (columnKey) {
    case 'name':
      return product.name
    case 'category':
      return (
        <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">{product.category.name}</p>
        </div>
      )
    case 'packaging':
      return (
        <Chip className="capitalize" size="sm" variant="flat">
          {product.packaging}
        </Chip>
      )
    case 'actions':
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Edit product">
            <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
              <EditIcon size={16} onClick={onOpen} />
              <EditProductModal isOpen={isOpen} onOpenChange={onOpenChange} product={product} />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete product">
            <span className="cursor-pointer text-lg text-danger active:opacity-50">
              <Trash2Icon size={16} />
            </span>
          </Tooltip>
        </div>
      )
    default:
      return columnKey
  }
}

export const ProductsTable = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
        </TableHeader>
        <TableBody items={products}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  <TableCellContent columnKey={columnKey} product={item} />
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}
