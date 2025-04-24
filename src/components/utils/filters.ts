type FilterOperation = {
    key: string;
    value: string | number;
    operator: 'eq' | 'gt' | 'lt';
  };
  
  export const applyFilters = (
    items: any[],
    operations: FilterOperation[]
  ) => {
    return items.filter(item => 
      operations.every(({ key, value, operator }) => {
        switch(operator) {
          case 'eq': return item[key] === value;
          case 'gt': return item[key] > value;
          case 'lt': return item[key] < value;
          default: return true;
        }
      })
    );
  };
  