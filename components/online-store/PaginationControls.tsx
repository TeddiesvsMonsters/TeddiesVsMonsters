'use client'
import { useRouter, useSearchParams } from "next/navigation"

interface PaginationControlsProps {
  hasNextPage: boolean,
  hasPrevPage: boolean
}

const PaginationControls = ({hasNextPage, hasPrevPage}: PaginationControlsProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'

  return (
    <div className="text-center align-middle my-14">
      {hasPrevPage && (
        <button 
        className="px-3"
        disabled={!hasPrevPage}
        onClick={() => router.push(`/online-store?page=${Number(page) - 1}`)}
      >
        &lt;
      </button>
      )}

      <span>Page {('000'+page).slice(-3)}</span>

      {hasNextPage && (
      <button 
        className="px-3"
        disabled={!hasNextPage}
        onClick={() => router.push(`?page=${Number(page) + 1}`)}
      >
        &gt;
      </button>
      )}
    </div>
  )
}

export default PaginationControls