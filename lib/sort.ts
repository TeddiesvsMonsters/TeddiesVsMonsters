export function sortFunction(sortVal: any) {
  switch (sortVal.sortVal) {
    case 'New to old':
      return {
        displayedProducts: sortVal.state.displayedProducts?.sort(
          (a: any, b: any) => {
            if (a.node.createdAt < b.node.createdAt) {
              return 1
            }
            if (a.node.createdAt > b.node.createdAt) {
              return -1
            }
            return 0
          }
        ),
      }

    case 'Old to new':
      return {
        displayedProducts: sortVal.state.displayedProducts?.sort(
          (a: any, b: any) => {
            if (a.node.createdAt < b.node.createdAt) {
              return -1
            }
            if (a.node.createdAt > b.node.createdAt) {
              return 1
            }
            return 0
          }
        ),
      }

    case 'Name:A to Z':
      return {
        displayedProducts: sortVal.state.displayedProducts?.sort(
          (a: any, b: any) => {
            if (a.node.title.toUpperCase() < b.node.title.toUpperCase()) {
              return -1
            }
            if (a.node.title.toUpperCase() > b.node.title.toUpperCase()) {
              return 1
            }
            return 0
          }
        ),
      }

    case 'Name:Z to A':
      return {
        displayedProducts: sortVal.state.displayedProducts?.sort(
          (a: any, b: any) => {
            if (a.node.title.toUpperCase() < b.node.title.toUpperCase()) {
              return 1
            }
            if (a.node.title.toUpperCase() > b.node.title.toUpperCase()) {
              return -1
            }
            return 0
          }
        ),
      }

    case 'Price:Low to high':
      return {
        displayedProducts: sortVal.state.displayedProducts?.sort(
          (a: any, b: any) =>
            a.node.priceRange.minVariantPrice.amount -
            b.node.priceRange.minVariantPrice.amount
        ),
      }

    case 'Price:High to low':
      return {
        displayedProducts: sortVal.state.displayedProducts?.sort(
          (a: any, b: any) =>
            b.node.priceRange.minVariantPrice.amount -
            a.node.priceRange.minVariantPrice.amount
        ),
      }

    default:
      return { displayedProducts: sortVal.state.displayedProducts }
  }
  // switch (sortVal.sortVal) {
  //       case 'New to old':
  //         return ({displayedProducts: sortVal.state.displayedProducts?.sort((a:any, b:any) => {
  //           if (a.attributes.createdAt < b.attributes.createdAt) {
  //             return 1;
  //           }
  //           if (a.attributes.createdAt > b.attributes.createdAt) {
  //             return -1;
  //           }
  //           return 0;
  //         })})

  //         case 'Old to new':
  //         return ({displayedProducts: sortVal.state.displayedProducts?.sort((a:any, b:any) => {
  //           if (a.attributes.createdAt < b.attributes.createdAt) {
  //                 return -1;
  //           }
  //           if (a.attributes.createdAt > b.attributes.createdAt) {
  //             return 1;
  //           }
  //           return 0;
  //         })})

  //       case 'Name:A to Z':
  //         return ({displayedProducts: sortVal.state.displayedProducts?.sort((a:any, b:any) => {
  //         if (a.attributes.name.toUpperCase() < b.attributes.name.toUpperCase()) {
  //           return -1;
  //         }
  //         if (a.attributes.name.toUpperCase() > b.attributes.name.toUpperCase()) {
  //           return 1;
  //         }
  //         return 0;
  //         })})

  //       case 'Name:Z to A':
  //         return ({displayedProducts: sortVal.state.displayedProducts?.sort((a:any, b:any) => {
  //         if (a.attributes.name.toUpperCase() < b.attributes.name.toUpperCase()) {
  //           return 1;
  //         }
  //         if (a.attributes.name.toUpperCase() > b.attributes.name.toUpperCase()) {
  //           return -1;
  //         }
  //         return 0;
  //         })})

  //         case 'Price:Low to high':
  //           return ({displayedProducts: sortVal.state.displayedProducts?.sort((a: any, b: any) => a.attributes.price - b.attributes.price)})

  //         case 'Price:High to low':
  //           return ({displayedProducts: sortVal.state.displayedProducts?.sort((a: any, b: any) => b.attributes.price - a.attributes.price)})

  //       default:
  //         return ({displayedProducts: sortVal.state.displayedProducts})
  //     }
}
