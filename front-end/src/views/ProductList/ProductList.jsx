import { FlexContainer } from '../../components/FlexContainer/FlexContainer'
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { Products } from '../../components/Products/Products'
import { Pagination } from '../../components/Pagination/Pagination'
import { useLoaderData, useParams } from 'react-router-dom'
import { CATEGORIES } from '../../constants/categories'

export function ProductList() {
  const products = useLoaderData()
  const params = useParams()

  const foundCategory = CATEGORIES.find((c) => c.path === params.category)

  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <Products headerText={foundCategory.categoryName} products={products} />
        <Pagination numberOfPages={5} />
      </div>
    </FlexContainer>
  )
}
