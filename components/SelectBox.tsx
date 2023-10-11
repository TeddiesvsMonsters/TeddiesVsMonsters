'use client'
import { useRouter } from "next/navigation"

interface CategoriesType {
    id: number,
    node: string
}

interface SelectBoxType {
  name: string,
  values: CategoriesType[] | string[],
  onChange: React.ChangeEvent<HTMLInputElement> | any,
}

const SelectBox = ({name,values, onChange, }:SelectBoxType) => {
  const router = useRouter()
  return (
    <div>
        <label className="font-semibold" htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)} by </label>
        <select name={name} id={name} onChange={(e) => {
          onChange(e.target.value)
          router.push((`/online-store?page=1`))
          }}>
            <option value=""></option>
            {values.map((value, index) => (
              <option key={index} value={typeof value === 'string' ? value : value.node}>
                {typeof value === 'string' ? value : value.node}
              </option>
            ))}
        </select>
    </div>
  )
}

export default SelectBox