interface LabelProps {
    htmlFor: string;
    children:string
  } 

const Label = (props: LabelProps) => {
    const {htmlFor, children} = props
  return (
    <label htmlFor={htmlFor} 
    className="block text-sm font-bold mb-2" 
    style={{ color: '#05BFDB' }}>
    {children}
</label>
  )
}

export default Label;