export function markSelectedCell(cell: HTMLTableCellElement) {
  cell.style.fontWeight = 'bold';
  cell.style.background = 'var(--highlight-strong)';
}

export function unmarkSelectedCell(cell: HTMLTableCellElement) {
  cell.style.fontWeight = 'normal';
  cell.style.background = '';
}
