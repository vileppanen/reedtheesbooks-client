import { QueryFunction } from "react-query"

export interface QueryableProps {
  queryKey: string
  queryFn: QueryFunction<any, string>
}