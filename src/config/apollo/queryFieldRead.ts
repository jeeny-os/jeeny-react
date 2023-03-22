export const queryFieldRead = (existing: any) => {
  return (
    existing && {
      cursor: existing.cursor,
      items: Object.values(existing.items || []),
    }
  );
};
