import { useMemo } from "react"
import { useQuery } from "react-query"
import { QueryableProps } from "./props-types"

interface QueryListProps extends QueryableProps {
  listMapper: Function
}
export const QueryList = (props: QueryListProps): JSX.Element => {
    const { data, isError } = useQuery(props.queryKey, props.queryFn)
    
    const contents = useMemo(() => {
      if (data?.results) return data.results.map(props.listMapper)
      if (isError) return <span>Cannot retrieve list</span>
      return <span>Loading</span>
  
    },[data?.results, isError, props.listMapper])
  
    return (
      <div>
        {contents}
      </div>
    )
}