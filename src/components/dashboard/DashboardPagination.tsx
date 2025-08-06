"use client";

import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

interface DashboardPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function DashboardPagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: DashboardPaginationProps) {
  return (
    <div className="flex justify-end px-6 py-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
              className={currentPage <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>
          
          <PaginationItem>
            <span className="text-sm text-muted-foreground px-3">
              {currentPage}/{totalPages}
            </span>
          </PaginationItem>
          
          <PaginationItem>
            <PaginationNext 
              onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
              className={currentPage >= totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}