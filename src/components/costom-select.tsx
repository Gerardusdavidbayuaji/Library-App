import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function CostomSelect() {
  return (
<Select>
      <SelectTrigger className="w-32">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          <SelectItem value="category">Fiction</SelectItem>
          <SelectItem value="category1">Fantasy</SelectItem>
          <SelectItem value="category2">Mystery</SelectItem>
          <SelectItem value="category3">Romance</SelectItem>
          <SelectItem value="category4">Science</SelectItem>
          <SelectItem value="category5">History</SelectItem>
          <SelectItem value="category6">Business</SelectItem>
          <SelectItem value="category7">Childern</SelectItem>
          <SelectItem value="category8">Biography</SelectItem>
          <SelectItem value="category9">Religion</SelectItem>
          <SelectItem value="category10">Cookbooks</SelectItem>
          <SelectItem value="category11">Horror</SelectItem>
          <SelectItem value="category12">Psychology</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default CostomSelect